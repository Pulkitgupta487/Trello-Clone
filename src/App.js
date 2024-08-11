//import logo from './logo.svg';
import "./App.css";
import images from "./images/sprintlogo.png";
// import search from "./images/search.png";
import avatar from "./images/avatar.png";
import "./avatar.css";
import { CgAdd } from "react-icons/cg";
import { IoSearchOutline } from "react-icons/io5";

function App() {
  return (
    <div className="App">
      <div className="app-1">
        <div>
          <img className="Img-1" src={images} alt="logo" />
        </div>
        <div>
          <h4 className="Text-1">Sprint Plan</h4>
          <ul className="List">
            <li>overview</li>
            <li>list</li>
            <li>board</li>
            <li>timeline</li>
            <li>claender</li>
            <li>dashboard</li>
            <li>messages</li>
            <li>more...</li>
          </ul>
        </div>
      </div>
      <div className="sidepanel">
        <div className="head-avatar">
          <img className="img-2 img-4" src="https://picsum.photos/600" alt="logo" />
          <img className="img-2 img-5" src={avatar} alt="logo" />
          <img className="img-2 img-6" src="https://picsum.photos/600" alt="logo" />
          <img className="img-2 img-7" src={avatar} alt="logo" />
        </div>
        <div className="spacer1"></div>
        <div className="searchbox">
          {/* <img  src={search} alt="logo" /> */}
          <IoSearchOutline className="img-3" />
          <input className="searchbar" type="text" placeholder="search..." />
        </div>

          <CgAdd className="sign" />

      </div>
    </div>
  );
}

export default App;
