// src/utils/storeUser.js
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

export const storeUserIfNew = async (user) => {
  const userRef = doc(db, 'users', user.uid);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    await setDoc(userRef, {
      phone: user.phoneNumber,
      createdAt: new Date(),
    });
  }
};
