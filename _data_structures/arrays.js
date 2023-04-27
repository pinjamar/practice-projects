const strings = ['a,b,c,d,e,f,g,h'];

//push
strings.push('z'); // 0(1)

//pop
strings.pop(); // 0(1)

//unshift - kad umetamo novi prvi element treba renumerirat sve ostale clanove niza
strings.unshift('x'); // 0(n)

//splice
strings.splice(2, 3, 'umetak'); // 0(n)

// **IMPLEMENTING ARRAYS**

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
newArray.push('hi');
newArray.push('you');
newArray.push('!');
newArray.delete(0);
newArray.push('are');
newArray.push('nice');
newArray.delete(1);
console.log(newArray);

// **REVERSING STRINGS**

//1
function reverse(str) {
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'Not good!';
  }

  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; (i = 0); i--) {
    backwards.push(str[i]);
  }
  return backwards.join('');
}

//2
function reverse2(str) {
  return str.split('').reverse().join('');
}

//3
const reverse3 = (str) => str.split('').reverse().join('');

// **MERGING SORTED ARRAYS**

function mergeSortedArrays(array1, array2) {
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }

  while (array1Item || array2Item) {
    if (!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }

  return mergedArray;
}

mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
