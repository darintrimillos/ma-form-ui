function filterList(list, filters, listVal) {
  const filtersArr = filters.filter(val => val !== null);
  const filteredList = list.filter((listItem) => {
    return filtersArr.indexOf(listItem[listVal]) !== -1;
  });

  return filteredList;
}

export default filterList;