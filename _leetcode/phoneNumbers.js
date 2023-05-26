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
  var inputNumber = '1800-THRIFTY';
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
      numerical.push(symbols[kopija[i]]);
    }
  }

  return numerical.join('');
};

console.log(convertNumber());

/**
 * Given a string of characters, return a combination of tapped numbers to write
 * the message on your phone using the Phone Pad
 *
 *   1   2   3
 *      ABC DEF
 *   4   5   6
 *  GHI JKL MNO
 *   7   8   9
 * PQRS TUV WXYZ
 *   *   0   #
 *       _
 *
 * example: hi mate - 44 _444 0 6 2 8 33
 *                     h    i _ m a t  e
 *
 */
/**
 * @param {string} broj
 * @return {number}
 */
var broj = 'hi mate';

var convert = function (broj) {
  const keypad = {
    a: 2,
    b: 22,
    c: 222,
    d: 3,
    e: 33,
    f: 333,
    g: 4,
    h: 44,
    i: 444,
    j: 5,
    k: 55,
    l: 555,
    m: 6,
    n: 66,
    o: 666,
    p: 7,
    q: 77,
    r: 777,
    s: 777,
    t: 8,
    u: 88,
    v: 888,
    w: 9,
    x: 99,
    y: 999,
    z: 9999,
    ' ': 0,
  };
  let kopi = [...broj];
  let prijevod = [];

  for (let i = 0; i < kopi.length; i++) {
    prijevod.push(keypad[kopi[i]]);
  }
  return prijevod.join('');
};

console.log(convert(broj));
