let product = {
  name: "Jeans",
  price: 10,
  images: ["a.png", "b.png"],
  attributes: {
    color: "Red",
    size: "Medium",
    extraOptions: {
      isDeliveryFree: true,
      isFeaturedProduct: true,
    },
  },
  getFriendlyName: function () {
    console.log("print this");
  },
};
function doDeepCopy(input) {
  let result = {};

  for (let keys in input) {
    // console.log(keys, typeof input[keys]);
    if (typeof input[keys] === "object") {
      result[keys] = {};
      for (let index in input[keys]) {
        if (typeof input[keys][index] === "object") {
          result[keys][index] = {};
          for (let att in input[keys][index]) {
            result[keys][index][att] = input[keys][index][att];
          }
        } else {
          result[keys][index] = input[keys][index];
        }
      }
    } else {
      result[keys] = input[keys];
    }
  }

  return result;
}
let deepCopy = doDeepCopy(product);
console.log(deepCopy);
product.attributes.extraOptions.isDeliveryFree = false;
console.log(deepCopy);
console.log(product);
