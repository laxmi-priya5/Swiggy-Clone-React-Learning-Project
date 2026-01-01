import { useState , useContext ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Body from './Components/Body'
import { Outlet } from 'react-router-dom'
import UserContext from './utils/UserContext'
import {Provider} from 'react-redux'
import appStore from './utils/AppStore'
import Footer from './Components/Footer'



function App() {
  const {loggedInUser}=useContext(UserContext);
  const [user , setUser] = useState(loggedInUser);
  
  
  useEffect(()=>{
       //suppose to find the data through api call
       const data = {  //suppose json data
         name:"Laxmipriya" 
       }
       setUser(data.name);
  },[])

  return (
    <div className='app'>
       <Provider store={appStore}>
          <UserContext.Provider value={{loggedInUser:user}}>
                  <Header/>
                  <Outlet/>
                  <Footer/>
          </UserContext.Provider>
        
       </Provider>
    </div>
  )
}

export default App           
