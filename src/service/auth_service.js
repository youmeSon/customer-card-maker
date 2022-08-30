import { getAuth, signOut, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, sendSignInLinkToEmail } from "firebase/auth";
import firebaseApp from './firebase'


class AuthService {
    
    login(provider) {
        let authProvider;
        const auth = getAuth();
        if(provider == 'Google'){
            authProvider = new GoogleAuthProvider();
            return signInWithPopup(auth, authProvider);
        } 
          
    }
    emailLogin(emailAddress) {
        const actionCodeSettings = {
            url: 'http://localhost:3000/maker',
            handleCodeInApp: true,
            
          };
        const auth = getAuth();
        sendSignInLinkToEmail(auth, emailAddress, actionCodeSettings)
            .then(() => {
                window.alert("Please check your email inbox.");
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ...
            });
    }

    onAuthChange(onUserChanged) {
        const auth = getAuth();
        onAuthStateChanged(auth, user => {
            onUserChanged(user);
        });
    }

    logout() {
        const auth = getAuth();
        signOut(auth);
    }
}

export default AuthService;