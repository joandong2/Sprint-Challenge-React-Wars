import React from "react";
import { Col } from "reactstrap";
import "./StarWars.css";

const People = (props) => {
    return (
        <Col md="3">
            <div className="people-card">
                <h4>{props.name}</h4>
                <p>
                    Birth: {props.birth_year}, {props.gender}
                </p>
                <div className="people-info">
                    <span>Height: {props.height}</span>
                    <br />
                    <span>Mass: {props.mass}</span>
                    <br />
                    <span>Hair Color: {props.hair_color}</span>
                    <br />
                    <span>Skin Color: {props.skin_color}</span>
                    <br />
                    <span>Eye Color: {props.eye_color}</span>
                </div>
            </div>
        </Col>
    );
};
export default People;
