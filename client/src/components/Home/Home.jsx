import { Hero } from '../Hero/Hero'
import { Products } from '../Products/Products'
import { Offer } from '../Shop/Offer'
import { Welcome } from '../Welcome/Welcome'
import { OurClients } from '../Clients/OurClients'

export const Home = () => {
    return (
        <>
        <Hero/>
        <Welcome/>
        <Products/>
        <Offer/>
        <OurClients/>
        </>
    )
}