var transactionsAPI = require('./transactionAPI.js');

//the beginning of the requested reporting period, in RFC 3339 format
var beginTime = "2018-01-01T00:00:00Z"; //all transactions since the beginning of 2018

//get all transactions and pass a callback functions that prints them all to the console for debugging purposes.
transactionsAPI.getAllTransactions(beginTime, (transactions) => {
    console.log(transactions)
});

//call getLastTransaction every two seconds
setInterval(transactionsAPI.getLastTransaction, 2000);

// console.log(transactionsAPI.transaction_queue);

