import Login from "./Components/Login"
import Profile from "./Components/profile"
import UserContextProvider from "./Context/UserContectProvider"


function App() {


  return (
    <UserContextProvider>
     <h1>Hello</h1>
     <Login/>
     <Profile/>

    </UserContextProvider>
  )
}

export default App
