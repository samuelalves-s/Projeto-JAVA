import {useState} from "react";

function Login() {
    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")

    function handleSubmit(e) {
        //Evita reload
        e.preventDefault()

        //Debugger
        console.log({
            name,
            email,
            password
        })
    }




    return (
        <div>
            <h1> Login </h1>

            <form onSubmit={handleSubmit}>
                <input  type="text"
                        placeholder="Digite seu nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}/>
                <input  type="email"
                        placeholder="Digite seu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                <input  type="password"
                        placeholder="Digite sua senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit"> Entrar </button>
            </form>
        </div>
    )
}

export default Login