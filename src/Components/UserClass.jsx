//This is class based component and  for comparison between this and functional component there is another component for user card is used

import React from "react";

class UserClass extends React.Component{
    

    constructor(props){
       super(props);  
       //state variable in class based component
       this.state = {
    
          following : 0,
          userInfo : {   // initialixe the date variable with any dummy data or no data
                           
          },
       }
    }

    async componentDidMount(){  // can make this function directly async
        //api call
        const data = await fetch("https://api.github.com/users/hiteshchoudhary");
        const json = await data.json();
   

        this.setState({
            userInfo : json,
        })
        
    }
     
    render(){
        const {email} = this.props;  // get email passed through props
        const { following} = this.state;  
        const {name ,location ,followers , avatar_url} = this.state.userInfo;
      return(
  
            <div className="user-card">
                <div className="text-sec">
                    <h2>Name : {name}</h2>
                    <h2>location : {location}</h2>
                    <h3>Email : {email}</h3>   {/* access through props passing */}
                    <h3>Followers : {followers}</h3>
                    <h3>Following : {following}</h3>
                    {/* update state in class based component */}
                    <button className="follow" onClick={()=>{  
                        this.setState({
                            following : this.state.following+1
                        })
                    }

                    }>Click here to follow more people</button>
              </div>
              <div className="img-sec">
                <img src={avatar_url} alt="image" />
              </div>
          </div>
               
        )
    }
}

export default UserClass;