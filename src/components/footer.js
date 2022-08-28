import React from "react";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export const Footer = () => {
  return (
    <MDBFooter style={{ backgroundColor: "#2b2c2e" }} className="text-white">
      <MDBContainer className="p-4">
        <MDBRow>
          <MDBCol lg="6" md="12" className="mb-4 mb-md-0">
            <HashLink to="/home#home" className="text-decoration-none text-white">
              <h3>WindowArtisansVE</h3>
            </HashLink>
            <p>
              Revolucionando el mercado suramericano de ventanas herméticas con
              doble vidrio.
            </p>
          </MDBCol>

          <MDBCol lg="2" md="4" sm="4" className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-1" style={{ marginBottom: "0px" }}>
              Compañía
            </h5>

            <ul className="list-unstyled mb-1">
              <li>
                <HashLink to="/home#home" className="text-decoration-none text-white">
                  Página principal
                </HashLink>
              </li>
              <li>
                <Link to="/about" className="text-decoration-none text-white">
                  Conócenos
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-decoration-none text-white">
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg="2" md="4" sm="4" className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-1">Ventanas</h5>

            <ul className="list-unstyled mb-1">
              <li>
                <HashLink to="/home#diferencias" className="text-decoration-none text-white">
                  Características
                </HashLink>
              </li>
              <li>
                <HashLink to="/home#ventajas" className="text-decoration-none text-white">
                  Ventajas
                </HashLink>
              </li>
              <li>
                <HashLink to="/home#proceso" className="text-decoration-none text-white">
                  Proceso
                </HashLink>
              </li>
              <li>
                <Link to="/contact" className="text-decoration-none text-white">
                  Contáctanos
                </Link>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg="2" md="4" sm="4" className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-1">Legal</h5>

            <ul className="list-unstyled">
              <li>
                <Link to="/privacy" className="text-decoration-none text-white">
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link to="/legal" className="text-decoration-none text-white">
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className="text-center p-3" style={{ backgroundColor: "#1c1d1f" }}>
        © 2022 Copyright:
        <span className="text-white ps-2">WindowArtisansVE</span>
      </div>
    </MDBFooter>
  );
};
