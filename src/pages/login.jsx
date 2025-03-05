import { Link } from "react-router-dom";
import AntLoginForm from "../components/ant_form";
import { auth, signInWithEmailAndPassword } from "../config/firebase";
export default function Login() {
    function loginUser(values) {
        console.log("User Logged In", values);

        signInWithEmailAndPassword(auth, `${values.username}@example.com`, values.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("user-->", user)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("error.message", errorMessage)
            });

    }
    return (
        <div>
            <h1>Login Page</h1>
            <AntLoginForm loginUser={loginUser} />
            Don't have an account? <Link to="/">SignUp</Link>
        </div>
    )
}