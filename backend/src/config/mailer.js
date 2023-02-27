const nodemailer = require("nodemailer");
require('dotenv').config();

const {mail_host,mail_pass,mail_port,mail_user} = process.env;
const transport = nodemailer.createTransport({
   host:mail_host,
   port:mail_port,
   auth: {
       user:mail_user,
       pass:mail_pass
   }
});

const sendMail  = (email, name)=>{
    transport.sendMail({
       to:  email,
       from: mail_user,
       subject: "Rigester successfully",
       text: `Hello ${name},
             welcome!
             on our app
             
               regards 
             Manish Faujdar
       
       `
   }).catch((e)=>{
    console.log(e.message, "error")
   })   
 }

 module.exports = sendMail;