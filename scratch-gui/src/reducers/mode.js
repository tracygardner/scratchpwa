import React from 'react';
import ReactDOM from 'react-dom';

const SET_FULL_SCREEN = 'scratch-gui/mode/SET_FULL_SCREEN';
const SET_PLAYER = 'scratch-gui/mode/SET_PLAYER';
const SET_KEYBOARD = 'scratch-gui/mode/SET_KEYBOARD';
const SET_MENUBAR = 'scratch-gui/mode/SET_MENUBAR';

const initialState = {
	showBranding: false,
	isFullScreen: false,
	hasKeyboard: false,
	isPlayerOnly: false,
	hasEverEnteredEditor: true,
	showMenuBar: true
};

const reducer = function(state, action) {
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
		case SET_MENUBAR:
			return Object.assign({}, state, {
				showMenuBar: !state.showMenuBar
			});
		default:
			return state;
	}
};

const toggleMenuBar = function(showMenuBar) {

	var vis = document.querySelectorAll('[class^="menu-bar"],[class*=" menu-bar"]')[0];
	var bodywrapper = document.querySelectorAll('[class^="gui_body-wrapper"],[class*=" gui_body-wrapper"]')[0];

	if (vis.style.display === "none") {
		bodywrapper.style.height = 'calc(100vh - $menu-bar-height)';
		vis.style.display = "flex";
	} else {
		vis.style.display = "none";
		bodywrapper.style.height = '100vh'
	}

	window.dispatchEvent(new Event('resize'));

	return {
		type: SET_MENUBAR,
		showMenuBar: showMenuBar
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

	window.dispatchEvent(new Event('resize'));

	return {
		type: SET_KEYBOARD,
		hasKeyboard: hasKeyboard
	}


};
const setFullScreen = function(isFullScreen) {
	//console.log("fullscreen:" + isFullScreen);

	var kbd = document.getElementById("fullscreen-keyboard");
	if (isFullScreen) {
		kbd.style.display = "block";
	} else {
		kbd.style.display = "none";
	}

	window.dispatchEvent(new Event('resize'));

	return {
		type: SET_FULL_SCREEN,
		isFullScreen: isFullScreen
	};
};
const setPlayer = function(isPlayerOnly) {
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
	toggleKeyboard,
	toggleMenuBar
};
