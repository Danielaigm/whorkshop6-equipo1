import React, { Component } from "react";
import Burger from "../Burger/Burger";
import ControlPanel from "../ControlPanel/ControlPanel";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import { Notify } from "../../services/toastify";
import { motion } from "framer-motion";

// Actions
const confirmBurger = (price) => ({
  type: "addBurger",
  price,
});

/**
 * Ingredients: ["bacon", "salad", "cheese", "meat"]
 */

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
        Notify("Agregaste una carne a 🥩 tu hamburguesa", "#FDA7DF", "#ED4C67");
        break;
      case "salad":
        Notify(
          "Agregaste una lechuga 🥬 a tu hamburguesa",
          "#A3CB38",
          "#009432"
        );
        break;
      case "cheese":
        Notify("Agregaste un queso 🧀 a tu hamburguesa", "#FFC312", "#F79F1F");
        break;
      default:
        Notify("Agregaste un tocino 🥓 a tu hamburguesa", "#EA2027", "#EE5A24");
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
      confirmButtonColor: "#FFC312",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Tengo hambrita",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Que la disfrutes!",
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
      <motion.div>
        <div className="container">
          <ControlPanel
            onAdd={(x) => {
              this.addIngredient(x);
            }}
          />
          <h3># Burgers added: {this.props.burgersArray.length}</h3>
          <h2>
            Burger {this.props.burgersArray.length + 1} : $ {this.getPrice()}
          </h2>
          <div className="button" onClick={() => this.handleConfirm()}>
            Confirm
          </div>
          <Link to="/receipt">
            <div className="button">See receipt</div>
          </Link>
          <div className="builder">
            <Burger
              ingredients={this.state.ingredients}
              onIngredientClick={(index) => this.removeIngredient(index)}
            />
          </div>
        </div>
      </motion.div>
    );
  }
}

const mapStateToProps = (state) => ({
  burgersArray: state,
});

export default connect(mapStateToProps, { confirmBurger })(Builder);
