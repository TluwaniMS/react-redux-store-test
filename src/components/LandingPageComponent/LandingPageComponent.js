import { Link } from "@mui/material";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import MoviesDisplay from "../../displays/MoviesDisplay/MoviesDisplay";
import SuperHeroesDisplay from "../../displays/SuperHeroesDisplay/SuperHeroesDisplay";
import SuperPowersDisplay from "../../displays/SuperPowersDisplay/SuperPowersDisplay";
import "./LandingPageComponent.css";
import ModalFormDisplay from "../../displays/ModalFormDisplay/ModalFormDisplay";
import { ContenType } from "../../enumerators/ContentTypeEnum";

const LandingPageComponent = () => {
  const [open, setOpen] = useState(false);
  const [contentType, setContentType] = useState();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const movies = useSelector((state) => state.movies);
  const superHeroes = useSelector((state) => state.superHeroes);
  const superPowers = useSelector((state) => state.superPowers);

  const displayModal = (typeOfContent) => {
    setContentType(typeOfContent);
    handleOpen();
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4
  };

  return (
    <div>
      <div className="landing-page-section-container">
        <div className="landing-page-section-header">Movies</div>
        <div className="landing-page-sectioned-content-container">
          {movies.map((movie, index) => (
            <Link key={movie._id}>
              <MoviesDisplay movie={movie} index={index} />
            </Link>
          ))}
        </div>
        <div className="landing-page-sectioned-button-container">
          <Button variant="outlined" startIcon={<AddIcon />} onClick={() => displayModal(ContenType.Movie)}>
            Create Movie
          </Button>
        </div>
      </div>
      <div className="landing-page-section-container">
        <div className="landing-page-section-header">Super Heroes</div>
        <div className="landing-page-sectioned-content-container">
          {superHeroes.map((superHero, index) => (
            <Link key={superHero._id}>
              <SuperHeroesDisplay superHero={superHero} index={index} />
            </Link>
          ))}
        </div>
        <div className="landing-page-sectioned-button-container">
          <Button variant="outlined" startIcon={<AddIcon />} onClick={() => displayModal(ContenType.SuperHero)}>
            Create Super Hero
          </Button>
        </div>
      </div>
      <div className="landing-page-section-container">
        <div className="landing-page-section-header">Super Powers</div>
        <div className="landing-page-sectioned-content-container">
          {superPowers.map((superPower, index) => (
            <Link key={superPower._id}>
              <SuperPowersDisplay superPower={superPower} index={index} />
            </Link>
          ))}
        </div>
        <div className="landing-page-sectioned-button-container">
          <Button variant="outlined" startIcon={<AddIcon />} onClick={() => displayModal(ContenType.SuperPower)}>
            Create Super Power
          </Button>
        </div>
      </div>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <ModalFormDisplay contentType={contentType} />
        </Box>
      </Modal>
    </div>
  );
};

export default LandingPageComponent;
