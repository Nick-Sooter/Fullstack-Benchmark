const express = require('express');

const Post = require('../database/Post.js');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client/dist'));


app.get('/api/posts', function (req, res) {
  // access collection of posts
  Post.find({}).exec(function (err, allData) {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    return res.status(200).json({
      posts: allData
    });
  });

});

app.post('api/posts', function (req, res) {
  Posts.create(req.body, function (err, newPost) {
    if (err) {
      console.log(err);
    }
    return res.status(200).json({
      post: newPost
    });
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
