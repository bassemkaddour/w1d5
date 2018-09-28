var list = [];

function storeNumber(num) {
  list.push(num);
  return list;
}

function sortList(list) {
  return sorter(list);
}

function sorter(list) {
  var sortedList = list;
  sortedList.sort(function(a, b) {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  });
  return sortedList;
}


module.exports = {
  storeNumber: storeNumber,
  sortList: sortList
}