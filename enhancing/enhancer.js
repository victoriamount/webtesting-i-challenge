class Item {
  constructor(name, durability, enhancement) {
    this.name = name
    this.durability = durability
    this.enhancement = enhancement
  }
}
          
//accepts an item object and returns a new item object modified according to the rules defined by the client for enhancement success.
function success(item) {
    if (item.enhancement < 20 && item.enhancement >= 0) {
      return { ...item, enhancement: item.enhancement+1 };
    } else {
      return { ...item };
    }
}

// accepts an item object and returns a new item object modified according to the rules defined by the client for enhancement failure.
function fail(item) {
  if (item.enhancement < 15 && item.enhancement >= 0) {
    return { ...item, durability: item.durability-5 }
  } else if (item.enhancement >= 15 && item.enhancement <= 20) {
    if (item.enhancement > 16) {
      return { ...item, durability: item.durability-10, enhancement: item.enhancement-1 }
    } else {
      return { ...item, durability: item.durability-10 }
    }
  } else {
    return { ...item }
  }
} 

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
                  
module.exports = {
  success,
  fail,
  repair,
  get,
  Item
}
