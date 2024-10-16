import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Header/Header.tsx";
import AboutMe from './components/MainViews/aboutme.tsx';
import Portfolio from './components/MainViews/portfolio.tsx';
import Contact from './components/MainViews/contact.tsx';
import { useState } from "react";
import Blog from "./components/MainViews/blog.tsx";
import BlogPost from "./components/Blog/blog_post.tsx";

function WebsiteRoutes({blogPosts}: any) {
    const [headerHeight, setHeaderHeight] = useState('big-header');

    const handleScroll = (e: any) => {
        if (e.target.scrollTop > 0) {
            setHeaderHeight('little-header');
        } else {
            setHeaderHeight('big-header');
        }
    }

  return (
    <Router>
          <Header headerHeight={headerHeight}></Header>
          <main id="main" onScroll={handleScroll} className={headerHeight}>
            <Routes>
              <Route path="/" element={<AboutMe />} />
              <Route path="/about-me" element={<AboutMe />} />
              <Route path='/blog' element={<Blog blogPosts={blogPosts} />} />
              <Route path='/blog/:slug' element={<BlogPost blogPosts={blogPosts} />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
    </Router>
  )
}

export default WebsiteRoutes