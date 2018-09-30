var list = [7, 9, 9, 2, 7, 3, 9 , 8, 7, 1]

function check(luhn) {
  var positionCheck = 0;
  var reversedList = [];
  for (var i = list.length - 1; i >= 0; i--) {
    reversedList.push(listMaker(list[i], positionCheck));
    positionCheck += 1;
  }
  var doubledList = reversedList.reverse();
  return checkValidity(doubledList);
}

function listMaker(num, positionCheck) {
  if (positionCheck % 2 === 0) {
      return doubleValue(positionCheck, 2 * num);
    } else {
      return num;
    }
}
function doubleValue(position, num) {
  if (num >= 10) {
    return num - 9;
  } else {
    return num;
  }
}

function checkValidity(array) {
  var sum = array.reduce(function(acc, cur) {
    return acc + cur;
  });
  var checkDigit = (sum * 9) % 10
  sum += checkDigit
  return sum % 10 === 0
}
console.log(check(list

module.exports = {}