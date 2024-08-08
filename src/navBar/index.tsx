import { FC } from 'react'
import './navbar.styles.css' 

export const Navbar: FC = () => {
    return (
        <nav>
            <ul>
                <li><a href="#home">Home Page</a></li>
                <li><a href="#work">My Work</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};