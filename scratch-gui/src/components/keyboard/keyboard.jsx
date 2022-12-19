import keyboardStyles from "react-simple-keyboard/build/css/index.css";
import './keyboard.css';
import bindAll from 'lodash.bindall';
import React, { Component } from 'react';
import Keyboard from 'react-simple-keyboard';

class VirtualKeyboard extends Component {

  constructor (props) {
            super(props);
            bindAll(this, [
                'onChange',
                'onKeyPress'
            ]);
  }
    
  onChange = (input) => {
    //console.log("Input changed", input);
  }

  onKeyPress = (button) => {
    //console.log("Button pressed", button);
    if (button == '{arrowup}') { button = 'ArrowUp'}
    if (button == '{arrowleft}') { button = 'ArrowLeft'}
    if (button == '{arrowright}') { button = 'ArrowRight'}
    if (button == '{arrowdown}') { button = 'ArrowDown'}
    if (button == '{space}') { button = ' '}
    this.props.vm.postIOData('keyboard', {
                key: button,
                isDown: true
            });
  }

  render(){
    
    return (
     
      <Keyboard
        onChange={this.onChange}
        onKeyPress={this.onKeyPress}
        vm={this.vm}
        layout={{
  'default': [
    '1 2 3 4 5 6 7 8 9 0',
    'q w e r t y u i o p',
    'a s d f g h j k l ',
    'z x c v b n {arrowup} m',
    '{space} {arrowleft} {arrowdown} {arrowright}'
  ]
}}/>)
    
  }
}

export default VirtualKeyboard;