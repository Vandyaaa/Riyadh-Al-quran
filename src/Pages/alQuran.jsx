import { useEffect } from "react"

export default function AlquranPages() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <div>yaaaa</div>
    )
}