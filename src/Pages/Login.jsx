import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function LoginPage({ setSudah }) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const ProsesLogin = () => {
        if (username === "admin" && password === "123") {
            setSudah(true)   // ⬅️ ubah state di App
            navigate("/")
        } else {
            alert("aaa")
        }
    }

    return (
        <div>
            <input 
                type="text"
                onChange={(e) => setUsername(e.target.value)}
            />
            <input 
                type="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={ProsesLogin}>Login</button>
        </div>
    )
}