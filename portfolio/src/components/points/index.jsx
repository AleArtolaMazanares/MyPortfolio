import React from "react";
import "./style.css"

const Points = ({text = '', margin = '0px'}) => {
    return(
      <div className="containerGlobalPointsComponent">
        <div className="circle"></div>
        <div className="textPointComponent" style={{marginBottom: margin}}>
            <p>{text}</p>
        </div>
      </div>
    )
}

export default Points