import React from "react";
import Image3 from "../images/image3.png"

export const Services = () => {
  return (
    <div className="m-5 pb-4">
      <div className='col mx-auto text-center mb-5'>
        <h2>
          Servicios
        </h2>
      </div>

      <div className="row">
        <div className="col-12 col-xs-12 col-sm-11 col-md-10 col-xl-10 mx-auto">
          <h4>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?"
          </h4>
        </div>
      </div>

      <div className="row mt-5 pt-3">
        <div className="col-12 col-xs-12 col-sm-11 col-md-10 col-xl-10 mx-auto">
          <div className='row justify-content-center flex-wrap'>
            <div className='col-xs-12 col-sm-11 col-md-8 col-lg-5 col-xl-5 m-3'>
              <div className='mx-auto'>
                <div className='image-container d-flex align-items-center justify-content-center h-100 w-100'>
                  <img className="img-fluid image" src={Image3} alt="Thumbnail of the roadbros project" />
                </div>
              </div>
            </div>
            <div className='col-xs-12 col-sm-11 col-md-8 col-lg-5 col-xl-5 m-3'>
              <div className='mx-auto'>
                <div className='image-container d-flex align-items-center justify-content-center h-100 w-100'>
                  <img className="img-fluid image" src={Image3} />
                </div>
              </div>
            </div>
            <div className='col-xs-12 col-sm-11 col-md-8 col-lg-5 col-xl-5 m-3'>
              <div className='mx-auto'>
                <div className='image-container d-flex align-items-center justify-content-center h-100 w-100'>
                  <img className="img-fluid image" src={Image3} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
