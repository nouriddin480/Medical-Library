import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, VirtualizedList, ScrollView, KeyboardAvoidingView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { firebase } from '../config'

const Dashboard = () => {
  const [name, setName] = useState('')
  const [age, settAge] = useState('')


  useEffect(() => {
    firebase.firestore().collection('users')
    .doc(firebase.auth().currentUser.uid).get()
    .then((snapshot) => {
      if(snapshot.exists){
        setName(snapshot.data())

      }
      else {
        console.log('User does not exist')
      }
    })
  }, [])

  return(
    <SafeAreaView style={styles.container}>

      <Text style={styles.firstName}>
        Hello, {name.firstName}
      </Text>

      <Text style={styles.Info}>
        Personal data: 
        </Text>


      <Text style={styles.input}>
        Age: {name.age} 
      </Text>


      <Text style={styles.input}>
        Number: {name.number} 
      </Text>

      <Text style={styles.input}>
        Country: {name.country} 
      </Text>
      <TouchableOpacity
      onPress={() => {firebase.auth().signOut()}}
      style={styles.button}
      >
         <Text style={{fontSize:22, fontWeight:'bold'}}>
          Sign out
         </Text>
      </TouchableOpacity>
    </SafeAreaView>


  )
}

export default Dashboard



const styles = StyleSheet.create({

  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    marginTop:15,
    
 },

  firstName: {
    textDecorationLine:'underline',
    fontSize:30,
    fontStyle:'italic',
    fontWeight:'bold',
     flex:1,
     alignItems:'center',
     marginTop:10,
  },

  Info: {
    textDecorationLine:'underline',
    fontSize:30,
    fontWeight:'bold',
    flex:1,
    alignItems:'center',
    fontSize: 27,
    marginTop:-20,
  },

  input: {
    fontSize:30,
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    fontSize: 25,
    marginTop:-20,
  },

  
  button: {
     marginTop:50,
     height:70,
     left: 2,
     width:270,
     top: -65,
     backgroundColor:'#026efd',
     alignItems:'center',
     justifyContent: 'center',
     borderRadius:50,
  }
 
 
 })