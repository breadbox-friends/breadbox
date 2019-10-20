class Option {
  constructor(optionName) {
    this.optionName = optionName;
    this.isSelected = false;
  }

  setSelected(isSelected) {
    this.isSelected = isSelected;
  }
}

export default Option;
