import { Col, Container, Row } from "react-bootstrap";
import CarouselComponent from "./CarouselComponent";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "videojs-youtube";


const About = () => {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);

  useEffect(() => {
    const player1 = videojs(videoRef1.current, {
      controls: true,
      autoplay: false,
      preload: 'auto',
      techOrder: ['youtube'],
      sources: [{
        src: `https://www.youtube.com/watch?v=XZuC_KSM5Cw`,
        type: 'video/youtube'
      }]
    });

    // Video 2: showFutsal
    const player2 = videojs(videoRef2.current, {
        controls: true,
        autoplay: false,
        preload: 'auto',
        techOrder: ['youtube'],
        sources: [{
          src: `https://www.youtube.com/watch?v=MSVsxJ9c1Oo`,
          type: 'video/youtube'
        }]
    });

    // Video 3: showsGrales
    const player3 = videojs(videoRef3.current, {
        controls: true,
        autoplay: false,
        preload: 'auto',
        techOrder: ['youtube'],
        sources: [{
          src: `https://www.youtube.com/watch?v=f9uBfkxgkhA`,
          type: 'video/youtube'
        }]
    });

    // Limpieza al desmontar el componente
    return () => {
      if (player1) {
        player1.dispose(); // Liberar recursos del reproductor 1
      }
      if (player2) {
        player2.dispose(); // Liberar recursos del reproductor 2
      }
      if (player3) {
        player3.dispose(); // Liberar recursos del reproductor 3
      }
    };
  }, []); // Se ejecuta solo una vez al montar el componente

  return (
    <>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 300 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="div-prueba"
        >
          <p className="text-center my-3 presentacion pt-5">
            HOLA! MI NOMBRE ES{" "}
            <span className="fw-bold spanColor">ANDRÉS SANTAMARINA</span>, SOY
            DE LA PROVINCIA DE TUCUMÁN, TENGO 26 AÑOS Y LLEVO PRACTICANDO
            FREESTYLE FÚTBOL DESDE QUE TENÍA 12. <br />A LO LARGO DE MI CARRERA,
            PARTICIPÉ DE DISTINTOS CAMPEONATOS Y TAMBIÉN REALICÉ UNA GRAN
            CANTIDAD DE SHOWS EN DISTINTOS EVENTOS DEPORTIVOS, FESTIVIDADES,
            ETC.
          </p>
        </motion.div>

        <motion.div
          // style={{ background: "black" }}
          initial={{ opacity: 0, y: 300 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <article className="py-5">
            <h2 className="text-center my-5 tituloAbout fw-bold">
              COMPETENCIAS
            </h2>

            <ul className="text-center m-5">
              <li className="list-group-item mt-4">
                <i className="bi bi-trophy-fill iconAbout"></i> EL{" "}
                <span className="fw-bold spanColor">
                  TORNEO TUCUMANO DE FREESTYLE FÚTBOL 2018
                </span>
                , EN LA CIUDAD DE SAN MIGUEL DE TUCUMÁN, EN DONDE CONSEGUÍ SALIR{" "}
                <span className="fw-bold spanColor">CAMPEÓN</span>.
              </li>
              <li className="list-group-item mt-4">
                <i className="bi bi-trophy-fill iconAbout"></i> EL{" "}
                <span className="fw-bold spanColor">
                  TORNEO TUCUMANO DE FREESTYLE FÚTBOL 2019
                </span>
                , EN LA CIUDAD DE RACO, EN DONDE PUDE{" "}
                <span className="fw-bold spanColor">DEFENDER MI TÍTULO</span>.
              </li>
              <li className="list-group-item mt-4">
                <i className="bi bi-check-lg iconAbout"></i>{" "}
                <span className="fw-bold spanColor">
                  RED BULL STREET STYLE 2021
                </span>
                , EN DONDE CONSEGUÍ QUEDAR ENTRE LOS{" "}
                <span className="fw-bold spanColor">
                  8 MEJORES FREESTYLERS A NIVEL NACIONAL
                </span>
                .
              </li>
            </ul>
            <CarouselComponent />
          </article>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 300 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <article className="py-5">
            <h2 className="text-center tituloAbout fw-bold">SHOWS</h2>

            <Row className="my-5">
              <Col className="d-flex align-items-center justify-content-center m-1">
                <p className="text-center textoShow p-3 text-white">
                  EN LA PRESENTACIÓN DE LA CAMISETA DEL{" "}
                  <span className="fw-bold spanTexto">
                    EQUIPO DE FÚTBOL DE CAMIONEROS
                  </span>
                </p>
              </Col>
              <Col className="d-flex align-items-center justify-content-center">
                <div data-vjs-player>
                  <video ref={videoRef1} className="video-js" />
                </div>
              </Col>
            </Row>
            <Row className="my-5">
              <Col className="d-flex align-items-center justify-content-center mb-3">
                <div data-vjs-player>
                  <video ref={videoRef2} className="video-js" />
                </div>
              </Col>
              <Col className="d-flex align-items-center justify-content-center m-1">
                <p className="text-center textoShow p-3 text-white">
                  EN EL PARTIDO AMISTOSO DE{" "}
                  <span className="fw-bold spanTexto">
                    LA SELECCIÓN ARGENTINA DE FUTSAL
                  </span>{" "}
                  EN SU GIRA, LUEGO DE SALIR CAMPEONES DEL MUNDO
                </p>
              </Col>
            </Row>
            <Row className="my-5">
              <Col className="d-flex align-items-center justify-content-center m-1">
                <p className="text-center textoShow p-3 text-white">
                  EN DISTINTOS{" "}
                  <span className="fw-bold spanTexto">CUMPLEAÑOS</span>,{" "}
                  <span className="fw-bold spanTexto">FESTIVIDADES</span>,{" "}
                  <span className="fw-bold spanTexto">EVENTOS ESCOLARES</span>,
                  ETC
                </p>
              </Col>
              <Col className="d-flex align-items-center justify-content-center">
                <div data-vjs-player>
                  <video ref={videoRef3} className="video-js" />
                </div>
              </Col>
            </Row>
          </article>
        </motion.div>
      </Container>
    </>
  );
};

export default About;