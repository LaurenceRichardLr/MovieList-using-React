import React from 'react';
import './App.css';


let Cards = (props) => {
return (
    <>
        <div className="Cards">
            <div className="card">
                <img src = {props.img} alt="my-pic" className="card_img" />
                <div className="card_info">
                    <span className="card_category"> {props.title}</span>
                    <h3 className ="card_title"> {props.distributor} </h3>
                    <p className="card_category">{props.year}</p>
                    <p className="card_category">{props.amount}</p>
                    <p className="card_category">{props.ranking}</p>
                    <a href={props.link} >
                    <button>Watch now</button>
                    </a>  
                </div>
            </div>
        </div>

        {/* <div class="card">

        <img src={props.img} alt="Avatar" className="image-sty"/>
        <div class="container">
        <h4>{props.title}</h4> 
        <p>{props.mname}</p> 
        <a href={props.link} >
        <button>Watch now</button>
                    </a>  
  </div>
        </div> */}
</>

)
}



export default Cards;