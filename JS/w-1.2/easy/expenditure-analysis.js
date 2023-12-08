/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryMap = {};

  // Iterate through each transaction and calculate total spent by category
  transactions.forEach((transaction) => {
    const { category, price } = transaction;

    // If category doesn't exist in the map, create it
    if (!categoryMap[category]) {
      categoryMap[category] = 0;
    }

    // Add the price to the total for the category
    categoryMap[category] += price;
  });

  // Convert the map into an array of objects
  const result = Object.keys(categoryMap).map((category) => ({
    [category]: categoryMap[category],
  }));

  return result;
}

// Example
const transactions = [
  {
    itemName: "Item1",
    category: "Groceries",
    price: 50,
    timestamp: "2023-01-01",
  },
  {
    itemName: "Item2",
    category: "Electronics",
    price: 100,
    timestamp: "2023-01-02",
  },
  {
    itemName: "Item3",
    category: "Groceries",
    price: 30,
    timestamp: "2023-01-03",
  },
  {
    itemName: "Item4",
    category: "Electronics",
    price: 150,
    timestamp: "2023-01-04",
  },
  {
    itemName: "Item5",
    category: "Clothing",
    price: 50,
    timestamp: "2023-01-05",
  },
];

const result = calculateTotalSpentByCategory(transactions);
console.log(result);

export { calculateTotalSpentByCategory }
