import React from 'react';

import PostList from '../pos-list';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostAddForm from '../post-add-form';
import PostStatusFilter from '../post-statusf-filter';

export default class App extends React.Component {
    state = {
        posts: [
            { postId: 1, label: 'Going to learn React', important: true, like: false },
            { postId: 2, label: 'Thats is so good', important: false, like: false },
            { postId: 3, label: 'Lorem ipsum', important: false, like: false },
        ],
        term: '',
        filter: 'all'
    };

    postId = 4;

    deletePost = (postId) => {
        this.setState(({ posts }) => {
            const idx = posts.findIndex(post => post.postId === postId);
            const dataBefore = posts.slice(0, idx);
            const dataAfter = posts.slice(idx + 1);
            const newPosts = [...dataBefore, ...dataAfter];

            return { posts: newPosts };
        });
    }

    addPost = (text) => {
        const newPost = {
            label: text,
            important: false,
            postId: this.postId++
        };

        this.setState(({ posts }) => {
            const newPosts = [...posts, newPost];

            return { posts: newPosts };
        });
    }

    onToggle = (postId, flag) => {
        this.setState(({ posts }) => {
            let newPost = null;

            const idx = posts.findIndex(post => post.postId === postId);
            const oldPost = posts[idx];

            switch (flag) {
                case 'important':
                    newPost = { ...oldPost, important: !oldPost.important };
                    break;
                case 'like':
                    newPost = { ...oldPost, like: !oldPost.like };
                    break;
                default:
                    break;
            }

            const newPosts = [...posts.slice(0, idx), newPost, ...posts.slice(idx + 1)];

            return { posts: newPosts };
        });
    }

    searchPost = (posts, term) => {
        if (term.length === 0) {
            return posts;
        }

        return posts.filter((post) => {
            return post.label.indexOf(term) > -1;
        });
    };

    filterPost = (posts, filter) => {
        switch (filter) {
            case 'all':
                return posts;
            case 'like':
                return posts.filter(post => post.like);
            default: break;
        }
    }

    onFilterSelect = (filter) => { this.setState({ filter }); }

    onUpdateSearch = (term) => { this.setState({ term }); }

    render() {
        const { posts, term, filter } = this.state;

        const liked = posts.filter(post => post.like).length;
        const countPosts = posts.length;
        const visiblePosts = this.filterPost(this.searchPost(posts, term), filter);

        return (
            <div className="app">
                <AppHeader
                    liked={liked}
                    countPosts={countPosts}
                />
                <div className="search-panel d-flex">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                    />
                </div>
                <PostList
                    posts={visiblePosts}
                    onDelete={this.deletePost}
                    onToggleImportant={this.onToggle}
                    onToggleLiked={this.onToggle}
                />
                <PostAddForm onAdd={this.addPost} />
            </div>
        );
    }
}