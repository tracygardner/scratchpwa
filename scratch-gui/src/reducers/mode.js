import React from 'react';
import ReactDOM from 'react-dom';

const SET_FULL_SCREEN = 'scratch-gui/mode/SET_FULL_SCREEN';
const SET_PLAYER = 'scratch-gui/mode/SET_PLAYER';
const SET_KEYBOARD = 'scratch-gui/mode/SET_KEYBOARD'

const initialState = {
    showBranding: false,
    isFullScreen: false,
    hasKeyboard: false,
    isPlayerOnly: false,
    hasEverEnteredEditor: true
};

const reducer = function (state, action) {
    if (typeof state === 'undefined') state = initialState;
    switch (action.type) {
    case SET_FULL_SCREEN:
        return Object.assign({}, state, {
            isFullScreen: action.isFullScreen
        });
    case SET_KEYBOARD:
        return Object.assign({}, state, {
            hasKeyboard: !state.hasKeyboard
        });
    case SET_PLAYER:
        return Object.assign({}, state, {
            isPlayerOnly: action.isPlayerOnly,
            hasEverEnteredEditor: state.hasEverEnteredEditor || !action.isPlayerOnly
        });
    default:
        return state;
    }
};

const toggleKeyboard = function(hasKeyboard) {
  
  var vis = document.getElementById("keyboard")
  //console.log("Toggle keyboard " + vis.style.display)
  if (vis.style.display === "none") {
    vis.style.display = "block";
  } else {
    vis.style.display = "none";
  }
   return {
     type: SET_KEYBOARD,
     hasKeyboard: hasKeyboard
   }
};
const setFullScreen = function (isFullScreen) {
    return {
        type: SET_FULL_SCREEN,
        isFullScreen: isFullScreen
    };
};
const setPlayer = function (isPlayerOnly) {
    return {
        type: SET_PLAYER,
        isPlayerOnly: isPlayerOnly
    };
};

export {
    reducer as default,
    initialState as modeInitialState,
    setFullScreen,
    setPlayer,
    toggleKeyboard
};
