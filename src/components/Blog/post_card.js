import React from "react";
import { NavLink } from "react-router-dom";

const PostCard = ({ title, slug, img }) => (
    <NavLink to={"/blog/" + slug} className="blog-post">
        <img src={img} alt={title} className="blog-post-image"/>
        <h3 dangerouslySetInnerHTML={{__html: title}} className="blog-post-titles"></h3>
    </NavLink>
);

export default PostCard;