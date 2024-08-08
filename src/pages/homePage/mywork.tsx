import { FC } from 'react'

type Style = React.CSSProperties

const myWorkStyles: Record<string, Style> = {
    bottom: {
        backgroundColor: 'rgba(255, 255, 255, 1)',
    },
    featured: {
        borderTop: '1px solid gray',
        paddingTop: '2rem',
        fontSize: '22px',
        marginRight: '8rem'
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
        paddingLeft: '1rem',
    },
    col2Paragraph: {
        fontSize: '17px',
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
        marginBottom: '3rem',
    },
    bottomH2: {
        fontSize: '30px',
    },
    spanRight: {
        fontSize: '20px',
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
                <img style={myWorkStyles.bottomImage} src='' alt="photo"/>
            </div>
            <div style={myWorkStyles.col2}>
                <h2>Recipe Finder</h2>
                <p><span style={myWorkStyles.spanLeft} >2023</span><span style={myWorkStyles.spanRight}>Made-from-scratch-App</span></p>
                <p>The ultimate app for discovering and organizing recipes that match your taste and dietary needs. Whether you're a seasoned cook or a kitchen newbie, Recipe Finder makes it easy to find delicious recipes from around the world, tailored to your preferences.</p>
            </div>
        </div>    
        <div style={myWorkStyles.boxMiddle}>
            <div style={myWorkStyles.col1}>
                <img style={myWorkStyles.bottomImage} src="Images/woman.png" alt="photo"/>
            </div>
            <div style={myWorkStyles.col2}>
                <h2>Book Club</h2>
                <p><span style={myWorkStyles.spanLeft} >2024</span><span style={myWorkStyles.spanRight}>Team work done right</span></p>
                <p>The comprehensive app designed to enhance your reading experience. Connect with fellow book enthusiasts, explore a vast library of titles, and share your thoughts with a community that loves books as much as you do.</p>
            </div>
         </div>    
         <div style={myWorkStyles.boxBottom}>
            <div style={myWorkStyles.col1}>
                <img style={myWorkStyles.bottomImage} src="Images/sign.png" alt="photo"/>
            </div>
            <div style={myWorkStyles.col2}>
                <h2>Fitness Tracker</h2>
                <p><span style={myWorkStyles.spanLeft} >2024</span><span style={myWorkStyles.spanRight}>A beautiful fitness journey</span></p>
                <p>Stay on top of your health and wellness journey with Fitness Tracker, the all-in-one app for monitoring your workouts, tracking progress, and setting personalized fitness goals.</p>
            </div> 
        </div>   
    </div> 
   ) 
}