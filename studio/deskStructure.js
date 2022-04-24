import S from '@sanity/desk-tool/structure-builder';

export default () =>
   S.list()
      .title('Sole Solution - Content editor')
      .items(
         [
            S.listItem()
               .title('Landing')
               .child(
                  S.document()
                     .schemaType('landingSettings')
                     .documentId('landingSettings')
               ),
            S.divider(),
            ...S.documentTypeListItems().filter(item => !['landingSettings'].includes(item.getId()))
         ]
      )