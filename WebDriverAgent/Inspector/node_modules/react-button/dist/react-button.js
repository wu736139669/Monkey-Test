(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["ReactButton"] = factory(require("React"));
	else
		root["ReactButton"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */'use strict'

	var React     = __webpack_require__(1)
	var assign    = __webpack_require__(2)
	var normalize = __webpack_require__(3)

	function emptyFn(){}

	function toUpperFirst(s){
	    return s?
	            s.charAt(0).toUpperCase() + s.substring(1):
	            ''
	}

	var ALIGN = (function(){
	    var MAP = {
	        left  : 'flex-start',
	        start : 'flex-start',
	        center: 'center',
	        right : 'flex-end',
	        end   : 'flex-end'
	    }

	    return function(value){
	        return MAP[value] || value
	    }
	})()

	var PropTypes    = React.PropTypes
	var DISPLAY_NAME = 'ReactButton'

	var THEME = {
	    'default': {
	        //default type
	        style: {
	            border    : '1px solid rgb(46, 153, 235)',
	            color     : 'rgb(84, 84, 84)',
	        },
	                overStyle: {
	                    background: 'linear-gradient(to bottom, rgb(125, 191, 242) 0%, rgb(110, 184, 241) 50%, rgb(117, 188, 242) 100%)',
	                    color: 'white'
	                },

	                activeStyle: {
	                    //-6 lightness from overStyle
	                    background: ' linear-gradient(to bottom, rgb(106,182,240) 0%,rgb(91,175,239) 50%,rgb(96,178,240) 100%)',
	                    color: 'white'
	                },

	            //disabled
	            disabledStyle: {
	                //theme properties
	                background: 'rgb(221, 221, 221)',
	                border: '1px solid rgb(147, 147, 147)',
	                color: 'rgb(128, 128, 128)'
	            },

	            //pressed
	            pressedStyle: {
	                background: 'linear-gradient(to bottom, rgb(22,135,222) 0%,rgb(20,129,212) 50%,rgb(20,132,218) 100%)',
	                color: 'white'
	            },

	                overPressedStyle: {
	                    // +14 lightness from pressed style
	                    background: 'linear-gradient(to bottom, rgb(48,153,234) 0%,rgb(36,148,234) 50%,rgb(41,151,235) 100%)',
	                },

	                activePressedStyle: {
	                    background: 'linear-gradient(to bottom, rgb(58,159,236) 0%,rgb(45,153,235) 50%,rgb(50,155,236) 100%)'
	                },

	            //focused
	            focusedStyle: {}
	            //---NONE ----
	    },
	    'primary': {
	        style: {
	            background: 'linear-gradient(to bottom, #4ea9ee 0%,#41a2ed 50%,#46a5ee 100%)',
	            color: 'white'
	        },

	                overStyle: {
	                    // + 10 lightness from primary
	                    background: 'linear-gradient(to bottom, rgb(96,178,240) 0%,rgb(83,171,239) 50%,rgb(88,174,240) 100%)'
	                },

	                activeStyle: {
	                    // -5 lightness from primary
	                    background: 'linear-gradient(to bottom, rgb(64,162,236) 0%,rgb(50,155,236) 50%,rgb(55,158,237) 100%)'
	                },

	            //disabled
	            disabledStyle: {
	                //theme properties
	                background: 'rgb(116, 144, 166)',
	                color: 'rgb(190, 190, 190)'
	            }

	            //pressed
	            //---NONE---

	            //focused
	            //---NONE---
	    }
	}

	var ReactButton = React.createClass({

	    displayName: DISPLAY_NAME,

	    propTypes: {
	        fn: PropTypes.func,
	        onClick: PropTypes.func,

	        primary: PropTypes.bool,
	        disabled: PropTypes.bool,
	        pressed: PropTypes.bool,
	        defaultPressed: PropTypes.bool,

	        href: PropTypes.string,
	        align: PropTypes.string,

	        style: PropTypes.object,

	        className       : PropTypes.string,
	        activeClassName : PropTypes.string,
	        overClassName   : PropTypes.string,
	        focusedClassName: PropTypes.string,
	        disabledClassName: PropTypes.string
	    },

	    getDefaultProps: function() {
	        return {
	            isReactButton: true,
	            applyDefaultTheme: true,
	            buttonStates: ['focused', 'pressed'],

	            'data-display-name': DISPLAY_NAME,

	            align: 'center',

	            defaultStyle: {
	                boxSizing     : 'border-box',

	                display       : 'inline-flex',
	                alignItems    : 'center',
	                justifyContent: 'center',

	                userSelect    : 'none',
	                textDecoration: 'none',
	                cursor        : 'pointer',
	                overflow      : 'hidden',

	                //theme properties
	                //fontFamily: 'Arial',
	                // fontSize  : '0.9em',
	                whiteSpace: 'nowrap',
	                padding   : 5,
	                margin    : 2
	            },

	            defaultDisabledStyle: {
	                cursor: 'default',
	            },

	            defaultLabelStyle: {
	                display: 'inline-block'
	            },

	            ellipsisLabelStyle: {
	                textOverflow: 'ellipsis',
	                overflow: 'hidden',
	                whiteSpace: 'nowrap'
	            },

	            ellipsis: true,

	            href: ''
	        }
	    },

	    getInitialState: function() {
	        return {
	            mouseOver: false,
	            active: false,
	            defaultPressed: this.props.defaultPressed
	        }
	    },

	    isFocused: function() {
	        return this.state.focused
	    },

	    isActive: function() {
	        return !!this.state.active
	    },

	    render: function(){
	        var props = this.prepareProps(this.props, this.state)

	        return (props.factory || React.DOM.a)(props)
	    },

	    prepareProps: function(thisProps, state) {

	        var props = {}

	        assign(props, thisProps)

	        props.theme = this.prepareTheme(props)

	        var pressed = props.pressed != null? props.pressed: state.defaultPressed

	        if (pressed != null){
	            props.pressed = pressed
	        }

	        props.active    = props.activeState == null? !!state.active: props.activeState
	        props.over      = props.overState == null? !!state.mouseOver: props.overState
	        props.focused   = props.focusedState == null? !!state.focused: props.focusedState

	        props['data-active']  = props.active
	        props['data-over']    = props.over
	        props['data-focused'] = props.focused
	        props['data-pressed'] = props.pressed
	        props['data-disabled'] = props.disabled

	        props.style     = this.prepareStyle(props, state)
	        props.className = this.prepareClassName(props, state)
	        props.children  = this.prepareChildren(props)

	        var handleClick = this.handleClick.bind(this, props)

	        props.onClick = typeof props.interceptClick == 'function'?
	                            props.interceptClick.bind(this, handleClick):
	                            handleClick

	        props.onFocus      = this.handleFocus.bind(this, props)
	        props.onBlur       = this.handleBlur.bind(this, props)
	        props.onMouseEnter = this.handleMouseEnter.bind(this, props)
	        props.onMouseLeave = this.handleMouseLeave.bind(this, props)
	        props.onMouseDown  = this.handleMouseDown.bind(this, props)
	        props.onMouseUp    = this.handleMouseUp.bind(this, props)

	        return props
	    },

	    handleFocus: function(props, event) {
	        if (props.disabled){
	            return
	        }

	        this.setState({
	            focused: true
	        })

	        ;(this.props.onFocus || emptyFn)(event)
	    },

	    handleBlur: function(props, event) {
	        if (props.disabled){
	            return
	        }

	        this.setState({
	            focused: false
	        })

	        ;(this.props.onBlur || emptyFn)(event)
	    },

	    handleClick: function(props, event) {
	        if (!props.href || props.disabled){
	            event.preventDefault()
	        }

	        if (props.disabled){
	            return
	        }

	        if (props.pressed != null){
	            var newPressed = !props.pressed

	            if (this.props.pressed == null){
	                this.setState({
	                    defaultPressed: newPressed
	                })
	            }

	            ;(this.props.onToggle || emptyFn)(newPressed, event)
	        }

	        ;(this.props.onClick || emptyFn)(event)
	        ;(this.props.fn || emptyFn)(props, event)
	    },

	    handleMouseEnter: function(props, event) {
	        if (props.disabled){
	            return
	        }

	        this.setState({
	            mouseOver: true
	        })

	        ;(this.props.onMouseEnter || emptyFn)(event)
	    },

	    handleMouseLeave: function(props, event) {
	        if (props.disabled){
	            return
	        }

	        this.setState({
	            mouseOver: false
	        })

	        ;(this.props.onMouseLeave || emptyFn)(event)
	    },

	    handleMouseUp: function(props, event) {
	        if (props.disabled){
	            return
	        }

	        this.setState({
	            active: false
	        })

	        window.removeEventListener('mouseup', this.handleMouseUp)

	        ;(this.props.onMouseUp || emptyFn)(event)
	        ;(this.props.onDeactivate || emptyFn)(event)
	    },

	    handleMouseDown: function(props, event) {

	        if (props.disabled){
	            return
	        }

	        this.setState({
	            active: true
	        })

	        window.addEventListener('mouseup', this.handleMouseUp)

	        ;(this.props.onMouseDown || emptyFn)(event)
	        ;(this.props.onActivate || emptyFn)(event)
	    },

	    prepareTheme: function(props){
	        var theme  = props.theme
	        var THEMES = props.themes = props.themes || this.constructor.theme || THEME

	        if (typeof theme == 'string'){
	            theme = THEMES[theme]?
	                        THEMES[theme]:
	                        null
	        }

	        return theme == null?
	                THEMES.default:
	                theme
	    },

	    prepareChildren: function(props) {
	        var children = props.children

	        if (props.label){

	            var labelProps = assign({}, props.defaultLabelProps, props.labelProps)
	            var defaultLabelStyle = assign({}, props.defaultLabelStyle)

	            if (props.ellipsis){
	                assign(defaultLabelStyle, props.ellipsisLabelStyle)
	            }

	            var labelStyle = assign({}, defaultLabelStyle, labelProps.style, props.labelStyle)

	            labelProps.style = labelStyle

	            children = React.createElement("span", React.__spread({},  labelProps), 
	                props.label
	            )
	        }

	        if (typeof this.props.renderChildren === 'function'){
	            return this.props.renderChildren(children)
	        }

	        return children
	    },

	    prepareClassName: function(props) {

	        var className = props.className || ''

	        if (props.disabled){
	            if (props.disabledClassName){
	                className += ' ' + props.disabledClassName
	            }
	        } else {
	            if (props.active && props.activeClassName){
	                className += ' ' + props.activeClassName
	            }

	            if (props.pressed && props.pressedClassName){
	                className += ' ' + props.pressedClassName
	            }

	            if (props.over && props.overClassName){
	                className += ' ' + props.overClassName
	            }

	            if (props.focused && props.focusedClassName){
	                className += ' ' + props.focusedClassName
	            }
	        }

	        return className
	    },

	    prepareComputedStyleNames: function(props){

	        if (typeof props.computeStyleNames == 'function'){
	            return props.computeStyleNames(props)
	        }

	        var names = ['style']

	        if (props.disabled){
	            names.push('disabledStyle')

	            return names
	        }

	        if (props.focused){
	            names.push('focusedStyle')
	        }
	        if (props.pressed){
	            names.push('pressedStyle')
	        }

	        if (typeof props.addStateStyle == 'function'){
	            props.addStateStyle(names)
	        }

	        if (props.focused && props.pressed){
	            names.push('focusedPressedStyle')
	        }

	        if (typeof props.addCombinedStateStyle == 'function'){
	            props.addCombinedStateStyle(names)
	        }

	        //names is something like ['style','focusedStyle','pressedStyle', 'focusedPressedStyle']
	        //
	        //now we add over and active styles

	        var overNames
	        if (props.over){
	            overNames = names.map(function(name){
	                return 'over' + toUpperFirst(name)
	            })
	        }

	        var activeNames
	        if (props.active){
	            activeNames = names.map(function(name){
	                return 'active' + toUpperFirst(name)
	            })
	        }

	        overNames   && names.push.apply(names, overNames)
	        activeNames && names.push.apply(names, activeNames)

	        return names
	    },

	    prepareStyle: function(props) {

	        var style = assign({}, this.prepareDefaultStyle(props))

	        var styleNames = this.prepareComputedStyleNames(props)
	        var theme      = props.theme
	        var THEMES     = props.themes

	        if (theme){
	            //apply default theme first
	            if (props.applyDefaultTheme && THEMES.default && theme != THEMES.default){
	                styleNames.forEach(function(styleName){
	                    assign(style, THEMES.default[styleName])
	                })
	            }

	            //then apply theme
	            styleNames.forEach(function(styleName){
	                assign(style, theme[styleName])
	            })
	        }

	        ;(props.onThemeStyleReady || emptyFn)(style, props)

	        //TODO apply default non-theme first to typed buttons
	        //then non-theme
	        styleNames.forEach(function(styleName){
	            assign(style, props[styleName])
	        })

	        ;(props.onStyleReady || emptyFn)(style, props)

	        return normalize(style)
	    },

	    prepareDefaultStyle: function(props){
	        var defaultStyle = assign({}, props.defaultStyle)

	        if (props.block){
	            defaultStyle.display = 'flex'
	        }

	        defaultStyle.justifyContent = ALIGN(props.align)

	        if (props.disabled){
	            assign(defaultStyle, props.defaultDisabledStyle)
	        }

	        return defaultStyle
	    }
	})

	ReactButton.themes = THEME

	module.exports = ReactButton

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function ToObject(val) {
		if (val == null) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	module.exports = Object.assign || function (target, source) {
		var from;
		var keys;
		var to = ToObject(target);

		for (var s = 1; s < arguments.length; s++) {
			from = arguments[s];
			keys = Object.keys(Object(from));

			for (var i = 0; i < keys.length; i++) {
				to[keys[i]] = from[keys[i]];
			}
		}

		return to;
	};


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var hasOwn      = __webpack_require__(4)
	var getPrefixed = __webpack_require__(5)

	var map      = __webpack_require__(6)
	var plugable = __webpack_require__(7)

	function plugins(key, value){

		var result = {
			key  : key,
			value: value
		}

		;(RESULT.plugins || []).forEach(function(fn){

			var tmp = map(function(res){
				return fn(key, value, res)
			}, result)

			if (tmp){
				result = tmp
			}
		})

		return result
	}

	function normalize(key, value){

		var result = plugins(key, value)

		return map(function(result){
			return {
				key  : getPrefixed(result.key, result.value),
				value: result.value
			}
		}, result)

		return result
	}

	var RESULT = function(style){
		var k
		var item
		var result = {}

		for (k in style) if (hasOwn(style, k)){
			item = normalize(k, style[k])

			if (!item){
				continue
			}

			map(function(item){
				result[item.key] = item.value
			}, item)
		}

		return result
	}

	module.exports = plugable(RESULT)

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function(obj, prop){
		return Object.prototype.hasOwnProperty.call(obj, prop)
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getStylePrefixed = __webpack_require__(9)
	var properties       = __webpack_require__(10)

	module.exports = function(key, value){

		if (!properties[key]){
			return key
		}

		return getStylePrefixed(key, value)
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function(fn, item){

		if (!item){
			return
		}

		if (Array.isArray(item)){
			return item.map(fn).filter(function(x){
				return !!x
			})
		} else {
			return fn(item)
		}
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getCssPrefixedValue = __webpack_require__(8)

	module.exports = function(target){
		target.plugins = target.plugins || [
			(function(){
				var values = {
					'flex':1,
					'inline-flex':1
				}

				return function(key, value){
					if (key === 'display' && value in values){
						return {
							key  : key,
							value: getCssPrefixedValue(key, value)
						}
					}
				}
			})()
		]

		target.plugin = function(fn){
			target.plugins = target.plugins || []

			target.plugins.push(fn)
		}

		return target
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getPrefix     = __webpack_require__(11)
	var forcePrefixed = __webpack_require__(12)
	var el            = __webpack_require__(13)

	var MEMORY = {}
	var STYLE
	var ELEMENT

	module.exports = function(key, value){

	    ELEMENT = ELEMENT || el()
	    STYLE   = STYLE   ||  ELEMENT.style

	    var k = key + ': ' + value

	    if (MEMORY[k]){
	        return MEMORY[k]
	    }

	    var prefix
	    var prefixed
	    var prefixedValue

	    if (!(key in STYLE)){

	        prefix = getPrefix('appearance')

	        if (prefix){
	            prefixed = forcePrefixed(key, value)

	            prefixedValue = '-' + prefix.toLowerCase() + '-' + value

	            if (prefixed in STYLE){
	                ELEMENT.style[prefixed] = ''
	                ELEMENT.style[prefixed] = prefixedValue

	                if (ELEMENT.style[prefixed] !== ''){
	                    value = prefixedValue
	                }
	            }
	        }
	    }

	    MEMORY[k] = value

	    return value
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var toUpperFirst = __webpack_require__(14)
	var getPrefix    = __webpack_require__(11)
	var el           = __webpack_require__(13)

	var MEMORY = {}
	var STYLE
	var ELEMENT

	module.exports = function(key, value){

	    ELEMENT = ELEMENT || el()
	    STYLE   = STYLE   || ELEMENT.style

	    var k = key// + ': ' + value

	    if (MEMORY[k]){
	        return MEMORY[k]
	    }

	    var prefix
	    var prefixed

	    if (!(key in STYLE)){//we have to prefix

	        prefix = getPrefix('appearance')

	        if (prefix){
	            prefixed = prefix + toUpperFirst(key)

	            if (prefixed in STYLE){
	                key = prefixed
	            }
	        }
	    }

	    MEMORY[k] = key

	    return key
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	  'alignItems': 1,
	  'justifyContent': 1,
	  'flex': 1,
	  'flexFlow': 1,

	  'userSelect': 1,
	  'transform': 1,
	  'transition': 1,
	  'transformOrigin': 1,
	  'transformStyle': 1,
	  'transitionProperty': 1,
	  'transitionDuration': 1,
	  'transitionTimingFunction': 1,
	  'transitionDelay': 1,
	  'borderImage': 1,
	  'borderImageSlice': 1,
	  'boxShadow': 1,
	  'backgroundClip': 1,
	  'backfaceVisibility': 1,
	  'perspective': 1,
	  'perspectiveOrigin': 1,
	  'animation': 1,
	  'animationDuration': 1,
	  'animationName': 1,
	  'animationDelay': 1,
	  'animationDirection': 1,
	  'animationIterationCount': 1,
	  'animationTimingFunction': 1,
	  'animationPlayState': 1,
	  'animationFillMode': 1,
	  'appearance': 1
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var toUpperFirst = __webpack_require__(14)
	var prefixes     = ["ms", "Moz", "Webkit", "O"]

	var el = __webpack_require__(13)

	var ELEMENT
	var PREFIX

	module.exports = function(key){

		if (PREFIX){
			return PREFIX
		}

		ELEMENT = ELEMENT || el()

		var i = 0
		var len = prefixes.length
		var tmp
		var prefix

		for (; i < len; i++){
			prefix = prefixes[i]
			tmp = prefix + toUpperFirst(key)

			if (typeof ELEMENT.style[tmp] != 'undefined'){
				return PREFIX = prefix
			}
		}
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var toUpperFirst = __webpack_require__(14)
	var getPrefix    = __webpack_require__(11)
	var properties   = __webpack_require__(10)

	/**
	 * Returns the given key prefixed, if the property is found in the prefixProps map.
	 *
	 * Does not test if the property supports the given value unprefixed.
	 * If you need this, use './getPrefixed' instead
	 */
	module.exports = function(key, value){

		if (!properties[key]){
			return key
		}

		var prefix = getPrefix(key)

		return prefix?
					prefix + toUpperFirst(key):
					key
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var el

	module.exports = function(){

		// console.log(global.document)
		// console.log(window)
		// console.log(document)

		if(!el && !!global.document){
		  	el = global.document.createElement('div')
		}

		if (!el){
			el = {style: {}}
		}

		return el
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function(str){
		return str?
				str.charAt(0).toUpperCase() + str.slice(1):
				''
	}

/***/ }
/******/ ])
});
;