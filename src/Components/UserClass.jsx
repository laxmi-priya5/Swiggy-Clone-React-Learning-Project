//This is class based component and  for comparison between this and functional component there is another component for user card is used

import React from "react";

class UserClass extends React.Component{
    

    constructor(props){
       super(props);
       //state variable in clasds based component
       this.state = {
          followers : 0,
          following : 0
       }
    }
    
    render(){
        const {name , location} = this.props;
        const {followers , following} = this.state; 
      return(

            <div className="user-card">
               <h2>Name : {name}</h2>
               <h2>location : {location}</h2>
               <h3>Email : L@gmail.com</h3>
               <h3>Followers : {followers}</h3>
               <h3>Following : {following}</h3>
               {/* update state in class based component */}
               <button className="follow" onClick={()=>{  
                  this.setState({
                    following : this.state.following+1
                  })
               }

               }>Follow</button>
            </div>
        )
    }
}

export default UserClass;