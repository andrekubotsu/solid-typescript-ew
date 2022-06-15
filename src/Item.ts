export default abstract class Item {
  category: string
  description: string
  price: number

  constructor (category: string, description:string, price:number) {
    this.category = category
    this.description = description
    this.price = price
  }

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
