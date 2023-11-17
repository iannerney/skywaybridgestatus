import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

const handleLogin = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
};

export default function Login() {
    return (
        <main>
            <h1>Log In</h1>
        </main>
    );
}
