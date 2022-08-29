import React from "react";

export const Faq = () => {
  return (
    <div className="m-5 pb-4" id="faq">
      <div className='col mx-auto text-center mb-5'>
        <h2>
          Preguntas Frecuentes
        </h2>
      </div>

      <div className="row">
        <div className="col-12 col-xs-12 col-sm-11 col-md-10 col-xl-10 mx-auto">
          <span className="pt-2">
            <ul style={{listStyleType: "none"}} className="m-0 p-0">
              <li className="p-4 shadow">
                <h3>Cuánto cuestan estas ventanas?</h3>
                <hr className="featurette-divider mt-1 mb-2" />
                <h4>
                  Cada empresa tiene necesidades
                  diferentes, por ello no tenemos precios estándares para nuestras
                  ventanas.
                </h4>
              </li>
              <br />
              <li className="p-4 shadow">
                <h3>Cuánto tiempo tardan en fabricar las ventanas?</h3>
                <hr className="featurette-divider mt-1 mb-2" />
                <h4>
                  Depende de la
                  cantidad y de las especificaciones de cada orden, pero es menor al
                  estándar del mercado.
                </h4>
              </li>
              <br />
              <li className="p-4 shadow">
                <h3>Pueden instalar ventanas fuera de Venezuela?</h3>
                <hr className="featurette-divider mt-1 mb-2" />
                <h4>
                  En este momento, solo
                  proporcionamos servicios a compañías dentro de Venezuela.
                </h4>
              </li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
};
