
const pinataSDK = require("@pinata/sdk");
// const ipfsUris = ["https://artion.mypinata.cloud/ipfs/", "https://artion11.mypinata.cloud/ipfs/"];
// const uploadPath = process.env.UPLOAD_PATH;
const pinata = pinataSDK(
  "3d52bc4f33dae9363366",
  "57f5b07b64ca27412398939e75d40c1552d54889c04761d0c41c14b999a1aee0"
);

// const pinFileToIPFS = async (
//   fileName,
//   address,
//   name,
//   symbol,
//   royalty,
//   xtraUrl
// ) => {
//   const options = {
//     pinataMetadata: {
//       name: name,
//       keyvalues: {
//         symbol: symbol,
//         royalty: royalty,
//         IP_Rights: xtraUrl,
//         recipient: address,
//       },
//     },
//     pinataOptions: {
//       cidVersion: 0,
//     },
//   };
//   const readableStreamForFile = fs.createReadStream(uploadPath + fileName);

//   try {
//     let result = await pinata.pinFileToIPFS(readableStreamForFile, options);
//     return result;
//   } catch (error) {
//     Logger.error(error);
//     return "failed to pin file to ipfs";
//   }
// };




const pinJsonToIPFS = async (jsonMetadata) => {
  const options = {
    pinataMetadata: {
      name: jsonMetadata.name,
      keyvalues: {
        address: jsonMetadata.properties.address,
      },
    },
    pinataOptions: {
      cidVersion: 0,
    },
  };

  try {
    let result = await pinata.pinJSONToIPFS(jsonMetadata, options);
    return result;
  } catch (error) {
    return "failed to pin json to ipfs";
  }
};

export default pinJsonToIPFS;
