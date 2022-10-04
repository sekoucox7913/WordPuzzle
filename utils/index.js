export const checkArrayIncludes = (value, selectedList) => {
    let result = false;
    selectedList.map((selected) => {
      if (selected[0] === value[0] && selected[1] === value[1]) {
        result = true;
      }
    });
    return result;
  };
  