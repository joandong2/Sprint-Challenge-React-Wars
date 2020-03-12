import React from "react";
//import axios from "axios";
import { Col } from "reactstrap";
import Movies from "./Movies.js";
import "./StarWars.css";

const People = (props) => {
    //console.log(props);

    return (
        <Col md="2">
            <div className="people-card">
                <h4>{props.person.name}</h4>
                <p>
                    Birth: {props.person.birth_year}, {props.gender}
                </p>
                <div className="people-info">
                    <span>Height: {props.person.height}</span>
                    <br />
                    <span>Mass: {props.person.mass}</span>
                    <br />
                    <span>Hair Color: {props.person.hair_color}</span>
                    <br />
                    <span>Skin Color: {props.person.skin_color}</span>
                    <br />
                    <span>Eye Color: {props.person.eye_color}</span>
                </div>
                <hr />
                <div className="movie-lists">
                    <Movies data={props.person} key={props.person.name} />
                </div>
            </div>
        </Col>
    );
};
export default People;
