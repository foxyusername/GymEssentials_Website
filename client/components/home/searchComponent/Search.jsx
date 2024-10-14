import { useState } from "react";
import "./search.css";

function Search(){ 

const [showPrice,setShowPrice] = useState(false);
const [showProducts,setShowProducts] = useState(false);
const [array,setArray] = useState([
    {title:'Wrist Wraps',checked:false},
    {title:'Pull-Up Bar',checked:false}
])

function showPriceFunction(){

if(showPrice){
    setShowPrice(false);
}else{
    setShowPrice(true);
}

if(showProducts){
    setShowProducts(false);
}

}

function showProductsFunction(){
    if(showProducts){
        setShowProducts(false);
    }else{
        setShowProducts(true);
    }
    
    if(showPrice){
        setShowPrice(false);
    }
}

function checkProductType(index){
  let oldArray = [...array];

  if(oldArray[index].checked === true){
    oldArray[index].checked = false;
  }else{
    oldArray[index].checked = true;
  }

setArray(oldArray);

}

return <div className="searchMainDiv">
    <section className="search_input_div">
        <input type="text" />
        <button><i class="fa-solid fa-magnifying-glass"></i></button>
    </section>

    <section className="search_filter_div">
        <p id="options" onClick={showPriceFunction}>PRICE <i style={{transform:showPrice ? 'rotate(180deg)': 'rotate(0deg)'}} class="fa-solid fa-caret-down"></i></p>
        <p id="options" onClick={showProductsFunction}>PRODUCTS <i style={{transform:showProducts ? 'rotate(180deg)': 'rotate(0deg)'}} class="fa-solid fa-caret-down"></i></p>
    
   {showPrice && <div className="priceFilterer">
        <input type="number" placeholder="From..." />
        <input type="number" placeholder="To..." />
       
       <div className="radioBtnsDiv">
        <label><input type="radio" name="option"/> GEL</label>
        <label><input type="radio" name="option"/>USD</label>
        <label><input type="radio" name="option"/>EUR</label>
       </div>
        <button>Filter</button>
    </div>}

   {showProducts && <div className="productsFilterer">
      <section>
        {array.map((result,index)=>
        {

        return <p style={{backgroundColor:result.checked && "rgb(13, 208, 13)"}} onClick={()=>{checkProductType(index)}} key={index}> {result.title} {result.checked && <i class="fa-solid fa-check"></i>}</p>

        })}
      </section>

      <button>Filter</button>

    </div>}
    
    </section>

    <div className="searchResult">
        <h1>Wrist Wraps, pull-up bars, dip bars</h1>
        <p>From 100 To 200 USD</p>
    </div>
</div>

}

export default Search;