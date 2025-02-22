/* 15. Calculate the percentage of the discount
A retail store is offering a discount on its products and wants to calculate the percentage of the discount to
show customers how much they can save. Given the original price and the discounted price of a product,
implement an arrow function to calculate the percentage of the discount rounded off to two decimal places.
This function could be useful for the store's marketing team to create promotions and offers that attract
customers. */
const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    if (originalPrice <= 0) {
      throw new Error("Original price must be greater than zero");
    }
    const discountAmount = originalPrice - discountedPrice;
    const discountPercentage = (discountAmount / originalPrice) * 100;
    return discountPercentage.toFixed(2);
  };
  
  // Example usage:
  let originalPrice = 100;
  let discountedPrice = 80;
  let discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
  console.log(`Discount percentage: ${discountPercentage}%`);
