import React, { useRef, useState, setShow } from "react";
import emailjs from "emailjs-com";
import { Modal, Button } from "react-bootstrap";

export const ContactForm = () => {
    const form = useRef();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "gmail",
                "template_portfolio",
                form.current,
                "user_40gT501S2nuqnbm1EYjzt"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                },
                form.current.reset()
            );
    };

    return (
        <form className="col-12 col-xs-12 col-sm-11 col-md-10 col-xl-10 mx-auto" ref={form} onSubmit={sendEmail}>
            <div className="mb-3 fs-4">
                <label htmlFor="exampleFormControlInput1" className="form-label fs-3">
                    Nombre
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Escribe tu nombre aquí"
                />
            </div>
            <div className="mb-3 fs-4">
                <label htmlFor="exampleFormControlInput1" className="form-label fs-3">
                Correo electrónico
                </label>
                <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput2"
                    placeholder="Escribe tu correo aquí"
                />
            </div>
            <div className="mb-4 fs-4">
                <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label fs-3"
                >
                    Mensaje
                </label>
                <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="4"
                    placeholder="Escribe tu mensaje aquí"
                ></textarea>
            </div>

            <button
                type="submit"
                className="btn btn-dark col-xs-3 col-3 col-md-2 col-lg-2 col-xl-2 p-2 fs-4"
                onClick={handleShow}
            >
                Enviar
            </button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
                className="text-center"
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h2 className="p-2">
                        ¡Gracias por tu mensaje!
                        </h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3 className="p-3">
                    Responderemos tu mensaje lo más pronto posible
                    </h3>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" className="p-2 px-3" onClick={handleClose}>
                        <h4 className="m-0">Cerrar</h4>
                    </Button>
                </Modal.Footer>
            </Modal>
        </form>
    );
};