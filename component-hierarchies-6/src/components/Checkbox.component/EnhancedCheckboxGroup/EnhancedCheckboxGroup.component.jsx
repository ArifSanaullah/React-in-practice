import React from "react";
import EnhancedCheckbox from "../EnhancedCheckbox/EnhancedCheckbox.component";
import style from "./EnhancedCheckboxGroup.module.css";

export default class EnhancedCheckboxGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: undefined
    };
  }

  onChangeHandler(selectedItem) {
    const { items } = this.props;
    this.setState({ selectedItem });
    this.props.handleChange(items[selectedItem].value);
  }

  render() {
    const { selectedItem } = this.state;
    const { section } = this.props;
    return (
      <div className={style.EnhancedCheckboxGroup}>
        <div>
          <h3>{section}</h3>
          {this.props.items.map((e, i) => {
            return (
              <EnhancedCheckbox
                label={e.label}
                value={e.value}
                selected={selectedItem === i}
                id={e.id}
                onChangeHandler={() => this.onChangeHandler(i)}
                key={i}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
