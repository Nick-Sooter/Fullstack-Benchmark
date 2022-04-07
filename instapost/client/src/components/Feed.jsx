import React from "react";
import Post from "./Post.jsx";
import Moment from "moment";

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //username: '',
      //imageUrl: '',
      //body: '',
      //likes: '',
      posts: []
    };
  }
  // fetch server data
  componentDidMount() {
    fetch('api/posts')
      .then(response => response.json())
      .then(json => {
        //console.log(json);
        this.setState({
          posts: json.posts
        });
      });
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch('api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: this.state.username,
        timestamp: moment(this.state.createdAt).fromNow(),
        image: this.state.imageUrl,
        body: this.state.body,
        likes: this.state.likes
      })
    });
  }

  /*
  getPosts(posts) {
    //let time = moment().fromNow();
    return posts.map((post, index) => {
      <div key={index}>
        {post.username}
        {time}
        {post.imageUrl}
        {post.body}
        {post.likes}
      </div>;
    });
  }
  */

  render() {
    return (
      <div className='feed'>
        {/* section for post form */}

        {/* section for all posts */}
        <Post data={this.state.posts} />
      </div>
    );
  }
}

export default Feed;

/*
//Is this the right way to mount component?
componentDidMount() {
  fetch('api/posts')
    .then(response => response.json())
    .then(json => {
      //console.log(json);
      this.setState({
        json.posts: [
          {
            _id: json.posts._id,
            user: json.posts.username,
            body: json.posts.body,
            image: json.posts.imageUrl,
            likes: json.posts.likes,
            timestamp: moment(json.posts.createdAt).fromNow();
          },
        ],
      });
    });
}
*/