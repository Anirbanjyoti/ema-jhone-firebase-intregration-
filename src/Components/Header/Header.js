import { signOut } from 'firebase/auth';
import { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg';
import { nameContext } from '../Registration/Registration';
import './Header.css';

const Header = ({userName}) => {
    const nnn = useContext(nameContext);
    console.log(nnn);
    
    const [user] = useAuthState(auth);
    const handleUserSignOut =() =>{
        signOut(auth);
    }
    
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                <Link to="/registration">Registration</Link>
                {userName}
                {
                    user ?
                    <button style={{cursor:'pointer'}} onClick={handleUserSignOut}>Sign Out</button>
                    :
                <Link to="/login">Login</Link>
                }
            </div>
        </nav>
    );
};

export default Header;