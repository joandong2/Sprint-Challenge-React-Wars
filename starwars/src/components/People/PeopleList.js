import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row } from "reactstrap";

import People from "./People.js";

const PeopleList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(`https://swapi.co/api/people/`)
            .then((response) => {
                console.log(response.data.results);
                setData(response.data.results);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <Container>
            <Row>
                {data.map((item, i) => {
                    return (
                        <People
                            key={i}
                            name={item.name}
                            birth_year={item.birth_year}
                            gender={item.gender}
                            height={item.height}
                            mass={item.mass}
                            hair_color={item.hair_color}
                            skin_color={item.skin_color}
                            eye_color={item.eye_color}
                        />
                    );
                })}
            </Row>
        </Container>
    );
};

export default PeopleList;
