//  Conditional rendering = allows you to control what gets rendered 
// in your application based on certain conditions (shows, hide or change components)

import UserGreeting from './UserGreeting.jsx'



function App() {
 

  return (
    <>
    <UserGreeting isLoggedIn={true} username=" BilkisCode"  />
    </>
  );
}

export default App
