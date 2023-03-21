import React from "react";

import { BsGithub } from "react-icons/bs";
import { IoOpenOutline } from "react-icons/io5";
import mySql from "../Assets/mysql.png";
import react from "../Assets/react.png";
import redux from "../Assets/redux.png";
import node from "../Assets/node.svg";
import express from "../Assets/express.svg";
import sass from "../Assets/sass.png";

// Websites screenshots
import food from "../Assets/ohmyfood.webp";
import groupomania from "../Assets/groupomania.webp";
import piiquant from "../Assets/piiquante.png";

const CardProject = () => {
  return (
    <div class="card wrapper overflow-auto overflow-x-hidden overflow-y-auto">
      <h2 className="text-3xl text-white font-semibold text-center">
        Mes projets
      </h2>
      <div class="formgrid grid">
        <div class="project1 col">
          <img src={food} alt="screenshot OhMyFood background" />
          <div className="foreground text-lg text-white line-height-3">
            <p>
              Projet ohmyfood - Dynamisez une page web avec des animations CSS.
            </p>
          </div>
        </div>
        <div class="field col">
          <label for="lastname2">Lastname</label>
          <input
            id="lastname2"
            type="text"
            class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default CardProject;
