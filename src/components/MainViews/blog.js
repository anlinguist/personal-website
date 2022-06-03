import { Helmet } from 'react-helmet';
import React from 'react';
import PostCard from '../Blog/post_card';
import PWLoader from '../Random/loader';

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loaded: '', blog_posts: []};
    }

    componentDidMount() {
        if (this.props.dataObject) {
            this.setState({loaded: 'loaded-blogs', blog_posts: this.props.dataObject})
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.dataObject !== prevProps.dataObject) {
            this.setState({loaded: 'loaded-blogs', blog_posts: this.props.dataObject})
        }
    }

    render(props) {
        return (
            <div id="blog">
                <Helmet>
                    <title>Andrew's Blog</title>
                </Helmet>
                <h2 id="blog-title" className="section-titles">Blog</h2>
                <PWLoader loaded={this.state.loaded} />
                <div id='blog-posts-container' className={this.state.loaded}>
                    {/* here, need to create flex box and then map the PostCards */}
                        {this.state.blog_posts.map(post => (
                            <PostCard title={post.title.rendered} img={post.jetpack_featured_media_url} slug={post.slug} key={post.id.toString()}/>
                        ))}
                </div>
            </div>
        );
    }
}

export default Blog;