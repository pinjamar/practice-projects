let user = {
  age: 54,
  name: 'Kyle',
  magic: true,
  scream: function () {
    console.log('ahhhhhh');
  },
};

user.age; // 0(1)
user.spell = 'abra kadabra'; // 0(1)
user.scream(); // 0(1)

const a = new Map();
const b = new Sets();

////////////////////////////////////////////////////////////////

class HashTable {
  constructor(size) {
    this.data = new Array(size);
    // this.data = [];
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  } // (1)

  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    } // 0(1)
    return undefined;
  }

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.get('grapes');
myHashTable.set('apples', 9);
myHashTable.set('oranges', 2);
myHashTable.get('apples');

//given an array = [2,5,1,2,3,5,1,2,4]
//it should return 2
//given an array = [2,1,1,2,3,5,1,2,4]
//it should return 1
//given an array = [2,3,4,5]
//it should return undefined

function firstRecurringChar(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[j];
      }
    }
  }
  return undefined;
} // O(n2)

function firstRecurringChar2(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
  }
  return undefined;
} //O(n)

firstRecurringChar([2, 5, 1, 2, 3, 5, 1, 2, 4]);
