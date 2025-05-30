import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, db } from '../../firebase/config';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { setUser } from './authSlice';

export const googleAuth = (navigate) => async (dispatch) => {
    const provider = new GoogleAuthProvider();

    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;

        const userRef = doc(db, 'usuarios', user.uid);
        const docSnap = await getDoc(userRef);

        if (!docSnap.exists()) {
            await setDoc(userRef, {
                uid: user.uid,
                email: user.email,
                nombre: user.displayName || '',
                createdAt: serverTimestamp()
            });
        }

        dispatch(setUser({ uid: user.uid, email: user.email }));
        navigate('/Home');
    } catch (error) {
        console.error('Error con Google Auth:', error.message);
        alert('No se pudo iniciar con Google.');
    }
};

