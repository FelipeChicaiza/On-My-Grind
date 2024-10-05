import React, {Component, useState} from "react";
import RecipeChoices from "./RecipeChoices";
import drinksJson from "../../drinks.json";

const BaristaForm = () => {
    const [inputs, setInputs] = useState({
        'temperature': '',
        'milk': '',
        'syrup': '',
        'blended': '',
    });

    const ingredients ={
        'temperature': ['hot', 'lukewarm', 'cold'],
        'syrup': ['mocha','vanilla', 'toffee', 'maple', 'caramel', 'other', 'none'],
        'milk': ['cow', 'oat', 'goat', 'almond', 'none'],
        'blended': ['yes','turbo', 'no']
    }

    const [currentDrink, setCurrentDrink] = useState('');
    const [trueRecipe, setTrueRecipe] = useState({});

    const [correct_temp, setCheckedTemperature] = useState('');
    const [correct_syrup, setCheckedSyrup] = useState('');
    const [correct_milk, setCheckedMilk] = useState('');
    const [correct_blended, setCheckedBlended] = useState('');
    
    const onCheckAnswer = () => {
        if (trueRecipe.temp != inputs['temperature']){
            setCheckedTemperature('wrong');
        } else {
            setCheckedTemperature("correct");
        }
          setCheckedSyrup(prevState => {
            return trueRecipe.syrup != inputs['syrup'] ? 'wrong' : 'correct';
        })

        setCheckedMilk(prevState => {
            return trueRecipe.milk != inputs['milk'] ? 'wrong' : 'correct';
        })

        setCheckedBlended(prevState => {
            return trueRecipe.blended != inputs['blended'] ? 'wrong' : 'correct';
        })
    };

    const getNextDrink = () => {
        let randomDrinkIndex = Math.floor(Math.random() * (drinksJson.drinks.length));

        setCurrentDrink(drinksJson.drinks[randomDrinkIndex].name);
        setTrueRecipe(drinksJson.drinks[randomDrinkIndex].ingredients);
    }

    const onNewDrink = () => {
        setInputs({
            'temperature': '',
            'milk': '',
            'syrup': '',
            'blended': '' });
            
          getNextDrink();

          setCheckedTemperature('');
          setCheckedSyrup('');
          setCheckedMilk('');
          setCheckedBlended('');
    };

    //capitalizing all the letters in the drink name
    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    


  return (
    <div className="App">
        <div className="container">
        <h2>Hi, I'd like to order a:</h2>
        </div>
        <div className="drink-container">
            <h2 className="mini-header">{capitalize(currentDrink)}</h2>
            <button
                type="new-drink-button"
                className="button newdrink"
                onClick={onNewDrink}
            >
                🔄
            </button>
        </div>

        <form className="container">
            <div className="mini-container">
            <h3>Temperature</h3>
            <div className="answer-space" id={correct_temp}>
                {inputs["temperature"]} 
            </div>
                <RecipeChoices
                    handleChange={(e) => setInputs((prevState) => ({
                        ...prevState,
                        [e.target.name]: e.target.value,
                    }))}
                    label="temperature"
                    choices={ingredients["temperature"]}
                    checked={inputs["temperature"]}
                
                />
            </div>

            <div className="mini-container">
            <h3>Milk</h3>
            <div className="answer-space" id={correct_milk}>
                {inputs["milk"]}
            </div>
            <RecipeChoices
                handleChange={(e) => setInputs((prevState) => ({
                    ...prevState,
                    [e.target.name]: e.target.value,
                }))}
                label="milk"
                choices={ingredients["milk"]}
                checked={inputs["milk"]}
            />
            </div>

            <div className="mini-container">
                <h3>Syrup</h3>
                <div className="answer-space" id={correct_syrup}>
                    {inputs["syrup"]}
                </div>
                <RecipeChoices
                    handleChange={(e) => setInputs((prevState) => ({
                        ...prevState,
                        [e.target.name]: e.target.value,
                    }))}
                    label="syrup"
                    choices={ingredients["syrup"]}
                    checked={inputs["syrup"]}
                />
                </div>

                <div className="mini-container">
                <h3>Blended</h3>
                <div className="answer-space" id={correct_blended}>
                    {inputs["blended"]}
                </div>
                <RecipeChoices
                    handleChange={(e) => setInputs((prevState) => ({
                        ...prevState,
                        [e.target.name]: e.target.value,
                    }))}
                    label="blended"
                    choices={ingredients["blended"]}
                    checked={inputs["blended"]}
                />
            </div>
        </form>

        <div className="container">
            <button
                type="submit" 
                className="button submit" 
                onClick={onCheckAnswer}>
                Check Answer
            </button>
        </div>

    </div>
  );
  
};

export default BaristaForm;