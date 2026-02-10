import {useState} from "react";
import api from "../services/api.js"

function Register() {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            await api.post("/users", {
                name,
                email,
                password
            })
            alert("Usuario cadastrado com sucesso !")
        } catch (error) {
            alert("Erro ao cadastrar o usuario")
            console.log(error)
        }
    }


    return (
        <div>
            <h1> Cadastro </h1>
            <form onSubmit={handleSubmit}>
                <input type="text"
                       placeholder="Nome"
                       value={name}
                       onChange={(e) => setName(e.target.value)}/>

                <input type="email"
                       placeholder="Email"
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}/>

                <input type="password"
                       placeholder="Senha"
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}/>

                <button type="submit"> Cadastrar </button>
            </form>
        </div>
    )
}

export default Register