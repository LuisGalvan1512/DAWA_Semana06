import postService from "../services/postService.js";
import userRepository from "../repositories/userRepository.js";

class PostController {
    async getAll(req, res) {
        try {
            const posts = await postService.getPosts();
            res.render("posts", { posts });
        } catch (error) {
            res.status(500).render("error", { error: error.message });
        }
    }

    async renderCreateForm(req, res) {
        try {
            const users = await userRepository.findAll();
            res.render("create-post", { users });
        } catch (error) {
            res.status(500).render("error", { error: error.message });
        }
    }

    async create(req, res) {
        try {
            const { userId, title, content, hashtags, imageUrl } = req.body;
            const postData = {
                title,
                content,
                imageUrl,
                hashtags: hashtags ? hashtags.split(',').map(h => h.trim()) : []
            };
            await postService.createPost(userId, postData);
            res.redirect("/posts");
        } catch (error) {
            const users = await userRepository.findAll();
            res.status(400).render("create-post", { 
                error: error.message, 
                users 
            });
        }
    }

    async renderEditForm(req, res) {
        try {
            const post = await postService.getPostById(req.params.id);
            if (!post) throw new Error("Post no encontrado");
            res.render("edit-post", { post });
        } catch (error) {
            res.status(404).render("error", { error: error.message });
        }
    }

    async update(req, res) {
        try {
            const { title, content, hashtags, imageUrl } = req.body;
            const postData = {
                title,
                content,
                imageUrl,
                hashtags: hashtags ? hashtags.split(',').map(h => h.trim()) : []
            };
            await postService.updatePost(req.params.id, postData);
            res.redirect("/posts");
        } catch (error) {
            const post = await postService.getPostById(req.params.id);
            res.status(400).render("edit-post", { 
                error: error.message, 
                post 
            });
        }
    }

    async delete(req, res) {
        try {
            await postService.deletePost(req.params.id);
            res.redirect("/posts");
        } catch (error) {
            res.status(500).render("error", { error: error.message });
        }
    }
}

export default new PostController();
