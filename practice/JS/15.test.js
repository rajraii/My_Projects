let account = require('./14.readlimitedfiles')

let amount  = 2000
let tocut = 200

function chargeDebit(){
  amount  = amount  - tocut
  console.log(`Remaining amount is ${amount}`);
}

// account.updateAccount('Tv', chargeDebit)

let promiseobj  = account.promiseUpdateAccount('Tv').then(chargeDebit)

