import React,{useRef,useEffect}  from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  ActivityIndicator,
  Platform,
} from 'react-native';
import * as FirebaseRecaptcha from 'expo-firebase-recaptcha';
import * as firebase from 'firebase';
import {AppButton,FetchFont,windowWidth,windowHeight,AppButtoncancel,AppButtonregister} from '../../my-app/screen/font'

const FIREBASE_CONFIG: any = {
  apiKey: "AIzaSyDxq6mrk4tcjyinpHlh4HZQLmr4ewQPZtM",
  authDomain: "test-4d493.firebaseapp.com",
  databaseURL: "https://test-4d493-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "test-4d493",
  storageBucket: "test-4d493.appspot.com",
  messagingSenderId: "266221728601",
  appId: "1:266221728601:web:74623dd5c91e38c782d248",
  measurementId: "G-ZM9RZBQV64"
};
// PROVIDE VALID FIREBASE CONFIG HERE
// https://firebase.google.com/docs/web/setup


try {
  if (FIREBASE_CONFIG.apiKey) {
    firebase.initializeApp(FIREBASE_CONFIG);
  }
} catch (err) {
  // ignore app already initialized error on snack
}

export const PhoneAuthScreen = ({ route, navigation })=> {
  const a=route.params.telephone
//   alert(a)
console.log(route.params.telephone)
const recaptchaVerifier = React.useRef(null);
const verificationCodeTextInput = React.useRef(null);
const [phoneNumber, setPhoneNumber] = React.useState('');
const [verificationId, setVerificationId] = React.useState('');
const [verifyError, setVerifyError] = React.useState();
const [verifyInProgress, setVerifyInProgress] = React.useState(false);
const [verificationCode, setVerificationCode] = React.useState('');
const [confirmError, setConfirmError] = React.useState();
const [confirmInProgress, setConfirmInProgress] = React.useState(false);
const isConfigValid = !!FIREBASE_CONFIG.apiKey;
const [time,Settime]=React.useState('58')
const ref1=useRef(true)
   
useEffect(() => {
    setInterval(() => {
        Settime(time=>time-1)
    }, 1000);
    (async () => {
                                    const phoneProvider = new firebase.auth.PhoneAuthProvider();
                                    try {
                                    setVerifyError(undefined);
                                    setVerifyInProgress(true);
                                    setVerificationId('');
                                    const verificationId = await phoneProvider.verifyPhoneNumber(
                                        a,
                                        // @ts-ignore
                                        recaptchaVerifier.current
                                    );
                                    setVerifyInProgress(false);
                                    setVerificationId(verificationId);
                                    verificationCodeTextInput.current?.focus();
                                    } catch (err) {
                                    setVerifyError(err);
                                    setVerifyInProgress(false);
                                    }
                    } 
                 )()
                          
}, [])                   
                                                                        return (
                                                                          <View style={styles.container}>
                                                                            <View style={styles.content}>
                                                                              <FirebaseRecaptcha.FirebaseRecaptchaVerifierModal
                                                                                ref={recaptchaVerifier}
                                                                                firebaseConfig={FIREBASE_CONFIG}
                                                                              />
                                                                              <Text style={styles.title}>ยืนยันตัวตน</Text>
                                                                              <Text style={styles.subtitle}>กรุณากรอกรหัสยืนยันที่เราส่งให้คุณ</Text>
                                                                              <Text style={styles.text}>{route.params.telephone}</Text>
                                                                              
                                                                              <Text style={styles.text,{alignSelf:"center"}}>หากคุณไม่ได้รับรหัสผ่าน</Text>
                                                                              <Text style={styles.text,{alignSelf:"center"}}>ส่งรหัสใหม่</Text>
                                                                              <Text style={styles.text,{alignSelf:"center",marginBottom:30 }}
                                                                               onPress={async () => {
                                                                                const phoneProvider = new firebase.auth.PhoneAuthProvider();
                                                                                try {
                                                                                  setVerifyError(undefined);
                                                                                  setVerifyInProgress(true);
                                                                                  setVerificationId('');
                                                                                  const verificationId = await phoneProvider.verifyPhoneNumber(
                                                                                    phoneNumber,
                                                                                    recaptchaVerifier.current
                                                                                  );
                                                                                  setVerifyInProgress(false);
                                                                                  setVerificationId(verificationId);
                                                                                  verificationCodeTextInput.current?.focus();
                                                                                } catch (err) {
                                                                                  setVerifyError(err);
                                                                                  setVerifyInProgress(false);
                                                                                }
                                                                              }}
                                                                              >ส่งรหัสใหม่({time})</Text>
                                                                              {verifyError && <Text style={styles.error}>{`Error: ${verifyError.message}`}</Text>}
                                                                              {verifyInProgress && <ActivityIndicator style={styles.loader} />}
                                                                              {verificationId ? (
                                                                                <Text style={styles.success}>A verification code has been sent to your phone</Text>
                                                                              ) : (
                                                                                undefined
                                                                              )}
                                                                          
                                                                              <Text style={styles.text}>Enter verification code</Text>
                                                                              <TextInput
                                                                                ref={verificationCodeTextInput}
                                                                                style={styles.textInput}
                                                                                editable={!!verificationId}
                                                                                placeholder="123456"
                                                                                onChangeText={(verificationCode: string) => setVerificationCode(verificationCode)}
                                                                              />
                                                                              <Button
                                                                                title="Confirm Verification Code"
                                                                                disabled={!verificationCode}
                                                                                onPress={async () => {
                                                                                  try {
                                                                                    setConfirmError(undefined);
                                                                                    setConfirmInProgress(true);
                                                                                    const credential = firebase.auth.PhoneAuthProvider.credential(
                                                                                      verificationId,
                                                                                      verificationCode
                                                                                    );
                                                                                    const authResult = await firebase.auth().signInWithCredential(credential);
                                                                                    setConfirmInProgress(false);
                                                                                    setVerificationId('');
                                                                                    setVerificationCode('');
                                                                                    verificationCodeTextInput.current?.clear();
                                                                                    Alert.alert('Phone authentication successful!');
                                                                                  } catch (err) {
                                                                                    setConfirmError(err);
                                                                                    setConfirmInProgress(false);
                                                                                  }
                                                                                }}
                                                                              />
                                                                              {confirmError && <Text style={styles.error}>{`Error: ${confirmError.message}`}</Text>}
                                                                              {confirmInProgress && <ActivityIndicator style={styles.loader} />}
                                                                            </View>
                                                                            {!isConfigValid && (
                                                                              <View style={styles.overlay} pointerEvents="none">
                                                                                <Text style={styles.overlayText}>
                                                                                  To get started, set a valid FIREBASE_CONFIG in App.tsx.
                                                                                </Text>
                                                                              </View>
                                                                            )}
                                                                          </View>
                                                                        );
                                                                      }
                                                                      
                                                                      const styles = StyleSheet.create({
                                                                        container: {
                                                                          flex: 1,
                                                                          padding: 20,
                                                                        },
                                                                        content: {
                                                                          marginTop: 50,
                                                                          
                                                                        },
                                                                        title: {
                                                                          marginBottom: 2,
                                                                          fontSize: 29,
                                                                          fontWeight: 'bold',
                                                                          fontFamily:"FCHpe2-script"
                                                                        },
                                                                        subtitle: {
                                                                          marginBottom: 10,
                                                                          opacity: 0.35,
                                                                          fontWeight: 'bold',
                                                                          fontFamily:"FCHpe2-script"
                                                                        },
                                                                        text: {
                                                                          marginTop: 30,
                                                                          marginBottom: 4,
                                                                          opacity: 0.35,
                                                                          fontFamily:"FCHpe2-script"
                                                                        },
                                                                        textInput: {
                                                                          marginBottom: 8,
                                                                          fontSize: 17,
                                                                          fontWeight: 'bold',
                                                                        },
                                                                        error: {
                                                                          marginTop: 10,
                                                                          fontWeight: 'bold',
                                                                          color: 'red',
                                                                        },
                                                                        success: {
                                                                          marginTop: 10,
                                                                          fontWeight: 'bold',
                                                                          color: 'blue',
                                                                        },
                                                                        loader: {
                                                                          marginTop: 10,
                                                                        },
                                                                        overlay: {
                                                                          ...StyleSheet.absoluteFillObject,
                                                                          backgroundColor: '#FFFFFFC0',
                                                                          justifyContent: 'center',
                                                                          alignItems: 'center',
                                                                        },
                                                                        overlayText: {
                                                                          fontWeight: 'bold',
                                                                        },
                                                                      });