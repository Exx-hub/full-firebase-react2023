import { useState } from "react";
import { auth, googleProvider } from "../config/firebase-config";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(auth.currentUser);

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User has been created");
    } catch (error) {
      console.log(error.message || error);
    }
  };

  const handleGoogle = async () => {
    await signInWithPopup(auth, googleProvider);

    // await signInWithRedirect(auth, googleProvider);
  };

  const handleSignout = async () => await signOut(auth);
  return (
    <>
      <form onSubmit={handleSignup} className="text-black">
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="text-white border border-white">Login</button>
      </form>

      <button onClick={handleGoogle}>Sign in with google</button>
      <button onClick={handleSignout}>Logout</button>
    </>
  );
}

export default Auth;
