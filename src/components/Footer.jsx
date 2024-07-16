import { motion } from "framer-motion";
import React from "react";

const Footer = () => {
  const telefono = `https://api.whatsapp.com/send/?phone=%2B3865608565&text&type=phone_number&app_absent=0`;

  return (
    <footer className="py-5 text-center text-white">
      <h5>CONTACTO:</h5>
      <div className="d-flex justify-content-center py-3">
        <motion.div
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
        >
          <a
            href="https://www.instagram.com/andres.santamarina/"
            target="_blank"
          >
            {" "}
            <i className="bi bi-instagram m-2 fs-2"></i>
          </a>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
        >
          <a href={telefono} target="_blank">
            {" "}
            <i className="bi bi-whatsapp m-2 fs-2"></i>
          </a>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
        >
          <a
            href="https://www.linkedin.com/in/andr%C3%A9s-eduardo-santamarina/"
            target="_blank"
          >
            {" "}
            <i className="bi bi-linkedin m-2 fs-2"></i>
          </a>
        </motion.div>
      </div>
      <p className="mt-4">Todos los derechos reservados &copy;</p>
    </footer>
  );
};

export default Footer;