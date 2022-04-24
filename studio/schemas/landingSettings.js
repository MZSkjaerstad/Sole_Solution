export default {
   title: "Landing Setting",
   name: "landingSettings",
   type: "document",
   fields: [
      {
         title: "Carouselle images",
         name: "carouselleImages",
         type: "array",
         of: [
            {
               title: "Image",
               name: "image",
               type: "object",
               fields: [
                  {
                     title: "Image name",
                     name: "imageName",
                     type: "string",
                     options: {
                        isHighlighted: true
                     }
                  },
                  {
                     title: "Image File",
                     name: "imageFile",
                     type: "image"
                  }
               ]
            }
         ]
      }
   ]
}