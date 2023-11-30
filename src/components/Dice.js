import React from "react";
import PropTypes from "prop-types";
import "../Dice.css";

const Dice = ({ sides, onRoll }) => {
  const handleClick = () => {
    const randomRoll = Math.floor(Math.random() * sides) + 1;
    onRoll(randomRoll);
  };

  return (
    <div className="dice-container">
      <div className="dice" onClick={handleClick}>
        {<img src=""></img>}
        {sides}-tərəfli zər
      </div>
    </div>
  );
};

Dice.propTypes = {
  sides: PropTypes.number.isRequired,
  onRoll: PropTypes.func.isRequired,
};

export default Dice;
