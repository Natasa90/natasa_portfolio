import { FC } from 'react'

type Style = React.CSSProperties

const myWorkStyles: Record<string, Style> = {
    bottom: {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRight: '3px solid gray',
        marginRight: '200px',
        marginLeft: '5rem'
    },
    featured: {
        textAlign: 'center',
        paddingTop: '5rem',
        paddingBottom: '2rem',
        fontSize: '35px',
        lineHeight: '1.6',
        fontWeight: '700',
        borderTop: '3px solid gray'
    },
    bottomImage: {
        width: '246px',
        height: '180px',
        borderRadius: '6px',
        marginTop: '2rem',
        marginBottom: '0.5rem',
    },
    span1: {
        backgroundColor: '#142850',
        borderRadius: '1rem',
        color: '#ffffff',
        fontSize: '1.2rem',
        fontWeight: 900,
        padding: '0.1rem 0.7rem 0.2rem 0.7rem',
    },
    span2: {
        color: '#8695A4',
        marginLeft: '1rem',
    },
    col2: {
        padding: '1rem 0 2rem 5rem',
    },
    col2Paragraph: {
        fontSize: '17px',
    },
    column: {
        padding: '10px 0 5px 0'
    },
    p: {
        lineHeight: '1.3'
    },
    boxTop: {
        display: 'flex',
        borderBottom: '1px solid rgba(224, 224, 224, 1)',
        marginRight: '7rem',
        marginBottom: '3rem',
    },
    boxMiddle: {
        display: 'flex',
        borderBottom: '1px solid rgba(224, 224, 224, 1)',
        marginRight: '7rem',
        marginBottom: '3rem',
    },
    boxBottom: {
        display: 'flex',
        borderBottom: '1px solid rgba(224, 224, 224, 1)',
        marginRight: '7rem',
        marginBottom: '8rem',
    },
    bottomH2: {
        fontSize: '30px',
    },
    spanRight: {
        fontSize: '25px',
        color: 'rgba(134, 149, 164, 1)',
        paddingLeft: '1.5rem',
    },
    spanLeft: {
        backgroundColor: 'rgba(20, 40, 80, 1)',
        padding: '1px 10px',
        borderRadius: '20px',
        color: 'rgba(255, 255, 255, 1)',
    },
};

export const MyWork: FC = () => {
   return (
    <div style={myWorkStyles.bottom}>
        <div style={myWorkStyles.featured}>
            My work
        </div>
        <div style={myWorkStyles.boxTop}>
            <div style={myWorkStyles.col1}>
                <img style={myWorkStyles.bottomImage} src='data:image/jpeg;base64,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' alt="photo"/>
            </div>
            <div style={myWorkStyles.col2}>
                <h2>Recipe Finder</h2>
                <p style={myWorkStyles.column}><span style={myWorkStyles.spanLeft} >2023</span><span style={myWorkStyles.spanRight}>Made-from-scratch-App</span></p>
                <p style={myWorkStyles.p}>The ultimate app for discovering and organizing recipes that match your taste and dietary needs. Recipe Finder makes it easy to find delicious recipes from around the world, tailored to your preferences.</p>
            </div>
        </div>    
        <div style={myWorkStyles.boxMiddle}>
            <div style={myWorkStyles.col1}>
                <img style={myWorkStyles.bottomImage} src="data:image/jpeg;base64,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" alt="photo"/>
            </div>
            <div style={myWorkStyles.col2}>
                <h2>Book Club</h2>
                <p style={myWorkStyles.column}><span style={myWorkStyles.spanLeft} >2024</span><span style={myWorkStyles.spanRight}>Team work done right</span></p>
                <p style={myWorkStyles.p}>The comprehensive app designed to enhance your reading experience. Connect with fellow book enthusiasts, explore a vast library of titles, and share your thoughts with a community that loves books as much as you do.</p>
            </div>
         </div>    
         <div style={myWorkStyles.boxBottom}>
            <div style={myWorkStyles.col1}>
                <img style={myWorkStyles.bottomImage} src="https://media.wired.com/photos/6143d8e5e3c981d3147da0f9/master/pass/Gear-Fitness-Trackers-1309134295.jpg" alt="photo"/>
            </div>
            <div style={myWorkStyles.col2}>
                <h2>Fitness Tracker</h2>
                <p style={myWorkStyles.column}><span style={myWorkStyles.spanLeft} >2024</span><span style={myWorkStyles.spanRight}>Creating beautiful fitness journey</span></p>
                <p style={myWorkStyles.p}>Stay on top of your health and wellness journey with Fitness Tracker, the all-in-one app for monitoring your workouts, tracking progress, and setting personalized fitness goals.</p>
            </div> 
        </div>   
    </div> 
   ) 
}