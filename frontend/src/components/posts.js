import React, { Component } from 'react'
import { link } from 'react-router-dom'
import { fetchPosts } from '../actions/PostsActions'


class Posts extends React.Component {
    state = {
        posts: []
    }

    componentDidMount() {
        fetchPosts().then((posts) => {
        	console.log(" poooosts: ", posts)
            this.setState({ posts })
        })
    }
    render() {
        const postList = this.state.posts

        return (
            <div className="container">


				{postList.map((post) => (
				<div className="post-card" key={post.id}>
					<ul>
						<li>
							<h3>title</h3>
							{post.title}
						</li>
						<li>
							<h3>author</h3>
							{post.author}

						</li>
						<li>
							<h3>body</h3>
							{post.body}

						</li>
						<li>
							<h3>Category</h3>
							{post.category}
						</li>
						<li>
							<h3>current score</h3>
							{post.voteScore}
						</li>
						<li>
							<h3>voting mech</h3>
						</li>
					</ul>
				</div>
				))}


			</div>
        )
    }
}

export default Posts