import { FC } from 'react'

type Style = React.CSSProperties

const styles: Record<string, Style> = {
    container: {
      padding: '20px 0 50px 50px',
      maxWidth: '800px',
      margin: '0 auto',
      lineHeight: '1.6',
      color: '#333',
      borderLeft: '3px solid gray'
    },
    heading: {
      fontSize: '2rem',
      padding: '30px',
      marginBottom: '10px',
      marginTop: '10px',
      textAlign: 'center'
    },
    paragraph: {
      fontSize: '1.5rem',
      marginBottom: '15px',
    },
  };
  

export const AboutMe: FC = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Hi there!</h1>
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
    )
}