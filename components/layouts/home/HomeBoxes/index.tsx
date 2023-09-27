import React from "react";
import { Card, Col, Row } from "antd";
import { CardProps } from "antd/lib/card";
import CustomButton from "../../../uiComponents/CustomButton/CustomButton";
import "./HomeBoxes.scss";

interface BoxProps extends CardProps {
  backgroundImage: string;
  heading: string;
  categoryHeading: string;
  onExploreClick?: () => void;
}

const Box: React.FC<BoxProps> = ({
  backgroundImage,
  heading,
  categoryHeading,
  onExploreClick,
  ...cardProps
}) => (
  <Col>
    <Card
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
      {...cardProps}
    >
      <h3>{heading}</h3>
      <h2>{categoryHeading}</h2>
      {onExploreClick && (
        <CustomButton type="primary" onClick={onExploreClick}>
          Explore
        </CustomButton>
      )}
    </Card>
  </Col>
);

interface HomeBoxesProps {
  leftBoxProps: BoxProps;
  rightBoxProps: BoxProps[];
}

const HomeBoxes: React.FC<HomeBoxesProps> = ({
  leftBoxProps,
  rightBoxProps,
}) => (
  <Row gutter={5} className="homeBoxesWrapper">
    <Col xl={14} lg={12} className="leftBox">
      <Box {...leftBoxProps} className="box box-1" />
    </Col>

    <Col xl={10} lg={12} className={`rightBox`}>
      <Row gutter={7}>
        {rightBoxProps.map((props, index) => (
          <Box key={index} {...props} className={`box box-${index + 1}`} />
        ))}
      </Row>
    </Col>
  </Row>
);

export default HomeBoxes;
