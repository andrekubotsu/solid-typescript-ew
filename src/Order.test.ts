import Beer from './Beer'
import MessageDataFile from './MessageDataFile'
import Order from './Order'
import Water from './Water'
import Whisky from './Whisky'

it('should create an order and calculate total', () => {
  // given (dado que)
  const order = new Order(new MessageDataFile())
  order.addItem(new Beer('Brahma', 10))
  order.addItem(new Whisky('Jack Daniels', 100))
  order.addItem(new Water('Crystal', 1))
  // when (quando)
  const total = order.getTotal()
  // then (então)
  expect(total).toBe(111)
})

it('should create an order and calculate taxes', () => {
  // given (dado que)
  const order = new Order(new MessageDataFile())
  order.addItem(new Beer('Brahma', 10))
  order.addItem(new Whisky('Jack Daniels', 100))
  order.addItem(new Water('Crystal', 1))
  //   order.addItem(new Item('Electronic', 'TV', 1000)) // 30% - new item - it is against OCP!
  // when (quando)
  const taxes = order.getTaxes()
  // then (então)
  expect(taxes).toBe(21)
})

it('should create an order and print a message in portuguese', async () => {
  // given (dado que)
  const order = new Order(new MessageDataFile())
  order.addItem(new Beer('Brahma', 10))
  order.addItem(new Whisky('Jack Daniels', 100))
  order.addItem(new Water('Crystal', 1))
  //   order.addItem(new Item('Electronic', 'TV', 1000)) // 30% - new item - it is against OCP!
  // when (quando)
  const message = await order.printMessage('pt')
  // then (então)
  expect(message).toBe('O total foi de R$111, os impostos foram R$21. Obrigado!')
})

it('should create an order and print a message in english ', async () => {
  // given (dado que)
  const order = new Order(new MessageDataFile())
  order.addItem(new Beer('Brahma', 10))
  order.addItem(new Whisky('Jack Daniels', 100))
  order.addItem(new Water('Crystal', 1))
  //   order.addItem(new Item('Electronic', 'TV', 1000)) // 30% - new item - it is against OCP!
  // when (quando)
  const message = await order.printMessage('en')
  // then (então)
  expect(message).toBe('The total was R$111, the taxes was R$21. Thanks!')
})
