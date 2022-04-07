import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Feed from './components/Feed.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="nav">
          <span className="nav__logo" >
            Instapost
          </span>
        </div>

        <div className="main">
          <Feed />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

/*
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      //posts: []
    };
  }

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

  getPosts(posts) {
    //let time = moment().fromNow();
    return posts.map((post, index) => {
      <div key={index}>
        {post.username}
        {time}
        {post.imageUrl}
        {post.likes}
      </div>;
    });
  }

  render() {
    return (
      <div>
        <div className="nav">
          <span className="nav__logo" >
            Instapost
          </span>
        </div>

        <div className="main">
          //<Feed />
          {this.getPosts(this.state.posts)}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
*/