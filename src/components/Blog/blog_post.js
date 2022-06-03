import { Helmet } from 'react-helmet';
import React from 'react';
import PWLoader from '../Random/loader';

class BlogPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loaded: '', slug: ''};
    }

    componentDidMount() {
        if (this.props.dataObject) {
            this.updatePage()
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.dataObject !== prevProps.dataObject) {
            this.updatePage()
        }
    }

    updatePage = () => {
        let slug = window.location.pathname.replace("/blog/", "")
        let title = false;
        let id = false;
        for (const item of this.props.dataObject) {
            if (item.slug === slug) {
                title = item.title.rendered;
                id = item.id
                break;
            }
        }
        if (title) {
            // use id to obtain the blog
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };
            
            let bp_url = "https://blog.anlinguist.com/wp-json/wp/v2/posts/" + id.toString()

            fetch(bp_url, requestOptions)
                .then(response => response.json())
                .then(result => console.log(this.setState({blogtitle: title, loaded: 'loaded-blogs', blogid: id, bp_body: result.content.rendered.replaceAll("https://blog.anlinguist.com/", "/blog/").replaceAll("/\"", "\"")})))
                .catch(error => console.log('error', error));
        }
    }

    render(props) {
        return (
            <div id="ind_blog_post">
                <Helmet>
                    <title>{this.state.blogtitle}</title>
                </Helmet>
                <PWLoader loaded={this.state.loaded} />
                <div id='blog-post-container' className={this.state.loaded}>
                    <h2 id="blog-title" className="section-titles">{this.state.blogtitle}</h2>
                    <div dangerouslySetInnerHTML={{__html: this.state.bp_body}}></div>
                </div>
            </div>
        );
    }
}

export default BlogPost;