import { Link } from "react-router-dom";
import AntSignupForm from "../components/ant_signup_form";
import { auth, createUserWithEmailAndPassword } from "../config/firebase";
export default function Signup(){
    const registerUser = (values) => {
        console.log("values",values);
        createUserWithEmailAndPassword(auth, `${values.username}@example.com`, values.password)// email replaced by (`${values.username}@example.com`) , and pasword is replaced by values.password
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ... 
    console.log("user-->", user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log("error.message", errorMessage)
  });
    }
    return(
        <div>
            <h1>Signup Page</h1>
            <AntSignupForm registerUser = {registerUser} />
            Already have an account? <Link to="/login">Login</Link>
        </div>
    )
    }