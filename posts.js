const { get } = require("http");

async function getPosts() {
    const postsUrl = "https://jsonplaceholder.typicode.com/posts"
    try {
        const response = await fetch(postsUrl);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const posts = await response.json();
        return posts
        // console.log(posts);

    } catch (error) {
        console.error(error.message);
    }
}
getPosts()

module.exports = getPosts