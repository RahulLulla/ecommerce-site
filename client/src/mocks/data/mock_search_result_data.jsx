const urls = [
  {
    productName: "Harlow Three-Hand Light Pink Leather Watch",
    price: 1112.0,
    color: "Gold",
    material: "Leather",
    url: "https://api.ecom.longines.com/media/catalog/product/w/a/watch-collection-longines-spirit-zulu-time-l3-802-5-53-9-1733407839-thumbnail.png?w=360",
  },
  {
    productName: "ABC Three-Hand Silver Steel Watch",
    price: 123.0,
    color: "Silver",
    material: "Steel",
    url: "https://5.imimg.com/data5/SELLER/Default/2022/10/KJ/JJ/HE/20506059/e-commerce-wrist-watch-photography-500x500.JPG",
  },
  {
    productName: "PQR Three-Hand Silver Stainless Steel Watch",
    price: 11512.0,
    color: "Silver",
    material: "Stainless Steel",
    url: "https://5.imimg.com/data5/SELLER/Default/2022/10/JE/QE/PL/20506059/e-commerce-wrist-watch-photography.JPG",
  },
  {
    productName: "Jason Three-Hand Black Quartz Watch",
    price: 15512.0,
    color: "Black",
    material: "Quartz",
    url: "https://i0.wp.com/tomcrowl.com/wp-content/uploads/2024/02/E-commerce-Watch-Image.jpg?fit=1080%2C1080&ssl=1",
  },
  {
    productName: "Luxury Black Quartz Watch",
    price: 1145.0,
    color: "Black",
    material: "Quartz",
    url: "https://freshsparks.com/wp-content/uploads/2014/10/project_image_icon_TIS.jpg",
  },
];

export const all_products = [...Array(15)].map((_, index) => {
  const randomElement = (index = urls[Math.floor(Math.random() * urls.length)]);
  return {
    id: index + 1,
    productName: randomElement.productName,
    price: randomElement.price,
    url: randomElement.url,
    color: randomElement.color,
    material: randomElement.material,
  };
});
