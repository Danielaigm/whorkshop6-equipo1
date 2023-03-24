import React from "react";
import meat from "../../assets/carne.png";
import salad from "../../assets/lechuga.png";
import cheese from "../../assets/queso.png";
import bacon from "../../assets/tocino.png";
import { motion } from "framer-motion";
import "./stylesControlMenu.scss";

const ControlPanel = (props) => (
  <div className="container ">
    <div className="secButtonsMenu">
      <div>
        <motion.figure
          whileTap={{ rotate: [0, -50, 50] }}
          transition={{ type: "spring", stiffness: 500 }}
        >
          <img
            onClick={() => {
              props.onAdd("meat");
            }}
            className="w-24 h-24 cursor-pointer"
            src={meat}
            alt="meat"
          />
        </motion.figure>
        <p className="font-Delicious font-bold text-xl">Meat</p>
      </div>

      <div>
        <motion.figure
          whileTap={{ rotate: [0, -50, 50] }}
          transition={{ type: "spring", stiffness: 500 }}
        >
          <img
            onClick={() => {
              props.onAdd("salad");
            }}
            className="w-24 h-24 cursor-pointer"
            src={salad}
            alt="salad"
          ></img>
        </motion.figure>
        <p className="font-Delicious font-bold text-xl">Salad</p>
      </div>

      <div>
        <motion.figure
          whileTap={{ rotate: [0, -50, 50] }}
          transition={{ type: "spring", stiffness: 500 }}
        >
          <img
            onClick={() => {
              props.onAdd("cheese");
            }}
            className="w-24 h-24 cursor-pointer"
            src={cheese}
            alt="cheese"
          ></img>
        </motion.figure>
        <p className="font-Delicious font-bold text-xl"> Cheese</p>
      </div>
      <div>
        <motion.figure
          whileTap={{ rotate: [0, -50, 50] }}
          transition={{ type: "spring", stiffness: 500 }}
        >
          <img
            onClick={() => {
              props.onAdd("bacon");
            }}
            className="w-24 h-24 cursor-pointer"
            src={bacon}
            alt="bacon"
          ></img>
        </motion.figure>
        <p className="font-Delicious font-bold text-xl">Bacon</p>
      </div>
    </div>
  </div>
);

export default ControlPanel;
