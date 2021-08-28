
const express = require ('express');
const tagsRouter = express.Router();
const { getAllTags, getPostsByTagName } = require('../db');


tagsRouter.use(( req, res, next) => {


    next();

})

tagsRouter.get('/',  async ( req, res ) => {

    const tags = await getAllTags();

    res.send(
        {
         tags
        }
    );
});

tagsRouter.get('/:tagName/posts', async (req, res, next) => {
    const { tagName } = req.params
 
    try {
   const allPosts = await getPostsByTagName(tagName)
 
      const tagedPosts = allPosts.filter(post => {
        if (post.active) {
          return true;
      }

      if (req.user && req.user.id === post.author.id) {
          return true;
      }

      return false;
  });
        res.send ({tagedPosts})

    } catch ({ name, message }) {
       next({ name, message })
    }
  });


module.exports= tagsRouter ;