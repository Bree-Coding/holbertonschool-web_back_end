/* eslint-disable */
export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const CloneConstructor = this.constructor[Symbol.species] || this.constructor;
    return new CloneConstructor(this._brand, this._motor, this._color);
  }

  static get [Symbol.species]() {
    return this;
  }
}
