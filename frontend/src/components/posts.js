import React, { Component } from 'react'
import { link } from 'react-router-dom'

class Posts extends React.Component {
    render() {
        return (
            <div>
            <div className="post-card">
				<h1> Hello Posts!</h1>
				<ul>
					<li><h3>title</h3><input type="text" /></li>
					<li><h3>author</h3><input type="text" /></li>
					<li><h3>number of comments</h3><input type="text" /></li>
					<li><h3>current score</h3><input type="text" /></li>
					<li><h3>voting mech</h3><input type="text" /></li>
				</ul>
			</div>
			<div className="post-card">
				<h1> Hello Posts!</h1>
				<ul>
					<li><h3>title</h3><input type="text" /></li>
					<li><h3>author</h3><input type="text" /></li>
					<li><h3>number of comments</h3><input type="text" /></li>
					<li><h3>current score</h3><input type="text" /></li>
					<li><h3>voting mech</h3><input type="text" /></li>
				</ul>
			</div>
			</div>
        )
    }
}

export default Posts