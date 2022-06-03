import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Header/Header";
import AboutMe from './components/MainViews/aboutme';
import Portfolio from './components/MainViews/portfolio';
import Blog from './components/MainViews/blog';
import Contact from './components/MainViews/contact';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import andrew_photo from './assets/andrew.png'
import BlogPost from './components/Blog/blog_post';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {headerHeight: 'big-header', dataObject: false};
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    // need to get all blog posts and pass them to the blog component
    this.getBlogPosts();
  }
  
  getBlogPosts = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://blog.anlinguist.com/wp-json/wp/v2/posts", requestOptions)
      .then(response => response.json())
      .then(parsedJSON => this.setState({blog_posts: parsedJSON}))
      .catch(error => console.log('error', error));
  }

  handleScroll = () => {
    if (document.body.scrollTop > 3 || 
      document.documentElement.scrollTop > 3) {
      this.setState({
        headerHeight: 'little-header'
      });
    } else {
      this.setState({
        headerHeight: 'big-header'
      });
    }
  }

  render() {
    return (
      <div className="App">
        <HelmetProvider>
          <Helmet>
            <title>About Andrew</title>
            <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'></link>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <link rel="icon" href={andrew_photo} type="image/x-icon"></link>
          </Helmet>
          <Router>
            <Header headerHeight={this.state.headerHeight}></Header>
            <main id="main" className={this.state.headerHeight}>
              <Routes>
                <Route path="/" element={<AboutMe />} />
                <Route path="/about-me" element={<AboutMe />} />
                <Route path="/portfolio" element={<Portfolio/>} />
                <Route path='/blog' element={<Blog dataObject={this.state.blog_posts}/>} />
                <Route path='/blog/:slug' element={<BlogPost dataObject={this.state.blog_posts}/>} />
                <Route path="/contact" element={<Contact/>} />
              </Routes>
            </main>
          </Router>
        </HelmetProvider>
      </div>
    );
  }
}

export default App;
