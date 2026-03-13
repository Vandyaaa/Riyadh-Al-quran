import s from "../../style/Layouts/about.module.css"
import hijriah from "../../assets/riyadhasset2.webp"
import { useEffect, useRef } from "react"
export default function About() {

    const ikon = useRef(null)

    useEffect(() => {

        const maxScroll = 500

        const handleScroll = () => {
            const scroll = window.scrollY
            let a = 50 - scroll / maxScroll * 50
            // if (a < 0) a = 0
            if (ikon.current) {
                ikon.current.style.transform = `translateX(${a}px)`
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <section className={s.about_section}>
            <div className={s.con_text_about}>
                <h1>Apa itu <br /> <span>Riyadh Learning?</span></h1>
                <p>
                    Riyadh adalah web pembelajaran
                    bahasa arab buatan SMK Negeri 5 Surakarta
                    web ini dibuat dan dikembangkan oleh
                    Abi, Indra, dan Nico. web ini berisi huruf-huruf hijriah,
                    angka-angka arab, cara membaca, dan lain-lain sangat kompit bukann?.
                    oh iya, web ini juga ada versi aplikasinya lho dan gak kalah komplit.
                </p>
            </div>
            <img ref={ikon} src={hijriah} alt="" />
        </section>
    )
}