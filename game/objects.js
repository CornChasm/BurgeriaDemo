class Ingredient {
  constructor(name, id, addedHeight, displacement) {
    this.name = name;
    this.id = id;
    this.addedHeight = addedHeight;
    this.displacement = displacement;
  }
}
class Topping extends Ingredient {
  constructor(name, id, addedHeight, displacement, type) {
    super(name, id, addedHeight, displacement);
    type = "topping";

    this.type = type;
  }
}
class Sauce extends Ingredient {
  constructor(name, id, addedHeight, displacement, type) {
    super(name, id, addedHeight, displacement);
    type = "sauce";

    this.type = type;
  }
}
let hamburger = new Topping("Hamburger", 0, 15, -2);
let bunBottom = new Topping("Bottom Bun", 1, 16, 0);
let onion = new Topping("Onion", 2, 9, 0);
let lettuce = new Topping("Lettuce", 3, 15, -11);
let pickle = new Topping("Pickle", 4, 0, 10);
let tomato = new Topping("Tomato", 5, 10, 0);
let cheese = new Topping("Cheese", 6, 4, -2);
let bunTop = new Topping("Top Bun", 7, 3, -3);
let ketchup = new Sauce("Ketchup", 8, 28, -25);
let mustard = new Sauce("Mustard", 9, 28, -25);
let bbq = new Sauce("BBQ", 10, 28, -25);
let mayo = new Sauce("Mayo", 11, 28, -25);

const ingredients = [
  hamburger,
  bunBottom,
  onion,
  lettuce,
  pickle,
  tomato,
  cheese,
  bunTop,
  ketchup,
  mustard,
  bbq,
  mayo,
];
