import { AssociatedProductsInterface } from "../../interface/associated.interface";

import PImage1 from "../../assets/images/product-1.png";
import PImage2 from "../../assets/images/product-2.png";
import PImage3 from "../../assets/images/product-3.png";
import PImage4 from "../../assets/images/product-4.png";
import PImage5 from "../../assets/images/product-5.png";

export const associatedProductsData: AssociatedProductsInterface[] = [
  {
    id: 1,
    imageSrc: PImage1.src,
    heading: "Impala Tamee Men Graphic T-Shirt",
    review: 5,
    category: ["t-shirt", "hats", "stickers"],
    status: true,
  },
  {
    id: 2,
    imageSrc: PImage2.src,
    heading: "Impala Tamee Men Graphic T-Shirt",
    review: 4,
    category: ["t-shirt", "hats", "stickers"],
    status: true,
  },
  {
    id: 3,
    imageSrc: PImage3.src,
    heading: "Impala Tamee Men Graphic T-Shirt",
    review: 4.5,
    category: ["t-shirt", "hats", "stickers"],
    status: false,
  },
  {
    id: 4,
    imageSrc: PImage4.src,
    heading: "Impala Tamee Men Graphic T-Shirt",
    review: 3.5,
    category: ["t-shirt", "hats", "stickers"],
    status: false,
  },
  {
    id: 5,
    imageSrc: PImage5.src,
    heading: "Impala Tamee Men Graphic T-Shirt",
    review: 3.5,
    status: true,
  },
];
