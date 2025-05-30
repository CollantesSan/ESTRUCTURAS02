import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../../firebase/config';

export const registerAuth = (nombre, email, password, navigate) => async () => {
    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        await setDoc(doc(db, 'usuarios', user.uid), {
            uid: user.uid,
            email,
            nombre,
            createdAt: serverTimestamp()
        });
        navigate('/Login');
    } catch (error) {
        console.error('Error al registrar usuario:', error.message);
        alert('Error al registrar. Verifica los datos o el correo ya existe.');
    }
};
