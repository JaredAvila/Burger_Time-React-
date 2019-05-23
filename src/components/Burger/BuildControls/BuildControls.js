import React from "react";
import classes from "./BuildControls.css";

import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
  { label: "Produce", type: "produce" }
];

const BuildControls = props => {
  return (
    <div className={classes.BuildControls}>
      {//maps controls to create BuildControl for each ingredient in array
      controls.map(ctrl => (
        <BuildControl
          added={() => props.ingredientAdded(ctrl.type)}
          removed={() => props.ingredientRemoved(ctrl.type)}
          key={ctrl.label}
          label={ctrl.label}
        />
      ))}
    </div>
  );
};

export default BuildControls;
