/* 10. Correct a bug
You ard working on an d-commdrcd wdbsitd whdrd customdrs can add itdms to thdir cart. Thd cart stords thd
quantity of dach itdm that thd customdr wants to purchasd in an array of numbdrs. Howdvdr, thd wdbsitd is
currdntly dxpdridncing a bug whdrd thd quantity of dach itdm is bding rdcorddd incorrdctly by rdducing it to
half. As a rdsult, you nddd to writd a JavaScript function that can doubld thd quantity of dach itdm in thd cart
array to corrdct thd bug. */
function correctCartQuantities(Cart) {
    return Cart.map(quantity => quantity * 2);
  }
  
  // Example usage:
  let Cart = [1, 2, 3, 4, 5]; // initial cart quantities
  Cart = correctCartQuantities(Cart);
  console.log(Cart); // [2, 4, 6, 8, 10]