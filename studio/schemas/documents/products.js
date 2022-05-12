import sizes from "./sizes";

export default {
   title: 'Products',
   name: 'products',
   type: 'document',
   fields: [
      {
         title: 'Shoe name',
         name: 'name',
         type: 'string'
      },
      {
         title: 'Slug',
         name: 'slug',
         type: 'slug',
         options: {
            source: 'name'
         }
      },
      {
         title: 'Description',
         name: 'description',
         type: 'text',
      },
      {
         title: 'Price',
         name: 'price',
         type: 'number'
      },
      {
         title: 'Brand',
         name: 'brand',
         type: 'reference',
         to: [{type: 'brands'}]
      },
      {
         title: 'Colours',
         name: 'colours',
         type: 'array',
         of: [{
            title: 'Colourset',
            name: 'colourSet',
            type: 'object',
            fields: [
               {
                  title: 'Colour name',
                  name: 'colourName',
                  type: 'string'
               },
               {
                  title: 'Colour Picker',
                  name: 'colourPicker',
                  type: 'colorPicker'
               },
               {
                  title: 'Thumbnail',
                  name: 'thumbnail',
                  type: 'image'
               },
               {
                  title: 'Images',
                  name: 'images',
                  type: 'array',
                  of: [{
                     title: 'Sneaker image',
                     name: 'sneakerImage',
                     type: 'image'
                  }]
               }
            ]
         }]
      },
      {
         title: 'Sizes',
         name: 'sizes',
         type:'array',
         of: [{
            type: 'reference',
            to: [{type: 'sizes'}],
         }]
      },
      {
         title: 'In stock',
         name: 'inStock',
         type: 'boolean'
      },
      {
         title: 'Highlighted',
         name: 'highlighted',
         type: 'boolean'
      },
   ],

   initialValue: {
      inStock: false,
      highlighted: false
   }
}