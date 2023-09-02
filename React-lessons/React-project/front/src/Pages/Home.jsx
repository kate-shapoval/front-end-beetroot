// import { shopItems } from '../data/shopItems.js'
import { Link } from "react-router-dom";
import Hero from "../components/Hero/Hero.jsx";
import Products from "../components/Products/Products.jsx"
import Advantages from "../components/Advantages/Advantages.jsx"
import Progress from "../components/Progress/Progress.jsx";
import Potfolio from "../components/Portfolio/Potfolio.jsx";
export default function Home(props) {

    return (
        <>
            <Hero />
            <Products />
            <Advantages />
            <Progress />
            <Potfolio />
        </>
    )
}