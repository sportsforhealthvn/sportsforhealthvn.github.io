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
              <div class="row">
                <div class="col-50">
                  <h3>Billing Address</h3>
                  <label for="fname"
                    ><i class="fa fa-user"></i> Tên đầy đủ</label
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
                    ><i class="fa fa-address-card-o"></i> Địa chỉ</label
                  >
                  <input
                    type="text"
                    id="adr"
                    name="address"
                  />
                  <label for="city"
                    ><i class="fa fa-institution"></i> Thành phố</label
                  >
                  <input
                    type="text"
                    id="city"
                    name="city"
                  />

                </div>
              </div>
              <label>
                <input type="checkbox" checked="checked" name="sameadr" />
                Shipping address same as billing
              </label>
              <input id="bought" type="submit" onclick="bought()" value="Mua hàng" class="btn" />
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

function bought()
{
    document.getElementById('bought').value = "Sending email..."
    document.getElementById('bought').disabled = true
    $.ajax
    ({
        url: 'http://localhost:4000',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify
        ({
            name: document.getElementById('fname').value,
            email:document.getElementById('email').value,
            address:document.getElementById('adr').value,
            city:document.getElementById('city').value,
            items:basket
        }),
        success: function(data)
        {
            window.location.href = "email_success.html";
        },
        error: function()
        {
            window.location.href = "email_fail.html";
        },
    });
}