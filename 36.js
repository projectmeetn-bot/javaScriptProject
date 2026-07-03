  /*
  A shopping cart stores product prices in an object.

  If the total bill is ₹50,000 or more, the customer gets a 10% discount on the total bill.

  Otherwise, there is no discount.

  📝 Input
  const cart = {
    Laptop: 45000,
    Mouse: 1000,
    Keyboard: 2000,
    Monitor: 12000
  };
  */

  const cart = {
      Laptop: 45000,
      Mouse: 1000,
      Keyboard: 2000,
      Monitor: 12000
    };

  let totalBill = 0;
  let discount = 0;
  let finalBill = 0
  for(let key in cart){
      totalBill += cart[key]
  }
  if(totalBill >= 50000){
      discount = totalBill * (10 / 100)
  }

finalBill = totalBill - discount

  console.log('Total Bill : ',totalBill)
  console.log('Discount : ',discount)
  console.log('Final Bill : ',finalBill)