import React from "react";
import PostListItem from "../post-list-item";
import { ListGroup, ListGroupItem } from "reactstrap";

import "./post-list.sass";

const PostList = ({ posts, onDelete, onToggleImportant, onToggleLiked }) => {
    const elements = posts.map((post) => {
        const { postId, ...postProps } = post;

        return (
            <ListGroupItem key={postId}>
                <PostListItem
                    {...postProps}
                    onDelete={() => onDelete(postId)}
                    onToggleImportant={() => onToggleImportant(postId, "important")}
                    onToggleLiked={() => onToggleLiked(postId, "like")}
                />
            </ListGroupItem>
        );
    });

    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    );
};

export default PostList;