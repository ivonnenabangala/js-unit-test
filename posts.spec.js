const getPosts = require('./posts');  // Import the function
jest.setTimeout(20000);

describe("Tests for fetching posts from JsonPlaceHolder API", () => {

    it("Should throw an error if the response is not OK", async () => {
        const invalidUrl = "https://jsonplaceholder.typicode.com/invalidendpoint";

        try {
            await getPosts(invalidUrl);
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toBe("Response status: 404");
        }
    });

    it("Should fetch posts if the endpoint is valid and if there are posts in the endpoint", async () => {
        const posts = await getPosts();

        expect(posts).toBeDefined();
        expect(posts.length).toBeGreaterThan(0);

    });
    it("Should check if the post contain a certain field", async () => {
        const posts = await getPosts();

        expect(posts[0]).toHaveProperty("id");
        expect(posts[0]).toHaveProperty("title");
    });


});
