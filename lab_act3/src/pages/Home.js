import Hero from '../components/Hero'
import Item from '../components/HeroItem'
import Button from '../components/Button'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Content from '../components/Content'

export default function Home () {
    return (
        <>
            <Navbar/>
            <Hero/>
            <Button/>
            <Content/>
            <Item/>
            <Carousel/>
            <Footer/>
        </>
        
    )
}