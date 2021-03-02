import React from 'react';
import { Input } from 'reactstrap';

export default class SearchPanel extends React.Component {
    state = { term: '' };

    onUpdateSearch = (e) => {
        const term = e.target.value;

        this.setState({ term });
        this.props.onUpdateSearch(term);
    }

    render() {
        return (
            <Input
                className="search-input"
                placeholder="Поиск по записям"
                onChange={this.onUpdateSearch}
            />
        );
    }
}