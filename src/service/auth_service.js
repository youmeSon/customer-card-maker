import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseApp from './firebase'


class AuthService {
    login() {
        const authProvider = new GoogleAuthProvider();
        const auth = getAuth();

        return signInWithPopup(auth, authProvider);
    }
}

export default AuthService;