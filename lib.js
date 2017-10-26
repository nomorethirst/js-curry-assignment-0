'use strict'

const entries =
  obj =>
    Object.keys(obj)
      .map(key => [key, obj[key]])

const listing =
  (name, price) => ({
    name,
    price
  })

const customer =
  (name, shoppingList) => ({
    name,
    shoppingList
  })

const cart =
  (customer, ...items) => ({
    customer,
    items
  })

/**
 * should return an array with the `itemName` repeated `count` number of times
 */
const itemRepeater =
  itemName =>
    count => Array(count).fill(itemName)

/**
 * should return an array of carts with each given customer's shopping list
 * as an array of items
 */
const constructCarts =
  listings =>
    customers => 
      customers
          .map(c => 
            cart(c.name, 
                  ...entries(c.shoppingList)
                  .map( e => itemRepeater( listings[listings.findIndex( l => e[0] === l.name)])(e[1] )
                  )
                  .reduce( (acc, cur) => acc.concat(cur), [])
                )
              )
    
module.exports = {
  listing,
  customer,
  constructCarts
}
