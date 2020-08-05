import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navigation from "./components/Navigation"
import CreatePost from "./components/CreatePost"
import MainView from "./components/Mainview"
import ViewPosts from "./components/ViewPosts"
import ManagePosts from './components/ManagePosts';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <div className="container">
          <Route path ="/" exact component={MainView} ></Route>
          <Route path ="/create" component={CreatePost} ></Route>
          <Route path ="/manageposts" component={ManagePosts} ></Route>
        </div>
      </Router>


    </div>
  );
}

export default App;
