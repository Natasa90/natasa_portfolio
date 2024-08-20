import { FC } from 'react';
import womanCoding from './womanCoding.mp4'
import { DownloadButton } from './resumeButton/index';

type Style = React.CSSProperties;

const headerStyles: Record<string, Style> = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '2rem',
    },
    video: {
        width: '50%',
        zIndex: -20,
    },
    h1: {
        fontSize: '3.5rem',
        textAlign: 'center'
    },
    textContainer: {
        width: '45%',
    },
    right: {
        fontSize: '1.5rem',
        marginTop: '1rem',
        marginLeft: '2rem',
        textAlign: 'center',
    },
};
export const Header: FC = () => {
    return (
        <div style={headerStyles.container}>
                <video
                    src={womanCoding}
                    style={headerStyles.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div style={headerStyles.right}>
                    <h1 style={headerStyles.h1}>
                        Hi, I'm Natasa,
                        <p>
                           <small className="text-muted">A Front-End Developer!</small>
                        </p>
                    </h1>
                    <p>
                        Welcome to my portfolio! <br />
                        I'm a passionate front-end developer who thrives on 
                        crafting beautiful, intuitive web experiences. Explore my work 
                        and see how I bring code to life with creativity and precision.
                    </p>
                    <DownloadButton/>
                </div>
        </div>
    );
};