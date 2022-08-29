import React from "react";
import Image3 from "../images/image3.png"

export const About = () => {
  return (
    <div className="m-5 pb-4" id="about">
      <div className='col mx-auto text-center mb-5'>
        <h2>
          Acerca de nosotros
        </h2>
      </div>

      <div className="row">
        <div className="col-12 col-xs-12 col-sm-11 col-md-10 col-xl-10 mx-auto">
          <h4>
            Somos una empresa localizada en Guarenas, Venezuela, liderada por un
            ingeniero civil con más de 40 años de experiencia en planeación y
            contrucción de plantas farmaéeuticas en Venezuela.
          </h4>
          <br />
          <h4>
            Nos dimos cuenta del problema en el mercado de ventanas herméticas
            con doble vidrio; todas son del mismo tamaño, y son difíciles de
            mantener e instalar.
          </h4>
          <br />
          <h4>
            Por ello, creamos una ventana que cumple todas las funciones de la
            original, pero resuelve muchos dolores de cabeza con mejor
            tecnología y tomando en consideración los requerimientos de cada
            empresa.
          </h4>
          <div className="col-xl-6 col-sm-8 mx-auto mt-5">
            <img src={Image3} className="img-fluid"></img>
          </div>
        </div>
      </div>
    </div>
  );
};
