import * as React from "react";
import { Card as CardAntD } from "antd";

const Card = ({ title, children, extra = undefined }) => {
    return (
        <CardAntD title={title} extra={extra}>
            {children}
        </CardAntD>
    );
};

export default Card;
