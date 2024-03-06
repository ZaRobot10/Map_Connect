import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, sendEmailVerification, updateProfile, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

const auth = getAuth(); // Initialize Firebase authentication

export const doCreateUserWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    // Add user's display name (optional)
    await updateProfile(auth.currentUser, {
      displayName: email.split('@')[0] // Set display name as email without domain
    });
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export const doSignInWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export const doSignInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    // Add user to firestore (if needed)
    return user;
  } catch (error) {
    throw error;
  }
};

export const doSignOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
};

export const doPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    throw error;
  }
};

export const doPasswordChange = async (password) => {
  try {
    await updatePassword(auth.currentUser, password);
  } catch (error) {
    throw error;
  }
};

export const doSendEmailVerification = async () => {
  try {
    await sendEmailVerification(auth.currentUser, {
      url: `${window.location.origin}/home`,
    });
  } catch (error) {
    throw error;
  }
};
