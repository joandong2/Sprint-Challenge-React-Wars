import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row } from "reactstrap";

import People from "./People.js";
import Pagination from "./Pagination.js";

const PeopleList = () => {
    const [data, setData] = useState([]);
    const [pageCount, setPageCount] = useState(1);
    const [totalPageCount, setTotalPageCount] = useState(1);

    useEffect(() => {
        axios
            .get(`https://swapi.co/api/people/?page=${pageCount}`)
            .then((response) => {
                console.log(response.data);
                setTotalPageCount(
                    (Math.ceil(response.data.count / 10) * 10) / 10
                );
                setData(response.data.results);
            })
            .catch((err) => console.log(err));
    }, [pageCount]);

    const setClickCount = (e) => {
        console.log(e.target.getAttribute("data-id"));
        setPageCount(e.target.getAttribute("data-id"));
    };

    return (
        <div class="main-container">
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
            <Container>
                <Row>
                    {[...Array(totalPageCount)].map((x, i) => (
                        <Pagination
                            key={i + 1}
                            index={i + 1}
                            onclick={setClickCount}
                        />
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default PeopleList;
