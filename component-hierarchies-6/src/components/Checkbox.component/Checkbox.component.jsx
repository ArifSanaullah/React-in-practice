import React from "react";
import EnhancedCheckboxGroup from "./EnhancedCheckboxGroup/EnhancedCheckboxGroup.component";
import EnhancedCheckbox from "./EnhancedCheckbox/EnhancedCheckbox.component";

const mains = [
  {
    label: "Grilled Chicken",
    value: "chicken",
    selected: false,
    id: "chicken"
  },
  {
    label: "Steamed Cod",
    value: "cod",
    selected: false,
    id: "cod"
  },
  {
    label: "Roast Beef",
    value: "beef",
    selected: false,
    id: "beef"
  }
];

const side1s = [
  {
    label: "Boiled Potatoes",
    value: "potatoes",
    selected: false,
    id: "potatoes"
  },
  {
    label: "Steamed Rice",
    value: "rice",
    selected: false,
    id: "rice"
  }
];

const side2s = [
  {
    label: "Carrot",
    value: "carrot",
    selected: false,
    id: "carrot"
  },
  {
    label: "Broccoli",
    value: "broccoli",
    selected: false,
    id: "broccoli"
  }
];

export default class Checkbox extends React.Component {
  constructor() {
    super();
    this.state = {
      main: undefined,
      side1: undefined,
      side2: undefined,
      showSelection: false,
      isDoubled: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.doubleHandler = this.doubleHandler.bind(this);
  }

  handleChange(item) {
    this.setState(currentState => {
      const newState = { ...currentState, ...item };
      if (newState.main && newState.side1 && newState.side2) {
        return { ...newState, showSelection: true };
      }
      return { ...newState };
    });
  }

  doubleHandler() {
    this.setState(prevState => {
      return { isDoubled: !prevState.isDoubled };
    });
  }

  render() {
    const { main, side1, side2, showSelection, isDoubled } = this.state;
    return (
      <div>
        {showSelection && (
          <p>
            {main} with {side1} and {side2}{" "}
            {isDoubled && "(Double The Portion)"}
          </p>
        )}
        <EnhancedCheckboxGroup
          items={mains}
          section="Main"
          handleChange={value => this.handleChange({ main: value })}
        />
        <EnhancedCheckboxGroup
          items={side1s}
          section="Side 1"
          handleChange={value => this.handleChange({ side1: value })}
        />
        <EnhancedCheckboxGroup
          items={side2s}
          section="Side 2"
          handleChange={value => this.handleChange({ side2: value })}
        />
        <EnhancedCheckbox
          label="Double the protion"
          value="double"
          selected={this.state.isDoubled}
          onChangeHandler={() => this.doubleHandler()}
          id="double"
        />
      </div>
    );
  }
}
