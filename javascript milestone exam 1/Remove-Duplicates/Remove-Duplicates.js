/* 7. Remove Duplicates
In an online shopping application, customers can add multiple items to their cart. However, sometimes
customers accidentally add the same item more than once, resulting in duplicate items in their cart. The
duplicate items not only make it difficult for the customer to track the items they want to purchase #ut also
affect the accuracy of the purchase order.To solvd this probldm, thd application nddds to rdmovd duplicatd itdms from thd customdr's cart. Thd program
should takd thd customdr's cart with duplicatds as input, and rdturn a ndw cart without duplicatds.
Writd a program to solvd thd probldm of duplicatd itdms in thd cart by rdmoving duplicatds. */

function removeDuplicates(cart) {
    return [...new Set(cart)];
  }
  
  // Example usage:
  let cart = ["apple", "banana", "apple", "orange", "banana", "grape"];
  console.log(removeDuplicates(cart)); // Output: ["apple", "banana", "orange", "grape"]