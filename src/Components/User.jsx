// This is the same user card but it is  functional component

import {useState} from 'react'
import { useEffect } from 'react';
const User = (props) => {

    const [following , setFollowing] = useState (0);
    
    console.log(props);
    
    const {name , location , followers , avatar_url}=props?.userInfo;
    return(

        <div className="user-card">
                <div className="text-sec">
                    <h2>Name : {name}</h2>
                    <h2>location : {location}</h2>
                    {/* <h3>Email : {email}</h3>   */}
                    <h3>Followers : {followers}</h3>
                    <h3>Following : {following}</h3>
                    <button className="follow" onClick={()=>{  
                        setFollowing( following+1);
                    }

                    }>Click here to follow more people</button>
              </div>
              <div className="img-sec">
                <img src={avatar_url} alt="image" />
              </div>
          </div>
    )
    
}

export default User;