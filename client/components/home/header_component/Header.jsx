import "./header.css";
import { useState } from "react";

function Header(){

const [loggedIn,setLoggedIn] = useState(true);
const [hamburgerClicked,setHamburgerClicked] = useState(false);
const [discountArray,setDiscountArray] = useState([]);
const [index,setIndex] = useState(0);


let array = [
  {img: 'https://cdn.icon-icons.com/icons2/644/PNG/512/red_gym_icon-icons.com_59513.png',title: 'gym',price:'25 Gel',discount:'-35%'},
  {img: 'https://www.k-sport-uk.co.uk/media/catalog/product_images/k-sport-stand-alone-portable-pull-up-bar-1-1.jpg',title: 'pull up bar',price:'35 Gel',discount:'-25%'},
  {img: 'https://decathlon.com.kw/cdn/shop/files/08723f91146b6e9061f3b9898c0e4f78_675x.progressive.jpg?v=1721446078',title: 'dip bar',price:'45 Gel',discount:'-40%'},
  {img: 'https://stingsports.com/cdn/shop/products/LargePairGRY.jpg?v=1680378136',title: 'gloves',price:'50 Gel',discount:'-40%'},
  {img: 'https://www.risestore.com/cdn/shop/products/wrist-wraps-black-edition-detail-1_1200x.jpg?v=1631032826',title: 'wrist wraps',price:'20 Gel',discount:'-70%'},
]

function alterHamburgerClicked(){
 if(hamburgerClicked){
  setHamburgerClicked(false);
 } else {
  setHamburgerClicked(true);
 }
}

function sliderRigth(){
 if(index === array.length - 1){
  setIndex(0);
 // console.log('index is '+array.length);
 }else{
  setIndex(index + 1);
 // console.log('index increament ++');
 }
}

function sliderLeft(){
 if(index === 0){
  setIndex(array.length - 1);
 // console.log('index is '+0);
 }else{
  setIndex(index - 1);
 // console.log('index decreament --');
 }
}

  return <div className="headerMainDiv">

<header className="header">
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
 <div>
  <h1>{array[index].title}</h1>
  <p>Price: <span>{array[index].price}</span></p>
 </div>

 <h2 id="discount">{array[index].discount}</h2>
 <img src={array[index].img} alt={array[index].title} />

 <i id="arrowRigth" onClick={sliderRigth} class="fa-solid fa-arrow-right"></i>
 <i id="arrowLeft" onClick={sliderLeft} class="fa-solid fa-arrow-left"></i>

 <section id="sliderBtnSection">
  {array.map((result,btnIndex)=>{
   return <button id={btnIndex === index && 'selectedBtn'} onClick={()=>{setIndex(btnIndex)}}><i class="fa-solid fa-circle-dot"></i></button>

   })}
 </section>

</section>

 </div>
}

export default Header;