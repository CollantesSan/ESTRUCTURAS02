import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { setUser } from './authSlice';

export const loginAuth = (email, password, navigate) => async (dispatch) => {
    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        dispatch(setUser({ uid: user.uid, email: user.email }));
        navigate('/Home');
    } catch (error) {
        console.error('Error al iniciar sesión:', error.message);
        alert('Credenciales inválidas o usuario no registrado');
    }
};
