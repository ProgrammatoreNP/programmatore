import React from "react";
import Navbar from "../Components/Navbar";
import HomeCards from "../Components/HomeCards";
import { Auth0Provider } from "@auth0/auth0-react";
import ServerUpdatesGuest from "../Components/ServerUpdatesGuest";


function Home() {

    return (
      <>
          {" "}
          <Navbar />
        <HomeCards />
      </>
    );
  
  
}

export default Home;
