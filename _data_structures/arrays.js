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
    return lastItem;
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
