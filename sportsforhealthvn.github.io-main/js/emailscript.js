var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sportsforhealthvn@gmail.com',
    pass: 'fodesvxxivxiigze'
  }
});

var mailOptions = {
  from: 'sportsforhealthvn@gmail.com',
  to: 'phamquang1203@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});