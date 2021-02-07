import React from "react";
import "./StarWars.css";
import { Button } from "reactstrap";

const Pagination = (props) => {
    return (
        <Button data-id={props.index} onClick={props.onclick}>
            {props.index}
        </Button>
    );
};
export default Pagination;
