//import logo from './logo.svg';
import './App.css';
import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
import axios from 'axios';
// require('dotenv').config()

function App() {
  const {
    loginWithPopup,
    loginWithRedirect,
    logout,
    user,
    isAuthenticated,
    getAccessTokenSilently
  } = useAuth0();

function callApi(){
  axios.get("http://localhost:4000/").then(response=>console.log(response.data));
}

async function callProtectedApi(){
  try{
  const token = await getAccessTokenSilently();
  const response = await axios.get('http://localhost:4000/protected',{
    headers:{
      authorization:`Bearer ${token}` 
    }
  })
  console.log(response.data);
}catch(error){
  console.log(error.message);
}
//  return response;
  // axios.get("http://localhost:4000/protected")
  // .then(response=>console.log(response.data))
  // .catch(error=>error.message)
}

  return (
   <div className = "App">
     <h1>Auth0 Authentication</h1>
     <ul>
       <li><button onClick={loginWithPopup}>Popup                      </button></li>
       <li><button onClick={loginWithRedirect}>Redirect</button></li>
       <li><button onClick={logout}>Logout</button></li>
     </ul>
     <h3>User is {isAuthenticated?"Logged in":"Not Logged in"}</h3>

     <ul>
       <li><button onClick={callApi}>Call API route</button></li>
       <li><button onClick={callProtectedApi}>Call protect API route</button></li>
     </ul>

     {isAuthenticated&&(
        <pre style={{textAlign:'start'}}>{JSON.stringify(user,null,2)}</pre>
     )}
   </div>
  );
}

export default App;
