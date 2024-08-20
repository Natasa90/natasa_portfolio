import { FC } from 'react'
import profilePhoto from '../../../../assets/images/womanCoding.jpeg'

type Style = React.CSSProperties

const styles: Record<string, Style> = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '20px',
        margin: '0 auto',
        lineHeight: '1.6',
        color: '#333',
    },
    textContainer: {
        flex: 1,
        padding: '20px',
        textAlign: 'justify'
    },
    heading: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: '2rem',
        padding: '30px 0',
        margin: 'auto'
    },
    paragraph: {
        fontSize: '1.5rem',
        marginBottom: '1rem',
        marginLeft: '5rem'
    },
    profilePhotoContainer: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
    },
    profilePhoto: {
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        border: '3px solid #aaa8a8',
        boxShadow: '-4px 10px #EDF7FA',
    }
}

export const AboutMe: FC = () => {
    return (
        <div style={styles.container}>
            <div style={styles.textContainer}>
                <h1 style={styles.heading}>About me</h1>
                <p style={styles.paragraph}><em>
                    I'm a 34-year-old front-end web developer with 4 years of experience, passionate about crafting engaging and user-friendly websites.
                    My journey into coding was inspired by my brother and sister, both of whom are also in IT. I've enjoyed working on both group projects and solo assignments,
                    and I thrive on tackling challenges and finding creative solutions. I'm committed to continuous learning and improvement, always eager to upgrade my skills and stay current with industry trends.
                    </em></p>
                <p style={styles.paragraph}><em>
                    Outside of work, I'm a dedicated mom to two wonderful girls and an avid ex-volleyball player. I love exploring new places, soaking up nature, and diving into a good book.
                    Meeting new people and learning about different cultures fuels my curiosity. I enjoy collaborating in team environments where innovation and creativity are encouraged. Let's make some magic happen together!
                    </em></p>
            </div>
            <div style={styles.profilePhotoContainer}>
                <img src={profilePhoto} style={styles.profilePhoto} alt="profile photo" />
            </div>
        </div>
    )
}
