import s from "../../style/Layouts/gridView.module.css"
import gambar from "../../assets/riyadhasset2.webp"
import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"

export default function GridView() {

    const contentGrid = [
        {
            nomor: "01",
            title: "Al-Quran",
            description: "Berisi ayat-ayat alquran lengkap",
            link: "/Alquran",
            gambar: gambar

        },
        {
            nomor: "02",
            title: "Hijayah",
            description: "Kumpulan Huruf-huruf Hijaiyah yang merupakan huruf penyusun kata dalam Al-Quran",
            link: "/Hijayah",
            gambar: gambar

        },
        {
            nomor: "03",
            title: "Iqro",
            description: "Berisi kumpulan Iqro untuk pemula, Dari Iqro 1 sampai 6",
            link: "/",
            gambar: gambar

        },
        {
            nomor: "04",
            title: "Angka Arab",
            description: "Berbagai Angka-angka dalam bahasa arab yang sudah dikemas dalam satu section dengan penjelasan",
            link: "/",
            gambar: gambar

        },
        {
            nomor: "05",
            title: "Jadwal Sholat",
            description: "Berisi jadwal waktu sholat untuk berbagai daerah di Indonesia",
            link: "/",
            gambar: gambar

        },
        {
            nomor: "06",
            title: "Pemberitahuan",
            description: "Berisi daftar tugas dari guru anda",
            link: "/",
            gambar: gambar

        },

    ]

    return (
        <section className={s.section_grid_view}>
            <ul>
                {contentGrid.map((items) => (
                    <li>
                        <div className={s.li_title_and_link}>
                            <div className={s.li_title}>
                                <span>{items.nomor}</span>
                                <h2>{items.title}</h2>
                                <p>{items.description}</p>
                            </div>
                            <Link to={items.link} className={s.li_link}><ArrowUpRight/></Link>
                        </div>
                        <img src={items.gambar} alt="" srcset="" />
                    </li>
                ))}
            </ul>
        </section>
    )
}