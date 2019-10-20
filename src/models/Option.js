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

export const optionSort = (option1, option2) => {
  const { optionName: o1 } = option1;
  const { optionName: o2 } = option2;

  if (o1 > o2) {
    return 1;
  } else if (o2 > o1) {
    return -1;
  } else {
    return 0;
  }
}

export default Option;
