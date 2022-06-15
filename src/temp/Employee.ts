import Person from './Person'

export default class Employee extends Person {
  setAge (age: number): void {
    if (age < 18) throw new Error('Person sholud be 18+')
    this.age = age
  }
}
