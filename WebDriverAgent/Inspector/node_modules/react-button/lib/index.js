'use strict'

var React     = require('react')
var assign    = require('object-assign')
var normalize = require('react-style-normalizer')

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