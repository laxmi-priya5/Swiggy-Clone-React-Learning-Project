// This is the same user card but it is  functional component

import {useState} from 'react'
const User = (props) => {
    const [followers , setFollowers]=useState(0);
    const [following , setFollowing] = useState (0);
    const {name , location}=props;
    return(

        <div className="user-card">
            <h2>Name : {name}</h2>
            <h2>location :{location}</h2>
            <h3>Email : L@gmail.com</h3>
            <h3>Followers : {followers}</h3>
            <h3>Following : {following}</h3>
            <button className="follow" onClick={()=>{  
                  setFollowing(following+1);
               }

               }>Follow</button>
        </div>
    )
    
}

export default User;