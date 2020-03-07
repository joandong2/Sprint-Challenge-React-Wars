import React, { useState, useEffect } from "react";
import axios from "axios";

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
        <div>
            {data.map((item, i) => {
                return <People key={i} name={item.name} />;
            })}
        </div>
    );
};

export default PeopleList;
