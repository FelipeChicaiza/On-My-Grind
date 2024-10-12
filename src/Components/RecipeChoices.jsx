import React, { Component, useEffect, useState } from "react";

const RecipeChoices = ({ handleChange, label, choices, checked }) => {
    return (
        <div>
            <div className="radio-buttons">
                {choices &&
                    choices.map((choice) => (
                        <li key={choice}>
                            <input 
                            id={choice}
                            value={choice}
                            name={label}
                            type="radio"
                            onChange={handleChange}
                            checked={checked === choice}
                        />
                        //this is the reason why my input was not diplaying the value
                        {choice}
                    </li>
                ))}
            </div>
        </div>
    );
};

export default RecipeChoices;