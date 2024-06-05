"use server";

import { auth, db } from "@/firebase";
import { collection, doc, setDoc } from "firebase/firestore";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

export async function googleSigning() {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  await signInWithGoogle().then(async (usr) => {
    if (usr) {
    }
  });
}




export async function addUser(usr) {
  await setDoc(
    doc(collection(db, "users"), usr.user.uid),
    {
      email: usr.user.email,
      name: usr.user.displayName,
      image: usr.user.photoURL,
      createdTime: usr.user.metadata.creationTime,
      uid: usr.user.uid,
    },
    { merge: true }
  );
}
