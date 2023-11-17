import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

const handleSignUp = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
};

export default function SignUp() {
    return (
        <main>
            <h1>Sign Up</h1>
        </main>
    );
}
