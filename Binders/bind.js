const object = {
    x: 42,
    getX() {
        return this.x;
    }
};

const boundGetX = object.getX.bind(object);
console.log(boundGetX());
  // expected output: 42