import Header from "./header_component/Header";
import Search from "./searchComponent/Search";
import "./home.css";

function Home(){

  return <div className="homeMainDiv">
    <div className="homeCenterDiv">
    <Header/>
    <Search/>
  </div>
  </div>
  
}

export default Home;