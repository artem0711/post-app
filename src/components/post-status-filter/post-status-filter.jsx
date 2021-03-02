import React from 'react';
import { ButtonGroup, Button } from 'reactstrap';

export default class PostStatusFilter extends React.Component {
    state = { filter: '' };

    filterButtons = [
        { name: 'all', label: 'Все' },
        { name: 'like', label: 'Понравилось' }
    ];

    render() {
        const filterButtons = this.filterButtons.map(({ name, label }) => {
            const { filter, onFilterSelect } = this.props;

            return (
                <Button
                    key={name}
                    color={(filter === name) ? 'info' : 'outline-secondary'}
                    onClick={() => onFilterSelect(name)}
                >
                    {label}
                </Button>
            )
        });

        return <ButtonGroup>{filterButtons}</ButtonGroup>;
    }
}