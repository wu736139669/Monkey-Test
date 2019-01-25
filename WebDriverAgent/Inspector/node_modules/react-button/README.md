react-button
============

> A carefully crafted button for React

## Install

```sh
$ npm install react-button --save
```

## Changelog

See [Changelog](./CHANGELOG.md)

## Usage

```jsx
var Button = require('react-button')

function clicked(event){}

<Button onClick={clicked} >Export</Button>

<Button activeStyle={{position:'relative', top: 1}}>Save as</Button>
```

`react-button` does not depend on any css files. All styles are inline in the react component.

`react-button` can also be used as a toggle button
```jsx
var pressed = true
function toggle(){
	pressed = !pressed

	//now re-render
}
//controlled behavior
<Button pressed={pressed} onClick={toggle}/>

//uncontrolled
<Button defaultPressed={true} pressedStyle={{color: 'blue'}} />
```

### Styling & advanced usage

By default, the button comes with some structural styles as well as with styles for a default nice theme.

If you don't want the button to render with the default theme, just specify `theme=''` (or any falsy value).

```jsx
<Button theme='' onClick={function(){}} />
```

Or you can specify your own theme for the button.
The value for the `theme` property is just an object with different styles

```jsx
var theme = {
	disabledStyle: { background: 'gray'},
	overStyle: { background: 'red'},
	activeStyle: { background: 'red'},
	pressedStyle: {background: 'magenta', fontWeight: 'bold'},
	overPressedStyle: {background: 'purple', fontWeight: 'bold'}
}

<Button theme={theme} defaultPressed={true}/>
```
Or, you can specify a theme as string: 'default' or 'primary'. Those are the only two themes that come built into the `ReactButton`. You can get the styles for these:

```jsx
var themes = require('react-button').themes
themes.gray = {
	style: {...},
	overStyle: {...}
}
<Button theme={themes.primary} />

//since 'gray' is added to the exported theme object,
//you can use it as a named theme
<Button theme='gray' />
```

You can style different button states - over (when mouse is over button), active (when mouse is down on the button)

```jsx
<Button overStyle={{background: 'blue'}} activeStyle={{background: 'red'}} />
```
If you specify `overStyle`, `activeStyle`, `pressedStyle`, `overPressedStyle` etc, you are overwriting the values from the theme. The theme styles have the lowest precedence.

## Properties

### Actions

 * onClick: Function - function to be called when the button is clicked
 * onToggle: Function(pressed: boolean, event) - called on a button that specifies either `pressed` or `defaultPressed` (as boolean values). This is called before `onClick`
 * onActivate: Function - function called on mousedown over the button - button becomes active
 * onDeactivate: Function - function called on mouseup - button becomes inactive

### Styling

#### Theming props

 * theme: Object/String - a theme object (or a falsy value, if you don't want to render a themed button) or a string which should be a key from the exported `Button.themes`
 * themes: Object - another object where to look for themes. This defaults to `Button.themes`, but it can be modified using this property

 If you want to modify the default look for all buttons, just modify `Button.themes.default`

```jsx
var Button = require('react-button')

var themes = Button.themes

themes.default.style     = { ... }
themes.default.overStyle = { ... }

<Button>save</Button>

```

#### Style props

Style props are applied in this order:

 * style - default style
 * disabledStyle - style to be applied when the button is disabled. If disabled, no other over/active/pressed styles are applied.
 * focusedStyle - style to be applied to focused button
 * pressedStyle

 * focusedPressedStyle

 * overStyle
 * overFocusedStyle
 * overPressedStyle
 * overFocusedPressedStyle

 * activeStyle - style to be applied on active button (mousedown over button)
 * activeFocusedStyle
 * activePressedStyle
 * activeFocusedPressedStyle

You can set all these props both on the theme object, or on the button itself.

### Styling with CSS classes
 * overClassName: String - a css class to be applied when the mouse is over the button
 * activeClassName: String - a css class to be applied when the mouse is pressed on the button (the button is in active state)
 * focusedClassName: String - a css class to be applied when the button is focused
 * disabledClassName: String - a css class to be applied when the button is disabled
 * pressedClassName: String - a css class to be applied when the button is pressed

### Other attributes
 * disabled: Boolean
 * pressed: Boolean
 * defaultPressed: Boolean
 * label - (generally a string) you can specify a label instead of button children. If you specify the label, by default it will be rendered with text-overflow: 'ellipsis'
 * href: String - a href to navigate to when the button is clicked. Defaults to ''
 * align: String - where to align content inside button. Valid values are 'left', 'center', 'right'
 * 'block': Boolean - by default buttons are rendered with display `inline-flex`. Specify `block: true` if you want to use `display: flex` (or use style.display: 'flex').
 * onStyleReady: Function - called after the style object is fully constructed
 * onThemeStyleReady: Function - called after the theme styles have been applied to the style object (before `onStyleReady`)

## Contributing

```sh
$ npm install
$ npm run dev # to start webpack-dev-server
$ npm run serve # to start http-server on port 9091
```

now navigate to [localhost:9091](http://localhost:9091)

## License

#### MIT