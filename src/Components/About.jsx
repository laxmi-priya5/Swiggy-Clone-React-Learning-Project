import UserClass from "./UserClass";
import User from "./User"
const About = ()=>{
    return(
       <>
         <h1>Information about User</h1>
          <UserClass name={"Laxmipryia"} location={"Noida"} />   {/*passing props to class based component */}
          <User name={"Lucky"} location={"Noida"} />   {/*passing props to functional component */}
       </>
    )
}
export default About;