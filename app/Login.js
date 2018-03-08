import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import LoginViaID from './LoginViaID.js';
import LoginViaCode from './LoginViaCode.js';

const LoginScreen = StackNavigator({
	Home: { screen: LoginViaID },
	ViaCode: { screen: LoginViaCode },
});

export default class Login extends Component {
	render() {
		return (
			<LoginScreen/>
		);
	}
}
