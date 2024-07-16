import { motion } from "framer-motion";
import img3 from "../assets/mixfit4.jpg";

const Banner = () => {
  const telefono = `https://api.whatsapp.com/send/?phone=%2B3865608565&text&type=phone_number&app_absent=0`;
  return (
    <div className="banner-container">
      <img
        src={img3}
        alt="Andrés haciendo freestyle"
        className="background-img"
      />
       <motion.div
          // style={{ background: "black" }}
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1}}
          transition={{ duration: 1 }}
        >
      <div className="overlay">
        <h1 className="display-4">ANDRÉS SANTAMARINA</h1>
        <h2 className="display-3 mt-3">FREESTYLER</h2>
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
              <i className="bi bi-instagram m-2 fs-2 "></i>
            </a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <a href={telefono} target="_blank">
              {" "}
              <i className="bi bi-whatsapp m-2 fs-2 "></i>
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
              <i className="bi bi-linkedin m-2 fs-2 "></i>
            </a>
          </motion.div>
        </div>
      </div>
      </motion.div>
    </div>
  );
};

export default Banner;
