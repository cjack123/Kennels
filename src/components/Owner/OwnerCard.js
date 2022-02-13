import React from "react"
import "./OwnerCard.css"


export const OwnerCard = ({ owner }) => {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={''} alt="owners" />
          </picture>
          <h3>Name: <span className="card-ownername">
            {owner.name}
          </span></h3>
          <p>Property: {owner.property}</p>
        </div>
      </div>
    );
}