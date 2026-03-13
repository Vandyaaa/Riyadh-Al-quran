import s from "../../style/Layouts/navigation.module.css"

export default function Navigation() {
    return (
        <div className={s.navigation}>
            <div className={s.logo}>R</div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Grid</li>
                <li>Video</li>
            </ul>
            <div className={s.login}>login</div>
        </div>
    )
}