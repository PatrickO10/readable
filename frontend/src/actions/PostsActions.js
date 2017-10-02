export const GET_POSTS = 'GET_POSTS'
export const POST_URL = 'http://localhost:3001/posts'

const getPosts = posts => ({
    type: GET_POSTS,
    posts
})

/* Fetch all posts */
export function fetchPosts () {
	return fetch(POST_URL, {headers: {'Authorization': 'whateva'}})
		.then( (response => response.json()) )
}
