import { FC } from 'react'
type Style = React.CSSProperties

const footerStyles: Record<string, Style>= {
    footer: {
        backgroundColor: '#333',
        color: '#fff',
        padding: '20px 0',
        textAlign: 'center'
    },

    socialLinks: {
        marginBottom: '10px', 
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
        fontSize: '30px'
    }
};

export const Footer: FC = () => {
    return (
        <footer style={footerStyles.footer}>
        <div style={footerStyles.socialLinks}>
            <i className="fa fa-facebook-square" style={{ fontSize: '56px' }}></i>
            <i className="fa fa-instagram" style={{ fontSize: '56px' }}></i>
            <i className="fa fa-twitter" style={{ fontSize: '56px' }}></i>
            <i className="fa fa-linkedin-square" style={{ fontSize: '56px' }}></i>      
        </div>
        <div style={footerStyles.copyright}>
            &copy; Natasa Stefanovic
        </div>
    </footer>
    );
};

   