const { encrypt, decrypt } = require('./hash');
oracle_cred = require('../qa_automation_api/utils/credentilals'),


//hash = encrypt('text to Encrypt');

//console.log(hash);



 mail_pass=oracle_cred.mailer.password;
 const mail_password=decrypt(mail_pass);
 //console.log(mail_password);

 hash =oracle_cred.oracle.password;

const database_pass = decrypt(hash);
//console.log(text);


exports.database_pass = database_pass;
exports.mail_password = mail_password ;
