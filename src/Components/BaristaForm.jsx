import React, {Component, useState} from "react";
const BaristaForm = () => {

    const onNewDrink = () => {
    
    };
    
    const onCheckAnswer = () => {
      
    };
  return (
    <div>
        <form >
            <h2>Hi, I'd like to order a:</h2>
        </form>

        <button type="submit" className="button submit" onClick={onCheckAnswer}>
            Check Answer
        </button>

        <button
            type="new-drink-button"
            className="button newdrink"
            onClick={onNewDrink}>
            New Drink
        </button>
        </div>
  );
  
};

export default BaristaForm;