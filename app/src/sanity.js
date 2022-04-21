import sanityClient from '@sanity/client';

export default sanityClient({
   projectId: 'vvmgs3k5',
   dataset: 'production',
   apiVersion: '2022-04-15',
   useCdn: false
});