let checkoutForm = document.getElementById("checkout-form");
let basket = JSON.parse(localStorage.getItem("data")) || [];
let format = '<p><a href="#">Name</a> <span class="price">Price</span></p>';
let items = "";
let total = 0;
let amount = 0;
for (let i = 0; i < basket.length; i++) {
  items += format
    .replace("Name", basket[i].name)
    .replace("Price", basket[i].price);
  console.log(basket[i]);
}
for (let i = 0; i < basket.length; i++) {
  total += parseFloat(basket[i].price);
  amount++;
  console.log(basket[i]);
}
console.log(items);
let generateCheckoutForm = () => {
  if (basket.length !== 0)
    return (checkoutForm.innerHTML = `
      <div class="container" style="margin-top:30px">
      <div class="row">
        <div class="col-75">
          <div class="container" style="background-color: #f2f2f2;
          padding: 5px 20px 15px 20px;
          border: 1px solid lightgrey;
          border-radius: 3px;
          margin-bottom: 30px">
            <form action="/action_page.php">
              <div class="row">
                <div class="col-50">
                  <h3>Billing Address</h3>
                  <label for="fname"
                    ><i class="fa fa-user"></i> Full Name</label
                  >
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                  />
                  <label for="email"
                    ><i class="fa fa-envelope"></i> Email</label
                  >
                  <input
                    type="text"
                    id="email"
                    name="email"
                  />
                  <label for="adr"
                    ><i class="fa fa-address-card-o"></i> Address</label
                  >
                  <input
                    type="text"
                    id="adr"
                    name="address"
                  />
                  <label for="city"
                    ><i class="fa fa-institution"></i> City</label
                  >
                  <input
                    type="text"
                    id="city"
                    name="city"
                  />

                  <div class="row">
                    <div class="col-50">
                      <label for="state">State</label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <label>
                <input type="checkbox" checked="checked" name="sameadr" />
                Shipping address same as billing
              </label>
              <input type="submit" onclick="" value="Continue to checkout" class="btn" />
            </form>
          </div>
        </div>
        <div class="col-25">
          <div class="container" style="background-color: #f2f2f2;
          padding: 5px 20px 15px 20px;
          border: 1px solid lightgrey;
          border-radius: 3px;">
            <h4>
              Cart
              <span class="price" style="color: black"
                ><i class="fa fa-shopping-cart"></i> <b>` +
                amount +
                `</b></span
              >
            </h4>
            ` +
      items +
      `
            <hr />
            <p>
              Total <span class="price" style="color: black"><b>` +
              total +
              `</b></span>
            </p>
          </div>
        </div>
      </div>
    </div>`);
};

generateCheckoutForm();

let emailOutput=document.getElementsByTagName("input")[2]

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
  to: emailOutput,
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