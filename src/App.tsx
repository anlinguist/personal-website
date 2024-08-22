import './App.css';
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Header/Header.tsx";
import AboutMe from './components/MainViews/aboutme.tsx';
import Portfolio from './components/MainViews/portfolio.tsx';
import Contact from './components/MainViews/contact.tsx';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import andrew_photo from './assets/andrew.png'
import Blog from './components/MainViews/blog.tsx';
import BlogPost from './components/Blog/blog_post.tsx';
import { client } from './sanityClient.ts';

function App() {
  const [headerHeight, setHeaderHeight] = useState('big-header');
  const [blogPosts, setBlogPosts] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    client
      .fetch('*[_type == "blogPost"]{...}')
      .then((data) => {
        setBlogPosts(data)
      })
      .catch(console.error);
  }, []);


  const handleScroll = () => {
    if (document.body.scrollTop > 3 || 
      document.documentElement.scrollTop > 3) {
      setHeaderHeight('little-header');
    } else {
      setHeaderHeight('big-header');
    }
  }

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
          <Header headerHeight={headerHeight}></Header>
          <main id="main" className={headerHeight}>
            <Routes>
              <Route path="/" element={<AboutMe />} />
              <Route path="/about-me" element={<AboutMe />} />
              <Route path='/blog' element={<Blog blogPosts={blogPosts}/>} />
              <Route path='/blog/:slug' element={<BlogPost blogPosts={blogPosts}/>} />
              <Route path="/portfolio" element={<Portfolio/>} />
              <Route path="/contact" element={<Contact/>} />
            </Routes>
          </main>
        </Router>
      </HelmetProvider>
    </div>
  );
}

export default App;
