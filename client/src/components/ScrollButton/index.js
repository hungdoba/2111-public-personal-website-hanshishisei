import React from "react";
import { Button, Icon } from "./element";
import upRow from "../Images/system/photos025.png";

const ScrollButton = ({ visible, onClick }) => {
    return (
        <Button visible={visible} onClick={onClick}>
            <Icon alt="upRow" src={upRow} />
        </Button>
    );
};

export default ScrollButton;
