import { FC } from 'react'
import { Header } from './header'
import { Quote } from './header/movingQuote'
import { AboutMe } from './aboutMe'
import { MyWork } from './myWork'


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