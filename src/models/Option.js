class Option {
  constructor(optionName, isSelected = false) {
    this.optionName = optionName;
    this.isSelected = isSelected;
  }

  setSelected(isSelected) {
    return Object.assign(
      Object.create(this),
      { isSelected: isSelected}
    );
  }
}

export default Option;
