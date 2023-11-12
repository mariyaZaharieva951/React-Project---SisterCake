import { Hero } from '../Hero/Hero'
import { Offer } from '../Shop/Offer'
import { Welcome } from '../Welcome/Welcome'
import { OurClients } from '../Clients/OurClients'
import { Menu } from '../Products/Menu/Menu'

export const Home = () => {
    return (
        <>
        <Hero/>
        <Welcome/>
        <Menu/>
        <Offer/>
        <OurClients/>
        </>
    )
}