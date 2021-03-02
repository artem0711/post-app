import React from 'react';
import { Button } from 'reactstrap';

export default function PostListItem({ label, onDelete, onToggleImportant, onToggleLiked, important, like }) {
    let classNames = 'app-list-item d-flex justify-content-between';
    classNames += important ? ' important' : '';
    classNames += like ? ' like' : '';

    return (
        <div className={classNames}>
            <span className="app-list-item-label" onClick={onToggleLiked}>
                {label}
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <Button size="sm" color="" className="btn-star" onClick={onToggleImportant}>
                    <i className="fa fa-star"></i>
                </Button>
                <Button size="sm" color="" className="btn-trash" onClick={onDelete}>
                    <i className="fa fa-trash-o"></i>
                </Button>
                <i className="fa fa-heart"></i>
            </div>
        </div>
    );
}