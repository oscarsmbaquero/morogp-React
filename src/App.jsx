
//import React, { useState } from 'react';
import React from 'react'
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import './App.scss';

//auth
import { signIn } from "./auth/auth";
import AuthRoute from "./auth/AuthRoute";

//pages
import Home from './pages/Home';
import NotFound from "./pages/NotFound";
import Form from './pages/Form';
//import LoginForm from './components/LoginForm';


//import { FooterContext, networks } from './contexts/ThemeContext';

 //import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import LoginForm from './components/LoginForm';

//pages
import List from './pages/List';
import Motos from './pages/Motos';
import Circuits from './pages/Circuits';
import Profile from './pages/Profile';

//import { Route, Routes } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);
  const authenticated = user !== null;

  const login = ({ email, password }) => setUser(signIn({ email, password }));
  const logout = () => setUser(null);
  const networks =[
    {
      "name": "Facebook",
      "url": "https://facebook.com",
      "image": "https://img1.freepng.es/20180319/iyw/kisspng-facebook-logo-social-media-computer-icons-icon-facebook-drawing-5ab02fb69f99c4.9538101315214959906537.jpg",
      },
    {
      "name": "Whatsapp",
      "url": "https://www.whatsapp.com/?lang=es",
      "image": "http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png ",
      },
    {
      "name": "Twiter",
      "url": "https://twitter.com/?lang=es",
      "image": "http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png",
    },
    {
      "name": "Instagram",
      "url": "https://www.instagram.com/",
      "image": "https://forcaem.com/wp-content/uploads/2016/05/instagram-png-instagram-png-logo-1455.png",
      
    }
  ];
  
  const [profileList, setProfileList] = useState([ ]);  
  const addProfile = (profile) => {
    const newProfiles = [ ...profileList, profile ];
    setProfileList(newProfiles);
  };
 
  return (
    <div className="App">

      
      {/* <Header></Header>  */}
      <Sidebar authenticated={authenticated} logout={logout} />
      <main>
      <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/list" element={<List/>} />
          <Route path="/motos" element={<Motos/>} />
          <Route path="/circuits" element={<Circuits/>} />
          <Route path="/form" element={<Form addProfile={addProfile}/>} />
          <Route
            path="/login"
            element={<LoginForm authenticated={authenticated} login={login} />}
          />
          <Route path="/profile" element={<AuthRoute user={user} component={<Profile user={user} />} />}></Route>          
          <Route path="*" element={<NotFound />} />
      </Routes>
      </main>
      <Footer networks={networks}></Footer>
    </div>
  );
}

export default App;
