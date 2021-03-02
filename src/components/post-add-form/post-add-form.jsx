import React from 'react';
import { Form, Input, Button } from 'reactstrap';

export default class PostAddForm extends React.Component {
    state = { postText: '' };

    onValueChange = (e) => {
        this.setState({
            postText: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();

        if (this.state.postText !== '') {
            this.props.onAdd(this.state.postText);
            this.setState({ postText: '' });
        }
    }

    render() {
        const { postText } = this.state;

        return (
            <Form className="bottom-panel d-flex" onSubmit={this.onSubmit}>
                <Input
                    className="new-post-label"
                    placeholder="О чём Вы думаете сейчас?"
                    value={postText}
                    onChange={this.onValueChange}
                />
                <Button color="outline-secondary">Добавить</Button>
            </Form>
        );
    }
}