import React, { Component } from "react";
import Burger from "../Burger/Burger";
import ControlPanel from "../ControlPanel/ControlPanel";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import { Notify } from "../../services/toastify";
import { AiOutlineCheck } from "react-icons/ai";
import { motion } from "framer-motion";

// Actions
const confirmBurger = (price) => ({
    type: "addBurger",
    price,
});

const prices = {
    bacon: 10,
    salad: 2,
    cheese: 5,
    meat: 20,
};

class Builder extends Component {
    state = {
        ingredients: [],
    };

    getPrice = () => {
        const pricesArray = this.state.ingredients.map((ingredient) => {
            return prices[ingredient];
        });
        const price = pricesArray.reduce((ant, act) => {
            return ant + act;
        }, 0);
        return price;
    };

    addIngredient = (idIngrediente) => {
        const newIngredients = this.state.ingredients.slice();
        newIngredients.push(idIngrediente);
        this.setState({ ingredients: newIngredients });
        console.log(idIngrediente);
        switch (idIngrediente) {
            case "meat":
                Notify(
                    "Agregaste una carne a 🥩 tu hamburguesa",
                    "#FDA7DF",
                    "#ED4C67"
                );
                break;
            case "salad":
                Notify(
                    "Agregaste una lechuga 🥬 a tu hamburguesa",
                    "#A3CB38",
                    "#009432"
                );
                break;
            case "cheese":
                Notify(
                    "Agregaste un queso 🧀 a tu hamburguesa",
                    "#FFC312",
                    "#F79F1F"
                );
                break;
            default:
                Notify(
                    "Agregaste un tocino 🥓 a tu hamburguesa",
                    "#EA2027",
                    "#EE5A24"
                );
                break;
        }
    };

    removeIngredient = (index) => {
        console.log(index);
        const newIngredients = this.state.ingredients.slice();
        newIngredients.splice(index, 1);
        this.setState({ ingredients: newIngredients });
    };

    handleConfirm = () => {
        Swal.fire({
            title: "Te encuentras completamente seguro?",
            text: "De querer realizar este pedido",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, Tengo hambrita",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    "Deleted!",
                    "Su hamburguesa a sido creada exitosamente",
                    "success"
                );
                this.props.confirmBurger(this.getPrice());
                this.setState({ ingredients: [] });
            }
        });
    };

    render() {
        return (
            <>
                <div className="flex flex-col items-center justify-center">
                    <ControlPanel
                        onAdd={(x) => {
                            this.addIngredient(x);
                        }}
                    />
                    <div className=" border-2">
                        <h3>Burgers added: {this.props.burgersArray.length}</h3>
                        <h2>
                            Burger {this.props.burgersArray.length + 1} : ${" "}
                            {this.getPrice()}
                        </h2>
                    </div>
                    <div className=" flex  w-[500px] justify-between py-3">
                        <a
                            href="#_"
                            className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-[#9d0208] transition duration-300 ease-out border-2 border-[#e85d04] rounded-full shadow-md group"
                            onClick={() => this.handleConfirm()}
                        >
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#ffaf40] group-hover:translate-x-0 ease">
                                <AiOutlineCheck className="text-2xl font-bold" />
                            </span>
                            <span className="absolute flex items-center justify-center w-full h-full text-[#9d0208] transition-all duration-300 transform group-hover:translate-x-full ease">
                                Confirm
                            </span>
                            <span className="relative invisible">
                                Button Text
                            </span>
                        </a>

                        <Link to="/receipt">
                            <a
                                href="#_"
                                class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-[#9d0208] transition duration-300 ease-out border-2 border-[#e85d04] rounded-full shadow-md group"
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
                                <span class="absolute flex items-center justify-center w-full h-full text-[#9d0208] transition-all duration-300 transform group-hover:translate-x-full ease">
                                    See receipt
                                </span>
                                <span class="relative invisible">
                                    Button Text
                                </span>
                            </a>
                        </Link>
                    </div>
                    <div className="builder">
                        <Burger
                            ingredients={this.state.ingredients}
                            onIngredientClick={(index) =>
                                this.removeIngredient(index)
                            }
                        />
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    burgersArray: state,
});

export default connect(mapStateToProps, { confirmBurger })(Builder);
