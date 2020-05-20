// const { createOrder, summeryInfo } = require('./Utility');

const { summerySolution, createOrder } = require('./liveOnBoard');

const oderList = [];

oderList.push(createOrder('1001', 'user1', '3.5', '306', 'SELL'));
oderList.push(createOrder('1002', 'user2', '1.2', '306', 'SELL'));
oderList.push(createOrder('1003', 'user3', '1.5', '307', 'SELL'));
oderList.push(createOrder('1004', 'user4', '2.0', '305', 'SELL'));
oderList.push(createOrder('1005', 'user5', '2.5', '300', 'SELL'));

oderList.push(createOrder('1006', 'user2', '1.2', '306', 'BUY'));
oderList.push(createOrder('1007', 'user4', '1.7', '305', 'BUY'));
oderList.push(createOrder('1008', 'user4', '1.7', '305', 'BUY'));
oderList.push(createOrder('1009', 'user5', '3.7', '301', 'BUY'));

console.log('----------------------Strat---------------------' + '\n');
console.log('We have Received the Folowing orders: ' + '\n');
oderList.forEach((item, index) => {
  console.log(
    `${item.order_id}'). '${item.oder_type}': '${item.order_quantity}' kg for $'${item.price_per}' ['${item.user_id}']'`
  );
});

// Getting result of live board for both sell and buy.
const summeryResult = summerySolution(oderList);

console.log('\n' + 'Our live order board:' + '\n');
summeryResult.forEach((item, index) => {
  console.log(
    `${item.oder_type}': '${item.order_quantity}' kg for $'${item.price_per}' order '${item.order_id}`
  );
});

console.log('----------------------END---------------------');
