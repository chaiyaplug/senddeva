import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Alert,
  Image,
} from 'react-native';
import Expo, { Constants } from 'expo';
import DropdownAlert from 'react-native-dropdownalert';
import {AppButton,FetchFont,styles,windowWidth,windowHeight,AppButtoncancel,AppButtonotp} from './font'
import  Ionicons from 'react-native-vector-icons/Ionicons'

export default class Fingerscan extends Component {
  state = {
    compatible: false,
  };

  componentDidMount() {
    this.checkDeviceForHardware();
  }

  checkDeviceForHardware = async () => {
    let compatible = await Expo.Fingerprint.hasHardwareAsync();
    this.setState({ compatible });
    if (!compatible) {
      this.showIncompatibleAlert();
    }
  };

  showIncompatibleAlert = () => {
    this.dropdown.alertWithType(
      'error',
      'Incompatible Device',
      'Current device does not have the necessary hardware to use this API.'
    );
  };

  checkForBiometrics = async () => {
    let biometricRecords = await Expo.Fingerprint.isEnrolledAsync();
    if (!biometricRecords) {
      this.dropdown.alertWithType(
        'warn',
        'No Biometrics Found',
        'Please ensure you have set up biometrics in your OS settings.'
      );
    } else {
      this.handleLoginPress();
    }
  };
  
  handleLoginPress = () => {
    if (Platform.OS === 'android') {
      this.showAndroidAlert();
    } else {
      this.scanBiometrics();
    }
  };

  showAndroidAlert = () => {
    Alert.alert('Fingerprint Scan', 'Place your finger over the touch sensor.');
    this.scanBiometrics();
  };

  scanBiometrics = async () => {
    let result = await Expo.Fingerprint.authenticateAsync('Biometric Scan.');
    if (result.success) {
     alert("test")
    } else {
        alert("test")
    }
  };

  render() {
    return (
      <View style={styles.container}>
          <View style={{flex:0.5, justifyContent:"center",alignItems:"center"}}>
           <Ionicons color="green" name="finger-print" size={100}  />  
                            <AppButton
                            onPress={
                                this.state.compatible
                                ? this.checkForBiometrics
                                : this.showIncompatibleAlert
                            }       
                                title="แสกนลายนิ้วมือ"/>
                       
                            <Text style={styles.txt}>
                            ข้าม
                            </Text>
                            </View>
        <DropdownAlert
          ref={ref => (this.dropdown = ref)}
          closeInterval={5000}
        />
      </View>
    );
  }
}

const stylesnew = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 60,
    backgroundColor: 'transparent',
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: '#fff',
  },
  buttonText: {
    fontSize: 30,
    color: '#fff',
    textShadowColor: 'rgba(0,0,0,0.30)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  logo: {
    height: 128,
    width: 128,
  },
});
