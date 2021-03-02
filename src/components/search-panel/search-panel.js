import React, { Component } from "react";
import { Input } from "reactstrap";

import "./search-panel.sass";

class SearchPanel extends Component {
    state = { term: "" };

    onUpdateSearch = (e) => {
        const term = e.target.value;

        this.setState({ term });
        this.props.onUpdateSearch(term);
    };

    render() {
        return (
            <Input
                className="search-input"
                placeholder="Поиск по записям"
                onChange={this.onUpdateSearch}
            />
        );
    };
};

export default SearchPanel;