import React from "react";
import "./style.css"

const Points = ({text = ''}) => {
    return(
      <div className="containerGlobalPointsComponent">
        <div className="circle"></div>
        <div className="textPointComponent">
            <p>{text}</p>
        </div>
      </div>
    )
}

export default Points