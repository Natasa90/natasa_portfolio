import { FC } from 'react'

type Style = React.CSSProperties

const headerStyles: Record<string, Style> = {
    top: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'start',
        marginTop: '6rem',
        paddingBottom: '4rem'
    },
    columnOne: {
        flex: 2,
    },
    columnTwo: {
        flex: 1,
    },
    h1: {
        fontSize: '2.65rem',
    },
    profilePhoto: {
        width: '450px',
        height: '443px',
        borderRadius: '50%',
        boxShadow: '-4px 10px #EDF7FA',
    }
};

export const Header: FC = () => {
    return (
        <div style={headerStyles.top}>               
        <div style={headerStyles.columnOne}>
            <h1>Hi, I am Natasa,<br/> A Front End Engineer!</h1>
            <p className="top-text">I am deeply passionate about programming, driven by <br/>a relentless curiosity and a genuine love for creating solutions through code.
            </p>
        </div>    
        <div style={headerStyles.columnTwo}>
            <img style={headerStyles.profilePhoto} src="https://thumbs.dreamstime.com/b/beautiful-smiling-woman-portait-beauty-face-115726247.jpg" alt="profile photo" />
        </div>
    </div>  
    )
}