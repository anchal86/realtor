import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { doc,serverTimestamp,setDoc,getDoc } from 'firebase/firestore';
import {db} from '../Firebase'



export default function Button({title,back,pic,type,click}) {
  const navigate=useNavigate()
  
  async function OAuth(){
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const userCredentials = await signInWithPopup(auth, provider)
      const user=userCredentials.user
      console.log(user)
      navigate('/')

      const docSnap = await getDoc(doc(db, "users", user.uid));

      if(!docSnap.exists()){
        await setDoc(doc(db,"users",user.uid),{
          email:user.email,
          name:user.displayName,
          timestamp:serverTimestamp()
        })
      }

      
      toast.success("Logged in successfully")
    } catch (error) {
      toast.error("Something Went Wrong")
    }
    
  }

  return (
    <button onClick={click?OAuth:null} type={type} className={`flex items-center justify-center uppercase ${back} text-white w-full my-5 py-2 rounded-md`}>{pic?<FcGoogle className='bg-white mr-3'/>:''}{title}</button>
  )
}
