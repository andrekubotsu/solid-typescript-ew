import Beer from './Beer'
import Order from './Order'
import Water from './Water'
import Whisky from './Whisky'

it('should create an order and calculate total', () => {
  // given (dado que)
  const order = new Order()
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
  const order = new Order()
  order.addItem(new Beer('Brahma', 10))
  order.addItem(new Whisky('Jack Daniels', 100))
  order.addItem(new Water('Crystal', 1))
  //   order.addItem(new Item('Electronic', 'TV', 1000)) // 30% - new item - it is against OCP!
  // when (quando)
  const taxes = order.getTaxes()
  // then (então)
  expect(taxes).toBe(21)
})
