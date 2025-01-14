// import propsTypes from 'props-types';


function UserGreeting(props){

const welcomeMessage =  <h2 className="welcome-message">
                        Welcome {props.username} 
                         </h2>
    const loginPrompt = <h2 className="login-prompt"> 
                         Please log in to continue
                         </h2>

   return(props.isLoggedIn ? welcomeMessage : loginPrompt );
   }

   // UserGreeting.propsTypes = {
   //    isLoggedIn: propsTypes.bool,
   //    username: propsTypes.string,
   // }
   // UserGreeting.defaultProps = {
   //    isLoggedIn:false,
   //    username:"Guest",
   // }


export default UserGreeting  








