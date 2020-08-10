/* eslint-disable no-mixed-operators */
function isDisabled(isChecked, categoryId, checkedCategories, checkbox, checked) {
  if (isChecked) return false;
  if (checkedCategories.indexOf(categoryId) !== -1) return true;
  
  const hasTimeConflict = (startDate, endDate, compStart, compEnd) => {
    if (startDate > compStart && compEnd > startDate
      || compStart > startDate && endDate > compStart) return true;
  }

  for (let i = 0; i < checked.length; i++) {
    if (hasTimeConflict(checkbox[0], checkbox[1], checked[i][0], checked[i][1])) {
      return true;
    }
  }
  return false;
}

export default isDisabled;