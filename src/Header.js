import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingBasket';
import './css/Header.css'
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
    const [{cart} , dispatch] = useStateValue();
    return (
        <div className='header'>
            <Link to='/'>
                <img className='header__logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            </Link>
            <div className='header__search'>
                <input type="text" className='header__searchInput' />
                <SearchIcon className='header__searchIcon' />
            </div>
            <div className='header__nav'>
                <Link to='/login'>
                <div className='header__option'>
                    <span className='header_optionOneLine'>Hello Guest</span>
                    <span className='header_optionSecondLine'>Sign In</span>
                </div>
                </Link>
                <div className='header__option'>
                    <span className='header_optionOneLine'>Returns</span>
                    <span className='header_optionSecondLine'>& Orders</span>
                </div>
                <div className='header__option'>
                    <span className='header_optionOneLine'>Your</span>
                    <span className='header_optionSecondLine'>Prime</span>
                </div>
                <Link to='/checkout'>
                <div className="header__optionCart">
                    <ShoppingCartIcon />
                    <span className='header_optionSecondLine header__cartCount'>{cart?.length}</span>
                    {console.log(cart.length)}
                </div>
                </Link>
            </div>
        </div>

    )

}

export default Header;