import { FC } from 'react'
import { Header } from './header'
import { MyWork } from './mywork'

export const HomePage: FC = () => {
    return (
        <>
            <Header/>
            <MyWork/>
        </>
    )
}