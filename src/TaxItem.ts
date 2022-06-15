import Item from './Item'

export default abstract class TaxItem extends Item {
  calculateTax () {
    return (this.price * this.getTax()) / 100
    // if (this.category === 'Beer') {
    //   return (this.price * this.getTax()) / 100
    // }
    // if (this.category === 'Whisky') {
    //   return (this.price * this.getTax()) / 100
    // }
    // if (this.category === 'Electronic') {
    //   return (this.price * 30) / 100
    // }
    // return 0
  }

    abstract getTax(): number
}
