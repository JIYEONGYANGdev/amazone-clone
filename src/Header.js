import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{ basket, user }] = useStateValue();
    // const [{ basket }, dispatch] = useStateValue();
    // dispatch: gun // add to basket : shoot
    console.log(basket);

    const login = () => {
        if (user) {
            auth.signOut();
        }
    };

    return (
        <nav className='header'>
            {/* logo on left -> img tag */}
            <Link to = '/'>
            <img className='header_logo' src= 'https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt =''/>
            </Link>
            
            {/* Search box */}
            <div className='header__search'>
                <input type='text' className='header__searchInput' />
                <SearchIcon className='header__searchIcon' />
            </div>
            
            {/* 3 links */}
            <div className='header__nav'>
            {/* 1st link */}
                <Link to={!user && '/login'} className='header__link'>
                    {/* header__option의 onClick={login} -> 위의 login 함수에서 sign out 시켜줄 것임 */}
                    <div onClick={login} className='header__option'>
                        <span className='header__optionLineOne'>Hello {user? (user.email + '!') : (null)}</span>
                    <span className= 'header__optionLineTwo'>{user? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                <Link to='/' className='header__link'>
                    <div className='header__option'>
                    <span className= 'header__optionLineOne'>Returns</span>
                    <span className= 'header__optionLineTwo'>& Orders</span>
                    </div>
                </Link>
                <Link to='/' className='header__link'>
                    <div className='header__option'>
                    <span className= 'header__optionLineOne'>Your</span>
                    <span className= 'header__optionLineTwo'>Prime</span>
                    </div>
                </Link>

                <Link to='/checkout' className='header__link'>
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon className= 'header__optionLineTwo'/>
                        <span className='header__basketCount header__optionLineTwo'>{basket?.length}</span>
                    </div>
                </Link>
            
            </div>
            
            {/* basket icon *with number* on right */}
            
        </nav>
    )
}

export default Header
