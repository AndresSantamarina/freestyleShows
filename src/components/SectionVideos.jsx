import { Col, Container, Row } from "react-bootstrap";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "videojs-youtube";

const SectionVideos = () => {
  const videoRef = useRef(null);
  let player = null;

  useEffect(() => {
    player = videojs(videoRef.current, {
      autoplay: false,
      controls: true,
      loop: true,
      muted: true,
      preload: "auto",
      techOrder: ["youtube"],
      sources: [
        {
          src: `https://www.youtube.com/watch?v=miJed1Gb3iI`,
          type: "video/youtube",
        },
      ],
    });

    return () => {
      if (player !== null) {
        player.dispose();
      }
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 300 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Container>
        <h2 className="text-center mb-5 bt-3 tituloAbout fw-bold">
          CONTRATACIONES
        </h2>
        <p className="text-center">
          POR CONTRATACIONES PARA{" "}
          <span className="fw-bold spanColor">SHOWS</span>,{" "}
          <span className="fw-bold spanColor">EVENTOS PROMOCIONALES</span> O
          PARA{" "}
          <span className="fw-bold spanColor">
            APRENDER A HACER FREESTYLE FÚTBOL
          </span>
          , ME PUEDEN CONTACTAR A TRAVÉS DE MIS REDES SOCIALES, O POR MEDIO DE
          WHATSAPP.
        </p>
        <Row>
          <Col xs={12} className="d-flex justify-content-center my-5">
            {" "}
            <div data-vjs-player>
              <video ref={videoRef} className="video-js" />
            </div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default SectionVideos;
