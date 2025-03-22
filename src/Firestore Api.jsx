import React from 'react'

import {getFirestore, collection, addDoc, collection} from "firebase/firestore"
import{app} from "./firebase"


const firestore = getFirestore(app)
const collection = collection(firestore,"Users")

function Firestore_Api() {
    try {
        const writeData=()=>{
            addDoc(collection,)
        }
    } catch (error) {
        console.log("Error:", error)
        
    }
  return (<>
    
  </>)
}

export default Firestore_Api