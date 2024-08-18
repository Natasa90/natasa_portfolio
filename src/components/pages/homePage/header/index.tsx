import { FC } from 'react'
import './glowingTools.styles.css'
import './h1.styles.css'
import { DownloadButton } from './resumeButton/index'


type Style = React.CSSProperties

const headerStyles: Record<string, Style> = {
    top: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'start',
        marginTop: '6rem',
        marginLeft: '5rem'
    },
    topText: {
        textAlign: 'justify',
        marginTop: '2rem',
        paddingBottom: '40px',
        lineHeight: '1.6'
    },
    columnOne: {
        flex: 2,
    },
    columnTwo: {
        padding: '60px 60px 0 0',
        flex: 1,
    },
    h1: {
        fontSize: '2.65rem',
    },
    profilePhoto: {
        width: '450px',
        height: '443px',
        borderRadius: '50%',
        border: '3px solid  #aaa8a8',
        boxShadow: '-4px 10px #EDF7FA',
    }
};

const tableStyles: Record<string, Style> = {
    container: {
        textAlign: 'center',
        padding: '16px',
        backgroundColor: '#f4f4f9',
        display: 'grid',
        gridTemplateColumns: '1fr', 
        gap: '8px',
        border: '1px solid #ddd',
        borderRadius: '10px',
        width: 'fit-content', 
        marginBottom: '80px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    },
    header: {
        fontWeight: 'bold',
        color: '#333',
        padding: '8px',
        textAlign: 'center', 
    },
};

export const Header: FC = () => {
    return (
        <div style={headerStyles.top}>               
            <div style={headerStyles.columnOne}>
                <h1>Hi, I'm Natasa, 
                <p><small className="text-muted">A Front-End Developer!</small>
                </p>
                </h1>
                <p style={headerStyles.topText}>Welcome to my portfolio! <br/>I'm a passionate front-end developer who thrives on<br/> crafting beautiful, intuitive web experiences. Explore my work <br/>and see how I bring code to life with creativity and precision.
                </p>
                <DownloadButton/>
            </div>  
            <div style={headerStyles.columnTwo}>
                <img style={headerStyles.profilePhoto} alt="profile photo" />
        </div>
    </div>  
    )
}