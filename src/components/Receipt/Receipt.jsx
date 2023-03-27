import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import hambuguer from "../../assets/hamgurgesa.png";
import "./stylesRecets.scss";
import { AiOutlineCheck } from "react-icons/ai";
import { motion } from "framer-motion";

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
                                <img
                                    src={hambuguer}
                                    alt=""
                                    className="w-full"
                                />
                            </div>
                            <figcaption className="secfig2">
                                <h2
                                    className="font-Delicious "
                                    key={key}
                                >{`Burger ${key + 1} x $ ${price}`}</h2>
                                <p className="font-Delicious ">
                                    Pan esponjoso y ligeramente dulce,una
                                    porción de carne picada, lechuga
                                    crujiente,tomate jugoso y dulce,loncha de
                                    queso fundido
                                </p>
                            </figcaption>
                        </figure>
                    </motion.div>
                ))}
            </section>

            <section className="secButtons">
                <h1 className="font-Delicious ">
                    Total:
                    <span>{` $${total}`}</span>
                </h1>
                <article>
                    <Link to="/">
                        <a
                            href="#_"
                            className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-[#9d0208] transition duration-300 ease-out border-2 border-[#e85d04] rounded-full shadow-md group"
                            onClick={() => this.handleConfirm()}
                        >
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#ffaf40] group-hover:translate-x-0 ease">
                                <AiOutlineCheck className="text-2xl font-bold" />
                            </span>
                            <span className="absolute font-Delicious flex items-center justify-center w-full h-full text-[#9d0208] transition-all duration-300 transform group-hover:translate-x-full ease">
                                Return to builder
                            </span>
                            <span className="relative invisible">
                                Button Text
                            </span>
                        </a>
                    </Link>
                    <a
                        href="#_"
                        class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-[#9d0208] transition duration-300 ease-out border-2 border-[#e85d04] rounded-full shadow-md group"
                        onClick={props.reset}
                    >
                        <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#ff4d4d] group-hover:translate-x-0 ease">
                            <svg
                                class="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                ></path>
                            </svg>
                        </span>
                        <span class="absolute font-Delicious flex items-center justify-center w-full h-full text-[#9d0208] transition-all duration-300 transform group-hover:translate-x-full ease">
                            Reset
                        </span>
                        <span class="relative invisible">Button Text</span>
                    </a>
                </article>
            </section>
        </div>
    );
};

const mapStateToProps = (state) => ({
    burgersArray: state,
});

export default connect(mapStateToProps, { reset })(Receipt);
