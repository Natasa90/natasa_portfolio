import { FC } from 'react'
import { Header } from './header'
import { Quote } from './header/movingQuote'
import { AboutMe } from './aboutMe/aboutMe'
import { MyWork } from './myWork/myWork'


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