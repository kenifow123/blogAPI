const { prisma } = require("../lib/prisma");

const allPostsGet = async (req, res) => {
    const posts = await prisma.post.findMany();
    res.json(posts);
}

const createPost = async (req, res) => {
    await prisma.post.create({
        data: {
            title: req.body.title,
            content: req.body.content,
            author: req.user.id,
        }
    })
    res.json({message : "Post successfully created"})
}

module.exports = {
    allPostsGet,
    createPost
}