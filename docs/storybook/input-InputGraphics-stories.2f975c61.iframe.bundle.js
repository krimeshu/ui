"use strict";(self.webpackChunk_pixijs_ui=self.webpackChunk_pixijs_ui||[]).push([[979],{"./src/stories/input/InputGraphics.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Graphics:()=>Graphics,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var pixi_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/pixi.js/dist/esm/pixi.mjs"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_Layout__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Layout.ts"),_Input__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/Input.ts"),_utils_helpers_argTypes__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/utils/helpers/argTypes.ts"),_utils_helpers_styles__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/helpers/styles.ts"),_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/utils/helpers/resize.ts");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var args={text:"",placeholder:"Enter text",align:["center","left","right"],textColor:"#000000",backgroundColor:"#F1D583",borderColor:"#DCB000",maxLength:100,fontSize:24,border:5,width:320,height:70,radius:11,count:1,onChange:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.aD)("Input: ")},Graphics=function Graphics(_ref){var text=_ref.text,count=_ref.count,border=_ref.border,textColor=_ref.textColor,fontSize=_ref.fontSize,backgroundColor=_ref.backgroundColor,borderColor=_ref.borderColor,width=_ref.width,height=_ref.height,radius=_ref.radius,maxLength=_ref.maxLength,align=_ref.align,placeholder=_ref.placeholder,onChange=_ref.onChange,view=new _Layout__WEBPACK_IMPORTED_MODULE_2__.Ar({type:"vertical",elementsMargin:10});backgroundColor=backgroundColor.replace("#","0x"),borderColor=Number(borderColor.replace("#","0x")),textColor=Number(textColor.replace("#","0x"));for(var _loop=function _loop(i){var input=new _Input__WEBPACK_IMPORTED_MODULE_3__.I({bg:(new pixi_js__WEBPACK_IMPORTED_MODULE_0__.TCu).beginFill(borderColor).drawRoundedRect(0,0,width,height,radius+border).beginFill(backgroundColor).drawRoundedRect(border,border,width-2*border,height-2*border,radius),padding:border?border+3:0,textStyle:_objectSpread(_objectSpread({},_utils_helpers_styles__WEBPACK_IMPORTED_MODULE_4__.B),{},{fill:textColor,fontSize}),maxLength,align,placeholder,value:text});input.onChange.connect((function(){return onChange(input.value)})),view.addChild(input)},i=0;i<count;i++)_loop();return{view,resize:function resize(){return(0,_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_5__.w)(view)}}};const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"import { Graphics as PixiGraphics } from 'pixi.js';\nimport { action } from '@storybook/addon-actions';\nimport { Layout } from '../../Layout';\nimport { Input } from '../../Input';\nimport { argTypes, getDefaultArgs } from '../../utils/helpers/argTypes';\nimport { defaultTextStyle } from '../../utils/helpers/styles';\nimport { centerElement } from '../../utils/helpers/resize';\n\nconst args = {\n    text: '',\n    placeholder: 'Enter text',\n    align: ['center', 'left', 'right'],\n    textColor: '#000000',\n    backgroundColor: '#F1D583',\n    borderColor: '#DCB000',\n    maxLength: 100,\n    fontSize: 24,\n    border: 5,\n    width: 320,\n    height: 70,\n    radius: 11,\n    count: 1,\n\n    onChange: action('Input: '),\n};\n\nexport const Graphics = ({\n    text,\n    count,\n    border,\n    textColor,\n    fontSize,\n    backgroundColor,\n    borderColor,\n    width,\n    height,\n    radius,\n    maxLength,\n    align,\n    placeholder,\n    onChange,\n}: any) => {\n    const view = new Layout({ type: 'vertical', elementsMargin: 10 });\n\n    backgroundColor = backgroundColor.replace('#', '0x');\n    borderColor = Number(borderColor.replace('#', '0x'));\n    textColor = Number(textColor.replace('#', '0x'));\n\n    for (let i = 0; i < count; i++) {\n        // Component usage\n        const input = new Input({\n            bg: new PixiGraphics()\n                .beginFill(borderColor)\n                .drawRoundedRect(0, 0, width, height, radius + border)\n                .beginFill(backgroundColor)\n                .drawRoundedRect(\n                    border,\n                    border,\n                    width - border * 2,\n                    height - border * 2,\n                    radius,\n                ),\n            padding: border ? border + 3 : 0,\n            textStyle: {\n                ...defaultTextStyle,\n                fill: textColor,\n                fontSize,\n            },\n            maxLength,\n            align,\n            placeholder,\n            value: text,\n        });\n\n        input.onChange.connect(() => onChange(input.value));\n\n        view.addChild(input);\n    }\n\n    return { view, resize: () => centerElement(view) };\n};\n\nexport default {\n    title: 'UI components/Input/Graphics',\n    argTypes: argTypes(args),\n    args: getDefaultArgs(args),\n};\n",locationsMap:{graphics:{startLoc:{col:24,line:27},endLoc:{col:1,line:81},startBody:{col:24,line:27},endBody:{col:1,line:81}}}}},title:"UI components/Input/Graphics",argTypes:(0,_utils_helpers_argTypes__WEBPACK_IMPORTED_MODULE_6__.P)(args),args:(0,_utils_helpers_argTypes__WEBPACK_IMPORTED_MODULE_6__.V)(args)};var __namedExportsOrder=["Graphics"]},"./src/Input.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Input});var pixi_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/pixi.js/dist/esm/pixi.mjs"),typed_signals__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/typed-signals/dist/index.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(self)}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}var Input=function(_Container){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(Input,_Container);var _super=_createSuper(Input);function Input(options){var _options$textStyle,_options$value,_this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Input),_defineProperty(_assertThisInitialized(_this=_super.call(this)),"editing",!1),_defineProperty(_assertThisInitialized(_this),"tick",0),_defineProperty(_assertThisInitialized(_this),"activation",!1),_this.options=options,_this.bg="string"==typeof options.bg?new pixi_js__WEBPACK_IMPORTED_MODULE_0__.jyi(pixi_js__WEBPACK_IMPORTED_MODULE_0__.xEZ.from(options.bg)):options.bg,_this.bg.buttonMode=_this.bg.interactive=!0;var defaultTextStyle={fill:0,align:"center"},textStyle=new pixi_js__WEBPACK_IMPORTED_MODULE_0__.pn8(null!==(_options$textStyle=options.textStyle)&&void 0!==_options$textStyle?_options$textStyle:defaultTextStyle);if(_this.inputField=new pixi_js__WEBPACK_IMPORTED_MODULE_0__.xvT("",textStyle),_this.inputMask=(new pixi_js__WEBPACK_IMPORTED_MODULE_0__.TCu).beginFill(16777215).drawRect(_this.padding,_this.padding,_this.bg.width-2*_this.padding,_this.bg.height-2*_this.padding),_this._cursor=new pixi_js__WEBPACK_IMPORTED_MODULE_0__.jyi(pixi_js__WEBPACK_IMPORTED_MODULE_0__.xEZ.WHITE),_this._cursor.tint=Number(options.textStyle.fill)||0,_this._cursor.anchor.set(.5),_this._cursor.width=2,_this._cursor.height=.8*_this.inputField.height,_this._cursor.alpha=0,_this.inputField.mask=_this.inputMask,_this._cursor.mask=_this.inputMask,_this.placeholder=new pixi_js__WEBPACK_IMPORTED_MODULE_0__.xvT(options.placeholder,null!=textStyle?textStyle:defaultTextStyle),_this.placeholder.visible=!!options.placeholder,_this.value=null!==(_options$value=options.value)&&void 0!==_options$value?_options$value:"",_this.addChild(_this.bg,_this.inputField,_this.placeholder,_this._cursor,_this.inputMask),_this.align(),_this.interactive=_this.buttonMode=!0,_this.on("pointertap",(function(){return _this.activation=!0})),pixi_js__WEBPACK_IMPORTED_MODULE_0__.P6Y.tq.any){window.addEventListener("touchstart",(function(){return _this.handleActivation()}));var keyboard=document.getElementById("v-keyboard");keyboard||(keyboard=document.createElement("input"),document.body.appendChild(keyboard),keyboard.setAttribute("id","v-keyboard"),keyboard.style.opacity="0"),keyboard.oninput=function(){var value=keyboard.value,maxLength=_this.options.maxLength;maxLength&&value.length>_this.options.maxLength&&(value=value.substring(0,maxLength),keyboard.value=value),_this.value=value,_this.onChange.emit(_this.value)}}else window.addEventListener("click",(function(){_this.handleActivation(),_this.onEnter.emit(_this.value)})),window.addEventListener("keydown",(function(e){var key=e.key;"Backspace"===key?_this._delete():"Escape"===key||"Enter"===key?(_this.stopEditing(),_this.onEnter.emit(_this.value)):1===key.length&&_this._add(key)}));return _this.onEnter=new typed_signals__WEBPACK_IMPORTED_MODULE_1__.MZ,_this.onChange=new typed_signals__WEBPACK_IMPORTED_MODULE_1__.MZ,_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Input,[{key:"_add",value:function _add(key){this.editing&&(this.options.maxLength&&this.value.length>=this.options.maxLength||(this.value=this.value+key,this.onChange.emit(this.value)))}},{key:"_delete",value:function _delete(){if(this.editing&&0!==this.value.length){var array=this.value.split("");array.pop(),this.value=array.join(""),this.onChange.emit(this.value)}}},{key:"_startEditing",value:function _startEditing(){if(this.tick=0,this.editing=!0,this.placeholder.visible=!1,this._cursor.alpha=1,pixi_js__WEBPACK_IMPORTED_MODULE_0__.P6Y.tq.any){var keyboard=document.getElementById("v-keyboard");keyboard.focus(),keyboard.click(),keyboard.value=this.value}this.align()}},{key:"handleActivation",value:function handleActivation(){this.stopEditing(),this.activation&&(this._startEditing(),this.activation=!1)}},{key:"stopEditing",value:function stopEditing(){var _document$getElementB;this._cursor.alpha=0,this.editing=!1,""===this.inputField.text&&(this.placeholder.visible=!0),0===this.value.length&&(this.placeholder.visible=!0),pixi_js__WEBPACK_IMPORTED_MODULE_0__.P6Y.tq.any&&(null===(_document$getElementB=document.getElementById("v-keyboard"))||void 0===_document$getElementB||_document$getElementB.blur()),this.align()}},{key:"update",value:function update(dt){this.editing&&(this.tick+=.1*dt,this._cursor.alpha=Math.round(.5*Math.sin(this.tick)+.5))}},{key:"align",value:function align(){var align=this.getAlign();this.inputField.anchor.set(align,.5),this.inputField.x=this.bg.width*align+(1===align?-this.padding:this.padding),this.inputField.y=this.bg.height/2,this.placeholder.anchor.set(align,.5),this.placeholder.x=this.bg.width*align+(1===align?-this.padding:this.padding),this.placeholder.y=this.bg.height/2,this._cursor.x=this.getCursorPosX(),this._cursor.y=this.inputField.y}},{key:"padding",get:function get(){return 0|this.options.padding}},{key:"getAlign",value:function getAlign(){var maxWidth=.95*this.bg.width;if(this.inputField.width+3*this.padding>maxWidth)return this.editing?1:0;switch(this.options.align){case"left":default:return 0;case"center":return.5;case"right":return 1}}},{key:"getCursorPosX",value:function getCursorPosX(){switch(this.getAlign()){case 0:return this.inputField.x+this.inputField.width;case.5:return this.inputField.x+.5*this.inputField.width;case 1:return this.inputField.x}}},{key:"value",get:function get(){return this.inputField.text},set:function set(text){this.inputField.text=text,0!==text.length?this.placeholder.visible=!1:this.placeholder.visible=!this.editing,this.align()}}]),Input}(pixi_js__WEBPACK_IMPORTED_MODULE_0__.W20)},"./src/utils/helpers/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>defaultTextStyle});var defaultTextStyle=new(__webpack_require__("./node_modules/pixi.js/dist/esm/pixi.mjs").pn8)({fill:16777215,fontSize:42,fontWeight:"bold",dropShadow:!0,dropShadowAlpha:.5,dropShadowDistance:0,dropShadowBlur:3})}}]);