function size(object) {
  return Object.keys(object).length
}

function min(object) {
  let smallest;
  for (let key in object) {
    const value = object[key];
    if (!smallest) {
      smallest = value;
    } else {
      if (value < smallest) {
        smallest = value;
      }
    }
  }
  return smallest;
}

function max(object) {
  let largest;
  for (let key in object) {
    const value = object[key];
    if (!largest) {
      largest = value;
    } else {
      if (value > largest) {
        largest = value;
      }
    }
  }
  return largest;
}

function clone(object) {
  return Object.assign({}, object)
}

function get(object, key) {
  return object[key];
}

function has(object, term) {
  let found = false;
  for (let key in object) {
    const value = object[key];
    if (key.includes(term)) {
      found = true;
    }
  }
  return found;
}

function sum(object) {
  let total = 0;
  for (let key in object) {
    let value = object[key];
    if (!isNaN(value)) {
      total = total + value
    } else {
      total
    }
  }
  return total
}

function invert(object) {
  const invertObject = {};
  for (let key in object) {
    let value = object[key]
    invertObject[value] = key;
  }
  return invertObject
}

function addAll(arr) {
  let newObj = {};
  for (let i = 0; i < arr.length; i++) {
    let obj = arr[i];
    for (let key in obj) {
      let value = obj[key];
      Object.assign(newObj, obj);
      //newObj = {...newObj, ...obj} - spread operator could be used in place of Object.assign()
    }
  }
  return newObj;
}

function find(obj, matcherFunc) {
  let result = null
  for (let key in obj) {
    let value = obj[key];
    if (matcherFunc(value) === true) {
      result = value
      return result
    }
  }
  return result
}

function every(obj, func) {
  let result = true;
  for (let key in obj) {
    let value = obj[key];
    if (func(value) === false) {
      result = false;
      return result
    }
  }
  return result
}

function some(obj, func) {
  let result = false;
  for (let key in obj) {
    let value = obj[key];
    if (func(value) === true) {
      result = true;
      return result
    }
  }
  return result
}

function setUpGlobalObject() {
  Object.size = size;
  Object.min = min;
  Object.max = max;
  Object.clone = clone;
  Object.get = get;
  Object.has = has;
  Object.sum = sum;
  Object.invert = invert;
  Object.addAll = addAll;
  Object.find = find;
  Object.every = every;
  Object.some = some;
}

module.exports = setUpGlobalObject;
