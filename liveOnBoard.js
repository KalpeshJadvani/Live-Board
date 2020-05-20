// Take details and return Object.
const createOrder = (
  order_id,
  user_id,
  order_quantity,
  price_per,
  oder_type
) => {
  return {
    order_id: order_id,
    user_id: user_id,
    order_quantity: order_quantity,
    price_per: price_per,
    oder_type: oder_type,
  };
};

// Get orderList and make common object which has same Type and Price
// Using key to make uniqe data in the object and then make array from object
// Then filter the orders based on price according type.
const summerySolution = (orderList) => {
  const findSamePrice = {};
  for (let i = 0; i < orderList.length; i++) {
    const genratedKey = orderList[i].price_per + orderList[i].oder_type;

    // If it has same key then merging object value else same
    if (findSamePrice.hasOwnProperty(genratedKey)) {
      const temp = { ...findSamePrice[genratedKey] };
      const user_id =
        temp.user_id === orderList[i].user_id
          ? temp.user_id
          : temp.user_id + ',' + orderList[i].user_id;
      const reAssing = {
        order_id: temp.order_id + ',' + orderList[i].order_id,
        user_id: user_id,
        order_quantity:
          parseFloat(temp.order_quantity) +
          parseFloat(orderList[i].order_quantity),
        price_per: temp.price_per,
        oder_type: temp.oder_type,
      };
      findSamePrice[genratedKey] = reAssing;
    } else {
      findSamePrice[genratedKey] = orderList[i];
    }
  }

  // make array values from object and leave the 'genratedKey'.
  const getObjectArray = Object.values(findSamePrice);
  const resultBuy = getObjectArray
    .filter((item) => item.oder_type === 'BUY')
    .sort((a, b) => (a.price_per < b.price_per ? 1 : -1));
  const resultSell = getObjectArray
    .filter((item) => item.oder_type === 'SELL')
    .sort((a, b) => (a.price_per > b.price_per ? 1 : -1));

  // merge both array to retun one array.
  return [...resultBuy, ...resultSell];
};
module.exports = {
  createOrder,
  summerySolution,
};
