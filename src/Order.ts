import Item from './Item'
import TaxItem from './TaxItem'
// import fs from 'fs/promises'
import MessageData from './MessageData'
export default class Order {
  items: Item[]
  messageData: MessageData

  constructor (messageData: MessageData) {
    this.items = []
    this.messageData = messageData
  }

  addItem (item: Item) {
    this.items.push(item)
  }

  getTotal () {
    let total = 0
    for (const item of this.items) {
      total += item.price
    }
    return total
  }

  getTaxes () {
    let taxes = 0
    for (const item of this.items) {
      if (item instanceof TaxItem) taxes += item.calculateTax()
    }

    return taxes
  }

  async printMessage (language: string) {
    // if (language === 'pt') return `O total foi de R$${this.getTotal()}, os impostos foram R$${this.getTaxes()}. Obrigado!`
    // if (language === 'en') return `The total was R$${this.getTotal()}, the taxes was R$${this.getTaxes()}. Thanks!`
    // const message = await fs.readFile(`./messages/${language}.txt`, 'utf8') // by using this, DIP is not being used here!
    const message = await this.messageData.read(language)
    return message.replace('{total}', this.getTotal() + '').replace('{taxes}', this.getTaxes() + '')
  }
}
