const express = require("express");
const router = express.Router();
const Post = require("../models/Posts");


// For Get
router.get("/", async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }
    catch(err) {
        res.json({message: err})
    }
});


// For Posts
router.post("/", (req, res) => {
    const post = new Post({
        title: req.body.title,
        body: req.body.body
    });

    post.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({message: err})
        })
})

// For specific Posts

router.get("/:Id", async (req, res) => {
    try{
        const specificPost = await Post.findById(req.params.Id);
        res.json(specificPost);
    } catch(err) {
        res.json({message: err});
    }
})

// To delete Post

router.delete("/:Id", async(req, res) => {
    try{
        const deletedPost= await Post.remove({ _id: req.params.Id});
        res.json(deletedPost);
    } catch(err) {
        res.json({message: err});
    }
});


// To update the post

router.patch("/:Id", async(req, res) => {
    try{
        const updatedPost = await Post.updateOne({ _id: req.params.Id}, {$set: {title: req.body.title}})
        res.json(updatedPost)
    } catch(err) {
            res.json({message: err});
        }
})

module.exports = router;