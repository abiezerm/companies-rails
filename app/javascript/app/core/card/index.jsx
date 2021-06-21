import * as React from "react";
import { Card as CardAntD } from "antd";

const Card = ({ title, children, style = undefined, extra = undefined }) => {
    return (
        <CardAntD style={style} title={title} extra={extra}>
            {children}
        </CardAntD>
    );
};

export default Card;
