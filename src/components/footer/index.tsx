import { Instagram } from './icons/instagram';
import { Facebook } from './icons/facebook';
import { TwitterX } from './icons/twitter-x';
import { LinkedIn } from './icons/linkedin';
import { FC, CSSProperties } from 'react'

type Style = CSSProperties

const footerStyles: Record<string, Style>= {
    footer: {
        backgroundColor: '#333',
        color: '#fff',
        padding: '8px 0',
        textAlign: 'center'
    },

    socialLinks: {
        margin: '20px', 
        display: 'flex',
        justifyContent: 'center',
        gap: '40px'
    },

    socialLink: {
        color: '#fff',
        textDecoration: 'none',
        margin: '0 10px'
    },

    socialLinkHover: {
        textDecoration: 'underline'
    },

    copyright: {
        padding: '10px',
        fontSize: '30px'
    }
};

export const Footer: FC = () => {
    return (
        <footer style={footerStyles.footer}>
        <div style={footerStyles.socialLinks}>
            <Instagram/>
            <Facebook/>
            <LinkedIn/>
            <TwitterX/>
        </div>
        <div style={footerStyles.copyright}>
            &copy;<em>2024 Natasa Stefanovic</em>
        </div>
    </footer>
    );
};

   