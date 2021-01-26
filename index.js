function urlEncode(url) {
  return Buffer.from(url).toString('base64');
}

function urlDecode(url) {
  var uri_enc = Buffer.from(url).toString('base64');
  var uri_dec = Buffer.from(uri_enc, 'base64').toString('ascii');
  return uri_dec;
}


const readLineSync = require('readline-sync');

const selectedUtilityOption = parseInt(readLineSync.question('Welcome to URL Encoder/Decoder. Which utility function would you like to use?\n1.Base64Encode\n2. Base64Decode\n'));

console.log(`You selected ${selectedUtilityOption}`);

switch(selectedUtilityOption) {
  case 1:
    const urlToEncode = readLineSync.question('Please enter the url to be encoded\n');
    const encodedURL = urlEncode(urlToEncode);
    console.log(encodedURL);
    break;
  case 2:
    const urlToDecode = readLineSync.question('Please enter the url to be decoded\n');
    const decodedURL = urlDecode(urlToDecode);
    console.log(decodedURL);
    break;
  default:
    console.log('Invalid URL\n');
    break;
}