// Given a string of characters, return a phone number from characters when dialed on a standard phone keypad
//*   1   2   3
//  *      ABC DEF
//  *   4   5   6
//  *  GHI JKL MNO
//  *   7   8   9
//  * PQRS TUV WXYZ
//  *   *   0   #
//  *
//  * var input = listOf(
//   "1-866-RING-RING",
//   "1800-THRIFTY")

/**
 * @param {string} inputNumber
 * @return {number}
 */

var convertNumber = function (inputNumber) {
  const symbols = {
    A: 2,
    B: 2,
    C: 2,
    D: 3,
    E: 3,
    F: 3,
    G: 4,
    H: 4,
    I: 4,
    J: 5,
    K: 5,
    L: 5,
    M: 6,
    N: 6,
    O: 6,
    P: 7,
    Q: 7,
    R: 7,
    S: 7,
    T: 8,
    U: 8,
    V: 8,
    W: 9,
    X: 9,
    Y: 9,
    Z: 9,
  };

  let kopija = [...inputNumber];
  let numerical = [];

  for (let i = 0; i < kopija.length; i++) {
    if (
      kopija[i] == '-' ||
      kopija[i] == '1' ||
      kopija[i] == '2' ||
      kopija[i] == '3' ||
      kopija[i] == '4' ||
      kopija[i] == '5' ||
      kopija[i] == '6' ||
      kopija[i] == '7' ||
      kopija[i] == '8' ||
      kopija[i] == '9' ||
      kopija[i] == '0'
    ) {
      numerical.push(kopija[i]);
    } else {
      numerical.push(kopija[symbols[i]]);
    }
  }
  return numerical.join('');
};
