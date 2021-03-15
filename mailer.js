
var data=require('../qa_automation_api/utils/credentilals');
var nodemailer = require('nodemailer');
const password = require('../qa_automation_api/crypt-text');
const { Console } = require('winston/lib/winston/transports');

var transporter = nodemailer.createTransport({
   
service: 'outlook',
host: "smtp.office365.com",
Port: "587",
auth: {
user: data.mailer.username,
pass: password.mail_password,

}
});

var mailOptions = {
    
   
from:data.mailer.username,
to: data.mailer.username,
subject: 'Sending Email using Node.js',
text: 'Hi, This email is send using NodeMailer.....',
attachments: [
{
path: ''
}
]
};



transporter.sendMail(mailOptions, function(error, info){
if (error) {
console.log(error);
console.log(password.mail_password);

} else {
console.log('Email sent: ' + info.response);
console.log(password.mail_password);


}
});
