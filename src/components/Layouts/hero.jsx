import { ArrowDown } from "lucide-react"
import s from "../../style/Layouts/hero.module.css"


export default function Hero() {

    return (
        <section className={s.heroSection}>
            <div className={s.heroText}>
                <h1><span>Riyadh</span> Learning</h1>
                <p>
                    Riyadh adalah web pembelajaran bahasa arab 
                    buatan SMK Negeri 5 Surakarta, 
                    web ini dibuat dan dikembangkan oleh 
                    Abi, Indra, dan Nico
                </p>
                <button>
                    Explore <span><ArrowDown/></span>
                </button>
            </div>
            <div className={s.heroImage}></div>
        </section>
    )
}