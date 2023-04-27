import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native'
import React, {useState} from 'react'
import { firebase } from '../config'




const Registration = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword ] = useState('')
  const [firstName, setFirstName] = useState('')
  const [age, setAge] = useState('')
  const [number, setNumber] = useState('')
  const [country, setCountry] = useState('')
  


  registerUser = async (email, password, firstName, age, number) => {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => { 
       firebase.auth().currentUser.sendEmailVerification({
        handleCodeInApp: true,
        url:'https://test-182f7.firebaseapp.com',
    })
    .then(() => {
      alert('Verification email sent')
    }).catch((error) => {
      alert(error.message)
    })
    .then(() => {
      firebase.firestore().collection('users')
      .doc(firebase.auth().currentUser.uid)
      .set({
        firstName,
        email,
        age,
        number,
        country,
    })
 })
  .catch((error) => {
    alert(error.message)
   })
})
  .catch((error => {
    alert(error.message)
  }))

 }

  
   return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
    <ScrollView>
    <View style={styles.container}>
      <Text style={{fontWeight: 'bold', 'fontSize': 30}}>
        Register Here !
      </Text>
      <View style={{marginTop:40}}>
        <TextInput
         style={styles.textInput}
         placeholder="Full Name"
         onChangeText={(firstName) => setFirstName(firstName)}
         autoCorrect={false}
      />

            <TextInput
        style={styles.textInput}
        placeholder="Email"
        onChangeText={(email) => setEmail(email)}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        onChangeText={(password) => setPassword(password)}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Age"
        maxLength={3}
        onChangeText={(age) => setAge(age)}
        autoCorrect={false}
      />

      <TextInput
        style={styles.textInput}
        placeholder="Phone Number"
        onChangeText={(number) => setNumber(number)}
        autoCorrect={false}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Country"
        onChangeText={(country) => setCountry(country)}
        autoCorrect={false}
      />


      

  </View>
   <TouchableOpacity
     onPress={() => registerUser(email, password, firstName, age, number, country )}
     style={styles.button}
   >
     <Text style={{fontWeight:'bold', fontSize:22}}>Register</Text>
   </TouchableOpacity>
 </View>
 </ScrollView>
    </KeyboardAvoidingView>

   )
}
  export default Registration


  const styles = StyleSheet.create({
    container: {
       flex:1,
       alignItems:'center',
       marginTop:30,
    },
    textInput: {
       paddingTop:20,
       paddingBottom:10,
       width:400,
       fontSize:20,
       borderBottomWidth:1,
       borderBottomColor:'#000',
       marginBottom:10,
       textAlign:'center'
    },
    button: {
       marginTop:50,
       height:70,
       width:250,
       backgroundColor:'#026efd',
       alignItems:'center',
       justifyContent:'center',
       borderRadius:50,
    }
   })