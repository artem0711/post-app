import React, { Component } from "react";
import PostList from "../post-list";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostAddForm from "../post-add-form";
import PostStatusFilter from "../psot-status-filter";

import "./app.sass";

class App extends Component {
    state = {
        data: [
            { postId: 1, label: "Going to learn React", important: true, like: false },
            { postId: 2, label: "Thats is so good", important: false, like: false },
            { postId: 3, label: "Lorem ipsum", important: false, like: false },
        ],
        term: "",
        filter: "all"
    };

    postId = 4;

    deletePost = (postId) => {
        this.setState(({ data }) => {
            const idx = data.findIndex(post => post.postId === postId);
            const dataBefore = data.slice(0, idx);
            const dataAfter = data.slice(idx + 1);
            const posts = [...dataBefore, ...dataAfter];

            return {
                data: posts
            };
        });
    };

    addPost = (text) => {
        const newPost = {
            label: text,
            important: false,
            postId: this.postId++
        };

        this.setState(({ data }) => {
            const posts = [...data, newPost];

            return {
                data: posts
            };
        });
    };

    onToggle = (postId, flag) => {
        this.setState(({ data }) => {
            let newPost = null;

            const idx = data.findIndex(post => post.postId === postId);
            const oldPost = data[idx];

            switch (flag) {
                case "important":
                    newPost = { ...oldPost, important: !oldPost.important };
                    break;
                case "like":
                    newPost = { ...oldPost, like: !oldPost.like };
                    break;
                default:
                    break;
            };

            const posts = [...data.slice(0, idx), newPost, ...data.slice(idx + 1)];

            return {
                data: posts
            };
        });
    };

    searchPost = (posts, term) => {
        if (term.length === 0) { return posts; }

        return posts.filter((post) => {
            return post.label.indexOf(term) > -1;
        });
    };

    filterPost = (posts, filter) => {
        switch (filter) {
            case "all":
                return posts;
            case "like":
                return posts.filter(post => post.like);
            default: break;
        };
    };

    onFilterSelect = (filter) => { this.setState({ filter }); };

    onUpdateSearch = (term) => { this.setState({ term }); };

    render() {
        const { data, term, filter } = this.state;

        const liked = data.filter(post => post.like).length;
        const countPosts = data.length;
        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

        return (
            <div className="app">
                <AppHeader
                    liked={liked}
                    countPosts={countPosts} />
                <div className="search-panel d-flex">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch} />
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect} />
                </div>
                <PostList
                    posts={visiblePosts}
                    onDelete={this.deletePost}
                    onToggleImportant={this.onToggle}
                    onToggleLiked={this.onToggle} />
                <PostAddForm
                    onAdd={this.addPost} />
            </div>
        );
    };
};

export default App;