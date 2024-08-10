import { FC } from 'react'
import { Header } from './header'
import { Quote } from './movingQuote/movingQuote'
import { AboutMe } from './aboutMe'
import { MyWork } from './mywork'


export const HomePage: FC = () => {
    return (
        <>
            <Header/>
            <Quote/>
            <AboutMe/>
            <MyWork/>
        </>
    )
}