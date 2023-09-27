"use client";
import React from "react";
import Image from "next/image";
import { Rate } from "antd";
import { CardData } from "../../../interface";
import { motion, AnimatePresence } from "framer-motion";
import "./CustomAssociatedProductsCard.scss";

interface CustomCustomArtCardProps {
  data: CardData;
  link: string;
  handleClick: () => void;
}

const CustomArtCard: React.FC<CustomCustomArtCardProps> = ({
  data,
  handleClick,
}) => {
  const { imageSrc, heading, review, category, created } = data;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{
          type: "spring",
        }}
      >
        <div className="customArtCardWrapper">
          <div className="customArtCard" onClick={() => handleClick()}>
            <div className="img">
              <Image
                src={imageSrc}
                height={220}
                width={220}
                alt="Art"
                priority={false}
              />
            </div>
            <div className="cont">
              {heading && (
                <h3>
                  {heading?.slice(0, 15)}
                  {heading?.length > 15 && "..."}
                </h3>
              )}
              <p className="createdOn">Created On: {created}</p>
              <div className="review">
                <Rate
                  disabled
                  allowHalf
                  value={review}
                  style={{ color: "#F7941D" }}
                />
                {review}
              </div>

              <div className="category">
                <h4>Products:</h4>
                {category?.map((cat, index) => (
                  <span key={index}>{cat}, </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CustomArtCard;
