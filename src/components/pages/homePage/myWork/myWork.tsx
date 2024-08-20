import { FC } from 'react'
import './arrow.css'
import recipeImage from '../../../../assets/images/recipes.png'
import bookClubImage from '../../../../assets/images/bookClub.png'
import fitnesAppImage from '../../../../assets/images/fitnessApp.png'


type Style = React.CSSProperties

const myWorkStyles: Record<string, Style> = {
    bottom: {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRight: '3px solid gray',
        marginRight: '200px',
        marginLeft: '5rem'
    },
    featured: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '6rem',
        paddingBottom: '5rem',
        borderTop: '3px solid gray',
        alignItems: 'center',
    },
    header: {
        fontSize: '2rem',
        fontWeight: '700',
        borderRadius: '10px',
        backgroundColor: 'hsl(200, 46%, 41%)',
        textAlign: 'center',
        color: '#FFFFFF',
        border: 'none',
        padding: '1rem 10rem'
    },
    bottomImage: {
        width: '246px',
        height: '180px',
        objectFit: 'cover',
        borderRadius: '6px',
        marginTop: '2rem',
        border: '1px solid gray',
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
        padding: '20px 0 2rem 5rem',
    },
    col2Paragraph: {
        fontSize: '17px',
    },
    column: {
        padding: '10px 0 5px 0'
    },
    p: {
        lineHeight: '1.3',
        textAlign: 'justify'
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
            <p style={myWorkStyles.header}>Recent work</p> 
            <div className="arrow-container">
                <div className="arrow-down">
            </div>
        </div>
        </div>
        <div style={myWorkStyles.boxTop}>
            <div style={myWorkStyles.col1}>
                <a href='https://natasa90.github.io/RecipesApp/#favorites' target='_blank'><img style={myWorkStyles.bottomImage} src={recipeImage} alt="Recipe Finder App"/></a>
            </div>
            <div style={myWorkStyles.col2}>
                <a href='https://natasa90.github.io/RecipesApp/#favorites' target='_blank' style={{textDecoration:'none', color:'inherit'}}>
                <h2>Recipe Finder</h2>
                </a>
                <p style={myWorkStyles.column}><span style={myWorkStyles.spanLeft} >2023</span><span style={myWorkStyles.spanRight}>Made-from-scratch-App</span></p>
                <p style={myWorkStyles.p}>The ultimate app for discovering and organizing recipes that match your taste and dietary needs. Recipe Finder makes it easy to find delicious recipes from around the world, tailored to your preferences.</p>
            </div>
        </div>    
        <div style={myWorkStyles.boxMiddle}>
            <div style={myWorkStyles.col1}>
                <a href='https://mndraca.github.io/BookReview-/' target='_blank'><img style={myWorkStyles.bottomImage} src={bookClubImage} alt="Book Club App"/></a>
            </div>
            <div style={myWorkStyles.col2}>
                <a href='https://mndraca.github.io/BookReview-/' target='_blank' style={{textDecoration:'none', color:'inherit'}}>
                <h2>Book Club</h2>
                </a>
                <p style={myWorkStyles.column}><span style={myWorkStyles.spanLeft} >2024</span><span style={myWorkStyles.spanRight}>Team work done right</span></p>
                <p style={myWorkStyles.p}>The comprehensive app designed to enhance your reading experience. Connect with fellow book enthusiasts, explore a vast library of titles, and share your thoughts with a community that loves books as much as you do.</p>
            </div>
         </div>    
         <div style={myWorkStyles.boxBottom}>
            <div style={myWorkStyles.col1}>
                <a href='https://sdzika.github.io/workout-logging-form/' target='_blank'>
                    <img style={myWorkStyles.bottomImage} src={fitnesAppImage} alt="Fitnes App"/>
                </a>
            </div>
            <div style={myWorkStyles.col2}>
                 <a href='https://sdzika.github.io/workout-logging-form/' target='_blank' style={{textDecoration:'none', color:'inherit'}}>
                    <h2>Fitness Tracker</h2>
                </a>
                <p style={myWorkStyles.column}><span style={myWorkStyles.spanLeft} >2024</span><span style={myWorkStyles.spanRight}>Creating beautiful fitness journey</span></p>
                <p style={myWorkStyles.p}>Stay on top of your health and wellness journey with Fitness Tracker, the all-in-one app for monitoring your workouts, tracking progress, and setting personalized fitness goals.</p>
            </div> 
        </div>   
    </div> 
   ) 
}