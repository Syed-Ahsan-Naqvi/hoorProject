// module.exports = ({ env }) => ({
//     upload: {
//         provider: 'cloudinary',
//         providerOptions: {
//             cloud_name: env('CLOUDINARY_NAME'),
//             api_key: env('CLOUDINARY_KEY'),
//             api_secret: env('CLOUDINARY_SECRET'),
//         },
//     },
// });

require('dotenv').config();

module.exports = ({ env }) => ({
  upload: {
    provider: 'cloudinary',
    providerOptions: {
      // cloud_name: process.env.CLOUDINARY_NAME,
      cloud_name:dbxuynhy0,
      // api_key: process.env.CLOUDINARY_KEY,
      api_key:214768323283339,
      // api_secret: process.env.CLOUDINARY_SECRET,
      api_secret:5IGw31yNn_50ZkimD8fG2Autrww,
    },
  },
});
