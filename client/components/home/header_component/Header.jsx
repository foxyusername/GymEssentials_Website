import "./header.css";
import { useState } from "react";

function Header(){

const [loggedIn,setLoggedIn] = useState(true);
const [hamburgerClicked,setHamburgerClicked] = useState(false);


function alterHamburgerClicked(){
 if(hamburgerClicked){
  setHamburgerClicked(false);
 } else {
  setHamburgerClicked(true);
 }
}

  return <div className="headerMainDiv">

<header>
<div className="header_center_div">
  <div className="header_logo_div">
    <img src="https://cdn.icon-icons.com/icons2/644/PNG/512/red_gym_icon-icons.com_59513.png" alt="logo image" />
    <h1>GymEssentials</h1>
  </div>

  <div className="header_navigation_mobile_div">
   <i onClick={alterHamburgerClicked} id="hamburger_bars" class="fa-solid fa-bars"></i>

  {hamburgerClicked && <div onClick={alterHamburgerClicked}>
  <p>Home</p>
  <p>Contact</p>
  <p>Cart</p>
  {loggedIn ? <section>
  <img src="https://icons.veryicon.com/png/o/miscellaneous/youyinzhibo/guest.png" alt="profile image" /> 
  <h3>Nika jamaspishvili</h3>
  </section>:
  <section>
  <h1>Login</h1>
  </section>}
 </div>}

  </div>

   <div className="navigation_p_tags">
   <p>Home</p>
   <p>Contact</p>
   <p>Cart</p>
   </div>
  
  {loggedIn ? <div className="already_registered_div">
    <img src="https://cdn1.vectorstock.com/i/1000x1000/13/65/guest-in-house-on-white-background-vector-35661365.jpg" alt="profile image" /> 
    <h3>Nika jamaspishvili</h3>
    </div>:
    <div className="yet_to_register_div">
    <p>Login / Signup</p>
    </div>}
    </div>
</header>

<section className="imageSlider_section">

</section>

 </div>
}

export default Header;