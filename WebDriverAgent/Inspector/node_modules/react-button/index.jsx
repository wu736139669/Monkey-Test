'use strict';

var React = require('react')
var Button = require('./src')

var VALUE = 'xxx'

var theme = {
    overStyle: {
        background: 'blue'
    }
}

var App = React.createClass({

    onChange: function(value){
        VALUE = value
        this.setState({})
    },

    render: function() {

        var style = {
            width: '50%'
        }

        function clicked(e){
            console.log('clicked', e)
        }

        var t = {
            blue: {
                style: {
                    color: 'magenta'
                }
            }
        }

        // <Field placeholder="x" style={style} label='First Name' value={VALUE} onChange={this.onChange}/>

        return (
            <div className="App" style={{padding: 10}}>
                <Button xactiveStyle={{background: 'blue'}} activeStyle={{background: 'red'}} onClick={clicked}>
                    hello
                </Button>

                <Button type="big" overBigStyle={{color: 'red'}} onClick={clicked} >Save as</Button>
                <Button theme="blue" themes={t} theoverStyle={{background: 'red'}} href="#test">world</Button>
                <Button theme='defaultsss'>primary no theme</Button>
                <Button xprimary={true} disabled={true}>primary disabled</Button>
                <Button defaultPressed={true} >toggle button</Button>
                <Button disabled={true}>disabled</Button>
            </div>
        )
    }
})

React.render(<App />, document.getElementById('content'))