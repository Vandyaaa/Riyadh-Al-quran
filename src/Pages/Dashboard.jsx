import { Link } from "react-router-dom"
import Hero from "../components/Layouts/hero"
import Navigation from "../components/Layouts/navigation"
import About from "../components/Layouts/About"
import GridView from "../components/Layouts/gridView"

export default function Dashboard() {
    return (
        <main>
            <Navigation/>
            <Hero/>
            <About/>
            <GridView/>
        </main>
    )
}