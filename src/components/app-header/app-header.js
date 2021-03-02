import React from "react";

import "./app-header.sass";

const AppHeader = ({ liked, countPosts }) => {
    return (
        <div className="app-header d-flex">
            <h1>UserName UserLastname</h1>
            <h2>{countPosts} записей, из них понравилось {liked}</h2>
        </div>
    );
};

export default AppHeader;