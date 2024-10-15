import React from "react";
import "./style.css";
import Buttons from "../../components/buttons";
import Points from "../../components/points";
import { RedirectTo } from "../../components/functions/redirect";

const Home = () => {
  return (
    <>
      <div className="containerGlobalHome">
        <div className="textProfileHome">
          <div className="textHomeTitle">
            <p>
              Con este portafolio, cada línea de código es una historia que
              muestra cómo transformo ideas en realidades sorprendentes.
            </p>
          </div>
          <div className="textHome">
            <div className="text">
              <p>
                Puedes ver mis proyectos y contribuciones en GitHub, donde cada
                repositorio refleja mi pasión y habilidad como programador
              </p>
            </div>
            <div className="button">
              <Buttons background={"#3DE2A1"} borderRadius={"2px"} />
            </div>
          </div>
        </div>
        <div className="imageProfileHome">
          <div className="image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDL-glbE298VTC9rd0Hz5L4o6Iz8ttsZJncQ&s"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="containerGlobalAboutMe">
        <div className="AboutMeContact">
          <div className="titleAboutMeContact">
            <p>About Me</p>
          </div>
          <div className="linkTo">
            <p onClick={ () => RedirectTo('https://github.com/AleArtolaMazanares')}>Github</p>
            <p onClick={() => RedirectTo('https://app.netlify.com/teams/aleartolamazanares/sites')}>Netifly</p>
            <p onClick={() => RedirectTo('https://www.linkedin.com/in/alejandro-artola-99507528b/')}>Linkeding</p>
            <p onClick={() => RedirectTo('https://www.facebook.com/aleu.prou')}>Facebook</p>
            <p>Instagram</p>
            <p onClick={() => RedirectTo('https://wa.me/87420631?text=')}>Whatssap</p>
          </div>
        </div>
        <div className="aboutMe">
          <div className="linea">
            <hr />
          </div>
          <div className="description">
            <p>
              Soy un programador apasionado que busca siempre la excelencia en
              cada línea de código. Disfruto transformar ideas en soluciones
              innovadoras y funcionales. Mi enfoque se basa en la colaboración y
              el aprendizaje continuo, lo que me permite adaptarme a nuevos
              desafíos y tecnologías con facilidad.
            </p>
          </div>
          <div className="pointsPage">
            <Points text={'Creatividad: Desarrollo soluciones únicas y eficientes.'}/>
            <Points margin={'20px'} text={'Adaptabilidad: Capacidad para aprender y dominar nuevas tecnologías rápidamente.'}/>
            <Points text={'Trabajo en equipo: Fomento un ambiente colaborativo y constructivo.'}/>
          </div>
        </div>
      </div>
      <div className="projectsHome">
        <div className="projectTitle">
          <p>Proyectos</p>
          <hr />
        </div>
        <div className="projectsImage">
          <div className="imageProject">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCDI5HSL2FRBkRjBxT3qxZcIkmgeMlzckpJQ&s" alt="" />
          </div>
          <div className="imageProject">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCDI5HSL2FRBkRjBxT3qxZcIkmgeMlzckpJQ&s" alt="" />
          </div>
          <div className="imageProject">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCDI5HSL2FRBkRjBxT3qxZcIkmgeMlzckpJQ&s" alt="" />
          </div>
          <div className="imageProject">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCDI5HSL2FRBkRjBxT3qxZcIkmgeMlzckpJQ&s" alt="" />
          </div>
          <div className="imageProject">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCDI5HSL2FRBkRjBxT3qxZcIkmgeMlzckpJQ&s" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
