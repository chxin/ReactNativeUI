import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  ImageBackground,
  Button,
  View,
  Alert
} from 'react-native';

class LoginViaID extends Component<Props> {
  static navigationOptions = {
    headerTitle: 'LoginViaID',
    head: null,
  };
  constructor(props) {
    super(props);
    this.NaviCode = this.NaviCode.bind(this);
  }
  NaviCode() {
    this.props.navigation.navigate( 'ViaCode', {} );
  }
  render() {
    return (
      <View style={styles.container} >
        <ImageBackground source={require('./images/trial.jpg')} style={styles.backgroundImage} >
          <Text style={styles.MA}>Machine Advisor</Text>
          <View style={styles.input}>
            <View style={styles.userid}>
              <Text style={styles.id}>User ID</Text>
              <TextInput placeholder="Enter username" style={styles.idInput} />
            </View>
            <View style={styles.divide} />
            <View style={styles.password}>
              <Text style={styles.pw}>Password</Text>
              <TextInput placeholder="Enter password" style={styles.pwInput} />
            </View>
          </View>
          <Button title="Log in" color="green" onPress={Login} style={styles.button}/>
          <Text onPress={this.NaviCode} style={styles.navi}>Log in through verification code</Text>
        </ImageBackground>
      </View>

    );
  }
}

const Login = () => {
  Alert.alert('log in');
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // width: null,
    // height: null,
    // resizeMode: Image.resizeMode.contain,
  },
  MA: {
    fontSize: 32,
    color: 'white',
    padding: 30,
  },
  input: {
    // flex: 1,
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 90,
    width: 340,
    backgroundColor: 'white',
    borderRadius: 10,
    // padding: 30,
  },
  userid: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  id: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    flex: 1,
    fontSize: 16,
  },
  idInput: {
    flex: 3,
    paddingLeft: 10,
  },
  password: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  pw: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    flex: 1,
    fontSize: 16,
  },
  pwInput: {
    flex: 3,
    paddingLeft: 10,
  },
  navi: {
    color: 'white',
    padding: 10,
  },
  button: {
    // padding: 50,
  },
  divide: {
    height: 1,
    width: 300,
    backgroundColor: 'grey',
  },
});

export default LoginViaID;
