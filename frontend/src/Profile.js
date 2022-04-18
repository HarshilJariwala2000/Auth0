// import React from "react";
// import './App.css';
// function Profile() {
//   return (
//   <div>
//     < div>If u are here, you are allowed to be here!</div>
//     <button className='btn'>Logout</button>
//   </div>
//   );
// }
// export default Profile;

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      <button onClick={logout}>Logout</button>

      </div>
    )
  );
};

export default Profile;