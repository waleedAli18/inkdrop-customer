"use client";
import React from "react";
import { Card } from "antd";
import Image from "next/image";
import { CardData } from "../../../interface";
import "./CustomDesignCard.scss";

interface CardComponentProps {
  data: CardData;
  link?: string;
  handleClick: () => void;
}

const DesignCardComponent: React.FC<CardComponentProps> = ({
  data,
  link,
  handleClick,
}) => {
  const { imageSrc, heading, designedBy } = data;

  return (
    <Card
      cover={
        // <img alt="Card Image" src={imageSrc} />
        <Image alt="Card Image" src={imageSrc} height={250} width={235} />
      }
      className="customCard"
      onClick={() => handleClick()}
    >
      <h3>{heading}</h3>
      <p className="designedBy">Designed by {designedBy}</p>
    </Card>
  );
};

export default DesignCardComponent;
