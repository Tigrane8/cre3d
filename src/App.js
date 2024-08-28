import React, { useState } from "react";
import "./App.css";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Card } from "./components/cards.js";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { categories } from "./constants";

function App() {
  const [categoryData, setCategoryData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (category) => {
    console.log(category);
    setCategoryData(category);
    setIsModalOpen(!isModalOpen);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    boxShadow: 24,
    p: 4,
    overflow: "scroll",
    height: "85%",
    width: "85%",
    overflow: "scroll",
    maxHeight: "100vh",
  };

  return (
    <div className="App">
      <div className="titleWrapper">
        <div className="title">Jewelry CAD Modeling and Design Company</div>
      </div>

      <div className="biowrapper">
        <div className="bio">
          Welcome to our profile! Driven by creativity and fueled by experience,
          we bring your concepts to life using cutting-edge software including
          Rhinoceros, Matrix, Zbrush, KeyShot and Blender. With meticulous
          attention to detail, we ensure that each project reflects our clients'
          unique vision. From initial sketches to final renders, your
          satisfaction is our top priority. Let's collaborate and make your
          dreams come true.
        </div>
      </div>

      <div className="categories">
        {categories.map((elem) => {
          console.log(elem.name);
          return (
            <Card
              key={elem.name}
              text={elem.name}
              url={elem.thubnail}
              openModal={() => openModal(elem)}
            />
          );
        })}
      </div>

      <Modal
        open={isModalOpen}
        onClose={openModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            className="category_text"
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            {categoryData.name}
          </Typography>
          {categoryData?.images?.length
            ? categoryData.images.map((elem, index) => (
                <div className="modal_wrapper" key={`${elem.name}${index}`}>
                  <img
                    className="modal_image"
                    src={elem}
                    alt={`image_${index}`}
                  />
                </div>
              ))
            : null}
        </Box>
      </Modal>

      <div className="contacts">
        <div className="contacts_text">Contacts</div>

        <div className="contacts_info">
          <div className="contacts_line">
            <WhatsAppIcon />
            <div className="info">+374 98 99 28 09</div>
          </div>
          <div className="contacts_line">
            <EmailIcon />
            <div className="info">cre3d.company@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
