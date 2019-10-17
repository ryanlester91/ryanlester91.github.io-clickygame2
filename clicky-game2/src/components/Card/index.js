import React from "react";
import "./style.css";


  function Card(props) {
    return (
      <div
        className="card" key= {props.id} onClick={() => props.checkGuess(props.id, props.clicked)} 
        style={{
          backgroundImage: props.image ? `url(${props.image})` : "none"
        }}
      >
        {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
  
        <div className="img-container">
          <img alt={props.name} src={props.image} />
    </div>
  </div>

);
      }
export default Card;