import React, { Component } from "react";
import { Form, Input, Button } from "reactstrap";

import "./post-add-form.sass";

class PostAddForm extends Component {
    state = { postText: "" };

    onValueChange = (e) => {
        this.setState({
            postText: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();

        if (this.state.postText !== "") {
            this.props.onAdd(this.state.postText);
            this.setState({ postText: "" });
        }
    };

    render() {
        return (
            <Form className="bottom-panel d-flex" onSubmit={this.onSubmit}>
                <Input
                    type="text"
                    className="new-post-label"
                    placeholder="О чём Вы думаете сейчас?"
                    value={this.state.postText}
                    onChange={this.onValueChange}
                />
                <Button type="submit" color="secondary" outline>Добавить</Button>
            </Form>
        );
    };
};

export default PostAddForm;