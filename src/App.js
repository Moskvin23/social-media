import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = (props) => {
  

  return (
    <Router>
      <div className="wave-container">
        <Header />
        <Navbar />  
        <div className="app-wave-content">
          <Route path="/dialogs" render = {() => <Dialogs state={props.state.messagePage}/>} />
          <Route path="/profile"
           render = {() => <Profile 
          state={props.state.profilePage} 
          addPost={props.addPost} />} />
          <Route path="/music" render = {() => <Music/>} />
          <Route path="/settings" render = {() => <Settings/>} /> 
          <Route path="/news" render = {() => <News/>} />
          
        </div>
      </div>
    </Router>
  );
};

export default App;
