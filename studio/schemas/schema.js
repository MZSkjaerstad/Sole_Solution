import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import products from './documents/products'
import cart from './documents/cart'
import sizes from './documents/sizes'
import brands from './documents/brands'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    products,
    cart,
    sizes,
    brands
  ]),
})
