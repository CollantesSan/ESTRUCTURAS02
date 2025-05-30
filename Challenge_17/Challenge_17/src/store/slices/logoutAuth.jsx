import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { logout } from './authSlice';

export const logoutAuth = (navigate) => async (dispatch) => {
    try {
        await signOut(auth);
        dispatch(logout());
        navigate('/Login');
    } catch (error) {
        console.error('Error al cerrar sesión:', error.message);
    }
};
