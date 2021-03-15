// 'use strict';
// var connection = require('./utils/dbConfig.js');
// console.log(connection)
// result = connection.execute('select * from exercise');
// console.log(result.rows)

const crypto = require('crypto');
var crypt = require('crypto');

const algorithm = 'aes-256-ctr';
const secretKey = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3';
const iv = crypto.randomBytes(16);
var encrypted_str;

 const encrypt = (text) => {

     var key = crypt.createCipher('aes-128-cbc', 'password_key');
     encrypted_str = key.update(text, 'utf8', 'hex')
     encrypted_str += key.final('hex');
    
     console.log(encrypted_str);
     return encrypted_str.toString(); 
    
   
 };

const decrypt = (hash) => {

    var key = crypt.createDecipher('aes-128-cbc', 'password_key');
    var decrypted_str = key.update(hash, 'hex', 'utf8')
    decrypted_str += key.final('utf8');
    //console.log(decrypted_str); 
    return decrypted_str.toString(); //return decrypted string
};
module.exports = {
    encrypt,
    decrypt
};
