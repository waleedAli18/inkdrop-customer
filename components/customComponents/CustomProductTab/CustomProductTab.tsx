"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { UNAUTHENTICATED_ROUTES } from "../../../utils/constants/routes.constant";
import { ProductCategoryData } from "../../../interface";
import "./CustomProductTab.scss";

export interface ProductTabProps {
  category: string;
  products: ProductCategoryData[];
}

const ProductTab: React.FC<ProductTabProps> = ({ category, products }) => {
  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  return (
    <div className="ProductTabwrapper">
      {filteredProducts.map((product, index) => (
        <motion.div
          className="cont"
          key={product.id}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.05 }}
        >
          <Link href={UNAUTHENTICATED_ROUTES.HOME}>
            <Image
              src={product.imageSrc}
              alt={product.heading}
              height={250}
              width={235}
            />
            <h3>{product.heading}</h3>
            <span>Shop {product.category}</span>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default ProductTab;
