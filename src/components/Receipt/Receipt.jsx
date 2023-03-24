import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import hambuguer from "../../assets/hamgurgesa.png";
import "./stylesRecets.scss";
import { motion } from "framer-motion";

// Actions
const reset = () => ({
  type: "reset",
});

const Receipt = (props) => {
  const total = props.burgersArray.reduce((sum, price) => price + sum, 0);

  return (
    <div className="secReceipt">
      <section className="secBurgers">
        {props.burgersArray.map((price, key) => (
          <motion.div
            whileHover={{ translateY: -10 }}
            whileTap={{ scale: 0.9 }}
          >
            <figure key={key}>
              <div className="secfig1">
                <img src={hambuguer} alt="" className="w-full" />
              </div>
              <figcaption className="secfig2">
                <h2 key={key}>{`Burger ${key + 1} x $ ${price}`}</h2>
                <p>
                  Pan esponjoso y ligeramente dulce,una porción de carne picada,
                  lechuga crujiente,tomate jugoso y dulce,loncha de queso
                  fundido
                </p>
              </figcaption>
            </figure>
          </motion.div>
        ))}
      </section>

      <section className="secButtons">
        <h1>
          Total:
          <span>{` $${total}`}</span>
        </h1>
        <article>
          <Link to="/">
            <div className="btnBack ">Return to builder</div>
          </Link>
          <div className="btnReset" onClick={props.reset}>
            Reset
          </div>
        </article>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => ({
  burgersArray: state,
});

export default connect(mapStateToProps, { reset })(Receipt);
