import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import products from './documents/products'
import sizes from './documents/sizes'
import brands from './documents/brands'
import landingSettings from './landingSettings'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    landingSettings,
    products,
    sizes,
    brands
  ]),
})

