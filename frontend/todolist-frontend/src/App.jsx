import Home from "./pages/Home.jsx"
import Login from "./pages/Login.jsx"

function App() {
  const isLogged = false; //Depois vem do backend

  if(!isLogged) {
    return <Login />
  }

  return <Home />
}

export default App
