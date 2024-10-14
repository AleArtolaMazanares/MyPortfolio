import React from "react";
import "./style.css"
import Buttons from "../../components/buttons";


const Home = () => {
    return(
        <div className="containerGlobalHome">
            <div className="textProfileHome">
                <div className="textHomeTitle">
                    <p>Con este portafolio, cada línea de código es una historia que muestra cómo transformo ideas en realidades sorprendentes.</p>
                </div>
                <div className="textHome">
                    <div className="text">
                        <p> Puedes ver mis proyectos y contribuciones en GitHub, donde cada repositorio refleja mi pasión y habilidad como programador</p>
                    </div>
                    <div className="button">
                        <Buttons background={'#3DE2A1'} borderRadius={'2px'}/>
                    </div>
                </div>
            </div>
            <div className="imageProfileHome">
                <div className="image">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDL-glbE298VTC9rd0Hz5L4o6Iz8ttsZJncQ&s" alt="" />
                </div>
            </div>
        </div>
    )
}
export default Home