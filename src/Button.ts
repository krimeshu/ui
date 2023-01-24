import { ObservablePoint } from '@pixi/core';
import { Container } from '@pixi/display';
import { Text } from '@pixi/text';
import { Sprite } from '@pixi/sprite';
import { getView } from './utils/helpers/view';
import { getTextView } from './utils/helpers/text';
import { ButtonEvents } from './ButtonEvents';
import { Signal } from 'typed-signals';
import { FederatedPointerEvent } from '@pixi/events';

const states = ['default', 'hover', 'pressed', 'disabled'] as const;

type State = typeof states[number];
type Pos = { x?: number; y?: number };
type PosList = { [K in State]?: Pos };

export type Offset = Pos & PosList;

type Views = {
    defaultView: string | Container;
    hoverView?: string | Container;
    pressedView?: string | Container;
    disabledView?: string | Container;
    text?: string | number | Text;
};

export type ButtonOptions = Views & {
    padding?: number;
    anchor?: number;
    anchorX?: number;
    anchorY?: number;
    offset?: Offset;
    textOffset?: Offset;
};

/**
 * Button component with lots of settings, that can be used to create a button fast.
 *
 * Text view by default is centered in the active view.
 *
 * If views are not the same size, offset property of the constructor
 * can be used to adjust the position of the text and the view.
 * @example
 * ```
 * const button = new Button({
 *     defaultView: `button.png`,
 *     hoverView: `button_hover.png`,
 *     pressedView: `button_pressed.png`,
 *     disabledView: `button_disabled.png`,
 *     text: new Text(text, { fill: 0xFFFFFF }),
 *     icon: `icon.png`,
 * });
 *
 * ```
 */
export class Button extends Container
{
    private events: ButtonEvents;

    /** Padding of the button text view. If button text does not fit active view + padding it will scale down to fit. */
    public padding: number;

    /** Offset of the button state views. If state views have different sizes, this option can help adjust them. */
    public offset: Offset & Pos;

    /** Offset of the text view. Can be set to any state of the button. */
    public textOffset: Offset;

    //* View that holds all button inner views */
    public innerView: Container;

    /** View that is shown when non of button events is active. */
    public defaultView: Container;

    /** View that is shown when mouse hovers the component. */
    public hoverView!: Container;

    /** View that is shown when mouse is pressed on the component. */
    public pressedView!: Container;

    /** View that is shown when button is disabled. */
    public disabledView!: Container;

    /** View for the button text. */
    public textView!: Text;

    /** State of the button. Possible valuers are: 'default', 'hover', 'pressed', 'disabled' */
    public state: State = 'default';

    /** Anchor point of the button. */
    public anchor: ObservablePoint;

    /** Event that is fired when button is pressed. */
    public onPress: Signal<(btn?: this, e?: FederatedPointerEvent) => void>;

    /** Event that is fired when button is down. */
    public onDown: Signal<(btn?: this, e?: FederatedPointerEvent) => void>;

    /**
     * Event that is fired when down event happened inside the button
     * and up event happened inside or outside of the button
     */
    public onUp: Signal<(btn?: this, e?: FederatedPointerEvent) => void>;

    /** Event that is fired when mouse hovers the button. */
    public onHover: Signal<(btn?: this, e?: FederatedPointerEvent) => void>;

    /** Event that is fired when mouse leaves button view. */
    public onOut: Signal<(btn?: this, e?: FederatedPointerEvent) => void>;

    /**
     * Event that is fired when up event happens outside of the button
     * when down event happened inside the button boundaries.
     */
    public onUpOut: Signal<(btn?: this, e?: FederatedPointerEvent) => void>;

    constructor({
        defaultView,
        hoverView,
        pressedView,
        disabledView,
        text,
        padding,
        offset,
        textOffset,
        anchor,
        anchorX,
        anchorY
    }: ButtonOptions)
    {
        super();

        this.createViews({
            defaultView,
            hoverView,
            pressedView,
            disabledView,
            text
        });

        this.anchor = new ObservablePoint(this.resetPositions, this, anchorX ?? anchor ?? 0, anchorY ?? anchor ?? 0);
        this.resetPositions();

        this.padding = padding ?? 0;
        this.offset = offset;
        this.textOffset = textOffset;

        this.setState('default');

        this.addEvents();
    }

    /**
     * Updates text of the text element of the button and updates text scaling basing one it's new size.
     * @param {string | number} text - text to be set.
     */
    set text(text: string | number)
    {
        if (!this.textView)
        {
            this.createTextView(typeof text === 'number' ? text.toString() : text);
        }

        this.textView.text = text;
        this.setState(this.state);
    }

    /** Returns the text string of the button text element. */
    get text(): string
    {
        return this.textView?.text;
    }

    /**
     * Setter, that prevents all button events from firing.
     * @param {boolean} enabled
     */
    set enabled(enabled: boolean)
    {
        this.events.enabled = enabled;

        this.setState(enabled ? 'default' : 'disabled');
    }

    /** Getter that returns button state, that controls if button events are firing. */
    get enabled(): boolean
    {
        return this.events.enabled;
    }

    /**
     * Manages button text view.
     * @param {string | Text} text - can be a string or a Text (Container based element).
     */
    private createTextView(text: string | number | Text)
    {
        this.textView = getTextView(text);
        this.textView.anchor.set(0);
    }

    /**
     * Manages views offsets if it's set.
     * @param view
     * @param state
     * @param offset
     */
    private setOffset(view: Container, state: State, offset: Offset)
    {
        const stateOffset = offset[state];
        const defaultStateOffset = offset?.default;

        if (stateOffset)
        {
            view.x += stateOffset.x ?? 0;
            view.y += stateOffset.y ?? 0;
        }
        else if (defaultStateOffset)
        {
            view.x += defaultStateOffset.x ?? 0;
            view.y += defaultStateOffset.y ?? 0;
        }
        else if (offset.x || offset.y)
        {
            view.x += offset.x ?? 0;
            view.y += offset.y ?? 0;
        }
    }

    /** Hides all button views. */
    private hideAllViews()
    {
        if (this.defaultView)
        {
            this.defaultView.visible = false;
        }

        if (this.hoverView)
        {
            this.hoverView.visible = false;
        }

        if (this.pressedView)
        {
            this.pressedView.visible = false;
        }

        if (this.disabledView)
        {
            this.disabledView.visible = false;
        }
    }

    /**
     * Returns active view for the state.
     * @param state
     */
    private getStateView(state: State): Container
    {
        switch (state)
        {
            case 'hover':
                return this.hoverView ?? this.defaultView;
            case 'pressed':
                return this.pressedView ?? this.defaultView;
            case 'disabled':
                return this.disabledView ?? this.defaultView;
            case 'default':
            default:
                return this.defaultView;
        }
    }

    /**
     * Updates button state and shows according views.
     * Updates positions and offsets of the views.
     * @param {State} newState
     */
    private setState(newState: State)
    {
        this.state = newState;

        this.hideAllViews();

        const activeView = this.getStateView(newState);

        activeView.visible = true;

        this.resetPositions();
        this.setOffset(activeView, newState, this.offset);
        this.adjustTextView(newState);
    }

    /**
     * Adjusts text view position and scale.
     * @param {State} state
     */
    private adjustTextView(state: State)
    {
        if (!this.textView)
        {
            return;
        }

        const activeView = this.getStateView(this.state);
        const maxWidth = activeView.width - (this.padding * 2);

        if (Math.round(this.textView.width) > maxWidth)
        {
            const scale = maxWidth / this.textView.width;

            this.textView.scale.set(scale);
        }

        activeView.addChild(this.textView);

        this.textView.x = (activeView.width - this.textView.width) / 2;
        this.textView.y = (activeView.height - this.textView.height) / 2;

        this.setOffset(this.textView, state, this.textOffset);
    }

    /**
     * Resets views positions according to button anchor setting.
     *  We have to set the anchor position for each view individually, as each of them
     *  can be different type of view (container without anchor, sprite with anchor etc)
     *  we have to reset all anchors to 0,0 and then set the position manually.
     */
    private resetPositions()
    {
        const x = this.anchor.x;
        const y = this.anchor.y;

        [this.defaultView, this.hoverView, this.pressedView, this.disabledView].forEach((view) =>
        {
            (view as Sprite).anchor?.set(0);

            view.x = -view.width * x;
            view.y = -view.height * y;
        });
    }

    /**
     * Button views manager. Adds or creates all button views according to the config.
     * @param {Views} views
     */
    private createViews(views: Views)
    {
        const { defaultView, hoverView, pressedView, disabledView, text } = views;

        this.innerView = new Container();
        this.addChild(this.innerView);

        this.defaultView = getView(defaultView);
        this.innerView.addChild(this.defaultView);

        if (hoverView)
        {
            this.hoverView = getView(hoverView);
            this.innerView.addChild(this.hoverView);
            this.hoverView.visible = false;
        }

        if (pressedView)
        {
            this.pressedView = getView(pressedView);
            this.innerView.addChild(this.pressedView);
            this.pressedView.visible = false;
        }

        if (disabledView)
        {
            this.disabledView = getView(disabledView);
            this.innerView.addChild(this.disabledView);
            this.disabledView.visible = false;
        }

        if (text)
        {
            this.createTextView(text);
        }
    }

    /** Creates all button events */
    private addEvents()
    {
        this.events = new ButtonEvents(this);

        this.onPress = new Signal();
        this.onDown = new Signal();
        this.onUp = new Signal();
        this.onHover = new Signal();
        this.onOut = new Signal();
        this.onUpOut = new Signal();

        this.events.onPress.connect((_bth, e?: FederatedPointerEvent) =>
        {
            this.onPress.emit(this, e);
            this.setState('hover');
        });

        this.events.onDown.connect((_bth, e?: FederatedPointerEvent) =>
        {
            this.onDown.emit(this, e);
            this.setState('pressed');
        });

        this.events.onUp.connect((_bth, e?: FederatedPointerEvent) =>
        {
            this.onUp.emit(this, e);
            this.setState('hover');
        });

        this.events.onHover.connect((_bth, e?: FederatedPointerEvent) =>
        {
            this.onHover.emit(this, e);
            this.setState('hover');
        });

        this.events.onOut.connect((_bth, e?: FederatedPointerEvent) =>
        {
            this.onOut.emit(this, e);
            this.setState('default');
        });

        this.events.onUpOut.connect((_bth, e?: FederatedPointerEvent) =>
        {
            this.onUpOut.emit(this, e);
            this.setState('default');
        });
    }
}
