import React from "react";
import "../styles/home.css"
import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import { StepperComponent } from "../components/stepper";
import Image3 from "../images/image3.png"

export const Home = () => {
    return (
        <div className="m-0 p-0">
            {/*Hero Empieza*/}
            <div
                className="p-5 text-start bg-image mb-5 myBg" id="home"
            >
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-xs-12 col-sm-11 col-md-10 col-xl-10 text-white text-center">
                        <h1 className="mb-3">
                            Ventanas con doble vidrio herméticas, hechas a medida para tu
                            negocio
                        </h1>
                        <h4 className="mb-3">
                            WindowArtisansVE trae una solución al problema de ventanas con
                            doble vidrio de tamaño estándar, difíciles de mantener y de
                            instalar.
                        </h4>
                        <a className="btn btn-dark text-white p-3 fs-5 mt-3" href="#diferencias" role="button">Continuar leyendo</a>
                    </div>
                </div>
            </div>
            {/*Hero Termina*/}

            {/* Diferencias Empieza */}
            <div className="m-5" id="diferencias">
                <div className="row d-flex justify-content-center flex-column">
                    {/* Header */}
                    <div className='col text-center mb-4'>
                        <h2>
                            ¿Qué nos hace diferentes?
                        </h2>
                    </div>

                    {/* Elementos */}
                    <div className="col">
                        <MDBContainer>
                            <MDBRow className="d-inline-flex justify-content-around">
                                <MDBCol
                                    className="m-2 p-4 shadow"
                                    sm="12"
                                    md="5"
                                    lg="5"
                                    xl="5"
                                >
                                    <h4>Hechas a medida</h4>
                                    <hr className="featurette-divider mt-1 mb-2" />
                                    <h5>
                                        Dimensiones según los requerimientos del cliente, otros
                                        proveedores tienen tamaños estándar.
                                    </h5>
                                </MDBCol>

                                <MDBCol
                                    className="m-2 p-4 shadow"
                                    sm="12"
                                    md="5"
                                    lg="5"
                                    xl="5"
                                >
                                    <h4>Instalación flexible</h4>
                                    <hr className="featurette-divider mt-1 mb-2" />
                                    <h5>
                                        Instalación en cualquier tipo de pared, tabiquería, y/o
                                        espesor.
                                    </h5>
                                </MDBCol>

                                <MDBCol
                                    className="m-2 p-4 shadow"
                                    sm="12"
                                    md="5"
                                    lg="5"
                                    xl="5"
                                >
                                    <h4>Mantenimiento</h4>
                                    <hr className="featurette-divider mt-1 mb-2" />
                                    <h5>
                                        Muy fácil mantenimiento, aplicando experiencias ya probadas en
                                        Salas Blancas.
                                    </h5>
                                </MDBCol>

                                <MDBCol
                                    className="m-2 p-4 shadow"
                                    sm="12"
                                    md="5"
                                    lg="5"
                                    xl="5"
                                >
                                    <h4>Visor incorporado</h4>
                                    <hr className="featurette-divider mt-1 mb-2" />
                                    <h5>
                                        Visor incorporado en su marco para apreciar la saturación de
                                        las sales y proceder a su sustitución. Estas sales son
                                        reutilizables.
                                    </h5>
                                </MDBCol>

                                <MDBCol
                                    className="m-2 p-4 shadow"
                                    sm="12"
                                    md="5"
                                    lg="5"
                                    xl="5"
                                >
                                    <h4>Substitución de sales</h4>
                                    <hr className="featurette-divider mt-1 mb-2" />
                                    <h5>
                                        El marco de la ventana viene con facilidades para sustituir
                                        las sales, fácilmente.
                                    </h5>
                                </MDBCol>

                                <MDBCol
                                    className="m-2 p-4 shadow"
                                    sm="12"
                                    md="5"
                                    lg="5"
                                    xl="5"
                                >
                                    <h4>Generación de vacío</h4>
                                    <hr className="featurette-divider mt-1 mb-2" />
                                    <h5>
                                        Se incluye la generación de vacío (5 PSI) en el interior del
                                        resto del marco.
                                    </h5>
                                </MDBCol>

                                <MDBCol
                                    className="m-2 p-4 shadow"
                                    sm="12"
                                    md="5"
                                    lg="5"
                                    xl="5"
                                >
                                    <h4>Sales Higroscópicas</h4>
                                    <hr className="featurette-divider mt-1 mb-2" />
                                    <h5>
                                        Cámara de aire deshidratada entre los vidrios con Sales
                                        Higroscópicas absorbente de la humedad. Otros proveedores usan
                                        Argón.
                                    </h5>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </div>
                </div>
            </div>
            {/* Diferencias Termina */}

            {/* Ventajas Empieza */}
            <div className="m-5 py-3" id="ventajas">
                <div className="row d-flex justify-content-center flex-column">
                    {/* Header */}
                    <div className='col text-center mb-4'>
                        <h2>
                            ¿Que ventajas ofrecemos?
                        </h2>
                    </div>

                    {/* Elementos */}
                    <div className="col">
                        <MDBContainer>
                            <MDBRow className="d-inline-flex justify-content-around">
                                <MDBCol
                                    className="m-2 p-4 shadow"
                                    sm="12"
                                    md="5"
                                    lg="5"
                                    xl="5"
                                >
                                    <h4>Materiales locales</h4>
                                    <hr className="featurette-divider mt-1 mb-2" />
                                    <h5>
                                        Fabricación totalmente nacional, con la mayoría de los
                                        insumos locales.
                                    </h5>
                                </MDBCol>

                                <MDBCol
                                    className="m-2 p-4 shadow"
                                    sm="12"
                                    md="5"
                                    lg="5"
                                    xl="5"
                                >
                                    <h4>Proveedor de sales</h4>
                                    <hr className="featurette-divider mt-1 mb-2" />
                                    <h5>
                                        Se cuenta con un proveedor externo de las Sales
                                        Higroscópicas.
                                    </h5>
                                </MDBCol>

                                <MDBCol
                                    className="m-2 p-4 shadow"
                                    sm="12"
                                    md="5"
                                    lg="5"
                                    xl="5"
                                >
                                    <h4>Soldadura del marco</h4>
                                    <hr className="featurette-divider mt-1 mb-2" />
                                    <h5>
                                        La soldadura de aluminio utilizada en el marco, es de ultima
                                        tecnologia.
                                    </h5>
                                </MDBCol>

                                <MDBCol
                                    className="m-2 p-4 shadow"
                                    sm="12"
                                    md="5"
                                    lg="5"
                                    xl="5"
                                >
                                    <h4>Rapida disponibilidad</h4>
                                    <hr className="featurette-divider mt-1 mb-2" />
                                    <h5>
                                        El proceso de fabricación facilita la disponibilidad en el
                                        corto tiempo de ventanas adicionales con igual calidad.
                                    </h5>
                                </MDBCol>

                                <MDBCol
                                    className="m-2 p-4 shadow"
                                    sm="12"
                                    md="5"
                                    lg="5"
                                    xl="5"
                                >
                                    <h4>Proveemos el marco</h4>
                                    <hr className="featurette-divider mt-1 mb-2" />
                                    <h5>
                                        Suministramos el marco metálico que ira anclado en la obra
                                        civil ejecutado por el cliente. Con ello el montaje de la
                                        ventana es realmente rápido en Mamposteria.
                                    </h5>
                                </MDBCol>

                                <MDBCol
                                    className="m-2 p-4 shadow"
                                    sm="12"
                                    md="5"
                                    lg="5"
                                    xl="5"
                                >
                                    <h4>Sello de competencia</h4>
                                    <hr className="featurette-divider mt-1 mb-2" />
                                    <h5>
                                        El sello de alta competencia de los vidrios (Hermeticidad)
                                        se realiza con una cinta doble contacto igual al utilizado
                                        por proveedores externos.
                                    </h5>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </div>
                </div>
            </div>
            {/* Ventajas Termina */}

            {/* Proceso Empieza */}
            <div className="m-4 py-3" id="proceso">
                <div className="row d-flex justify-content-center flex-column">
                    {/* Header */}
                    <div className='col text-center mb-4'>
                        <h2>
                            ¿Cuál es el proceso?
                        </h2>
                    </div>

                    {/* Elementos */}
                    <div className="col d-flex justify-content-center">
                        <MDBRow className="d-inline-flex justify-content-center">
                            <MDBCol
                                className="mb-5 mx-xs-2 px-sm-4"
                                sm="12"
                                md="5"
                                lg="5"
                                xl="4"
                            >
                                <StepperComponent />
                            </MDBCol>

                            <MDBCol
                                id="contacto"
                                className="text-center"
                                xs="9"
                                sm="10"
                                md="5"
                                lg="5"
                                xl="4"
                            >
                                <h4>Contáctanos</h4>
                                <hr className="featurette-divider mt-1 mb-2" />
                                <h5 className="text-start mb-4">Mandanos un correo a <strong>windowartisansve@gmail.com</strong></h5>
                                <div className="col-xl-6 col-sm-8 mx-auto">
                                    <img src={Image3} className="img-fluid"></img>
                                    <h6 className="text-start mt-2 mb-4">Representación 3D de nuestras ventanas</h6>
                                </div>
                            </MDBCol>
                        </MDBRow>

                    </div>
                </div>
            </div>
            {/* Proceso Termina */}
        </div>
    );
};
