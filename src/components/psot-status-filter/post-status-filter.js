import React, { Component } from "react";
import { ButtonGroup, Button } from "reactstrap";

import "./post-status-filter.sass";

class PostStatusFilter extends Component {
    state = { filter: "" };

    filterButtons = [
        { name: "all", label: "Все" },
        { name: "like", label: "Понравилось" }
    ];

    render() {
        const filterButtons = this.filterButtons.map(({ name, label }) => {
            const { filter, onFilterSelect } = this.props;

            return (
                <Button
                    color={(filter === name) ? "info" : "outline-secondary"}
                    key={name}
                    onClick={() => onFilterSelect(name)}
                >{label}</Button >
            );
        });

        return (
            <ButtonGroup>{filterButtons}</ButtonGroup>
        );
    };
};

export default PostStatusFilter;