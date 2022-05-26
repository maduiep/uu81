import React from 'react'

const Post = () => {
  return (
    <div class="single-latest-news">
        <a href="single-news.html"><div class="latest-news-bg news-bg-1"></div></a>
        <div class="news-text-box">
            <h3><a href="single-news.html">You will vainly look for fruit on it in autumn.</a></h3>
            <p class="blog-meta">
                <span class="author"><i class="fas fa-user"></i> Admin</span>
                <span class="date"><i class="fas fa-calendar"></i> 27 December, 2019</span>
            </p>
            <p class="excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laborum autem, dolores inventore, beatae nam.</p>
            <a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
        </div>
    </div>
  )
}

export default Post