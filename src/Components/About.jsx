import UserClass from "./UserClass";
import User from "./User"
import {useState} from 'react'
import { useEffect } from "react";


const About = ()=>{
 
  const [users, setUsers] = useState([]);
  
  useEffect(()=>{
    const fetchApi = async()=>{
        const usersId =  ["loveBabbar","shradha-khapra"];

        const results = await Promise.all(
            usersId.map(async (userId)=>{
                const data = await fetch(`https://api.github.com/users/${userId}`);
                const json = await data.json();
                
                return json;
            })
          
        )
          console.log(results);
          setUsers(results);
          
          
    }
    fetchApi();
  } ,[])   //never miss empty depedency array  
   
    return(
        <> 
        <h1>Information about User</h1>
        <div className = "about">
        
          {/*  passing props to class based component */}
          <UserClass email={"hitesh@gmail.com"} />
          
          {
            users.map((user)=><User key="user.login"  userInfo={user}/> )
          }
         
       </div>
        </>
       
    )
}
export default About;