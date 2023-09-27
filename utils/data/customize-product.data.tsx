import { ProductFeatureListInterface } from "../../interface/productFeatures";

export const COLOR_OPTIONS = [
  "#BABEBF",
  "#BD00FF",
  "#FFA800",
  "#00C2FF",
  "#FF0000",
];

export const IMAGE_POSITION = [
  {
    label: "Front",
    value: "front",
  },
  {
    label: "Back",
    value: "back",
  },
];

export const SHIRT_SIZE = ["S", "M", "L", "XL", "XXL", "XXXL"];

export const IMAGE_SCALE = [];
for (let i = 1; i <= 100; i++) {
  IMAGE_SCALE.push({ label: `${i}%`, value: i });
}

export const PRODUCT_FEATURES: ProductFeatureListInterface = {
  items: [
    { id: 1, text: "The standard, traditional t-shirt for everyday wear" },
    { id: 2, text: "Classic, generous, boxy fit" },
    {
      id: 3,
      text: "Heavyweight 5.3 oz / 180 gsm fabric, solid colors are 100% preshrunk cotton, heather grey is 90% cotton/10% polyester, denim heather is 50% cotton/ 50% polyester",
    },
    { id: 4, text: "Double-needle hems and neck band for durability" },
    {
      id: 5,
      text: "The third party printer of this product is evaluated according to International Labor Organization standards",
    },
    {
      id: 6,
      text: "The printer of this product sources blanks from manufacturers committed to improving cotton farming practices with the Better Cotton Initiative",
    },
  ],
};
