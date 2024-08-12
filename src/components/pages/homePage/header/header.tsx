import { FC } from 'react'
import './glowingTools.styles.css'


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
        display: 'grid',
        gridTemplateColumns: '1fr', 
        gap: '8px',
        backgroundColor: '#fff',
        padding: '16px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        width: 'fit-content', 
        marginBottom: '80px'
    },
    header: {
        fontWeight: 'bold',
        backgroundColor: '#f7f7f7',
        padding: '8px',
        borderBottom: '1px solid #ddd',
        textAlign: 'center', 
    },
    table: {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, auto)', 
        gap: '8px',
        padding: '16px',
    },
    item: {
        padding: '16px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: 'black',
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
            <div style={tableStyles.container}>
                <div style={tableStyles.header}>TOOLS</div>
                <div style={tableStyles.table}>
                    <a href='https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics' target='_blank' style={{textDecoration: 'none'}}>
                        <div style={tableStyles.item} className='glow'>HTML</div>
                    </a>
                    <a href='https://developer.mozilla.org/en-US/docs/Web/CSS' target='_blank' style={{textDecoration: 'none'}}>
                        <div style={tableStyles.item} className='glow'>CSS</div>
                    </a>
                    <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target='_blank' style={{textDecoration: 'none'}}>
                    <div style={tableStyles.item} className='glow'>JavaScript</div>
                    </a>
                    <a href='https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started' target='_blank' style={{textDecoration: 'none'}}>
                        <div style={tableStyles.item} className='glow'>React</div>
                    </a>
                    <a href='https://developer.mozilla.org/en-US/docs/Glossary/TypeScript' target='_blank' style={{textDecoration: 'none'}}>
                        <div style={tableStyles.item} className='glow'>TypeScript</div>
                    </a>
                </div>
            </div>
        </div>  
          
        <div style={headerStyles.columnTwo}>
            <img style={headerStyles.profilePhoto} alt="profile photo" />
        </div>
    </div>  
    )
}