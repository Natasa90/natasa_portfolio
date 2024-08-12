import { FC } from 'react'
import { Link } from 'react-router-dom';
import './navbar.styles.css' 

export const Navbar: FC = () => {
    return (
        <nav>
            <ul>
            <li><Link to="/">About me</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};