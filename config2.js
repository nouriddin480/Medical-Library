import firebase from 'firebase/compat/app'
import { getDataBase } from 'firebase/database'

// Web app's Firebase config

const firebaseConfig = {
apiKey: "AIzaSyAnNrpKkcX1S-WGfl0Mnsin5TMZrRSJ-cE",
authDomain: "test-182f7.firebaseapp.com",
projectId: "test-182f7",  
storageBucket: "test-182f7.appspot.com", 
messagingSenderId: "195050585960", 
appId: "1:195050585960:web:306d0da05ef0ef423d60dd", 
measurementId: "G-3WME6SRP0T"  
}

if (firebase.apps.length == 0){
    firebase.initializeApp(firebaseConfig)
}

const db = getDataBase()

export { db }
