import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { blogData, Blog } from './Blogs';
import '../styles/BlogDetail.css';

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // Get blog data from navigation state or find by ID
  const blog = location.state?.blog || blogData.find(b => b.id === parseInt(id || ''));

  useEffect(() => {
    // Scroll progress handler
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    // Parallax effect for hero image
    const handleParallax = () => {
      const scrolled = window.scrollY;
      const heroImg = document.getElementById('hero-image');
      if (heroImg && scrolled < 1000) {
        heroImg.style.transform = `translateY(${scrolled * 0.15}px) scale(${1 + scrolled * 0.0002})`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleParallax);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleParallax);
    };
  }, []);

  const handleBackClick = () => {
    navigate('/blogs');
  };

  if (!blog) {
    return (
      <div className="blog-detail-container">
        <div className="blog-not-found">
          <h1>Blog Not Found</h1>
          <button onClick={handleBackClick} className="back-button">
            Back to Blogs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-detail-page">
      {/* Noise Texture */}
      <div className="grain"></div>


      {/* Main Content */}
      <main className="blog-main-content">
        
        {/* Header Section */}
        <header className="blog-header-section">
          <div className="header-container">
            <div className="header-meta">
              <div className="badge-container">
                <span className="badge badge-primary">New Campaign</span>
                <span className="badge badge-secondary">Read: 5 min</span>
              </div>
              <div className="date-info">
                <span>Published {blog.date}</span>
                <span className="separator"></span>
                <span>London, UK</span>
              </div>
            </div>

            <h1 className="blog-title-main">
              {blog.title.split(' ').slice(0, 2).join(' ')}<br />
              <span className="title-gradient">
                {blog.title.split(' ').slice(2).join(' ')}
              </span>
            </h1>
          </div>
        </header>

        {/* Hero Image Parallax Container */}
        <div className="hero-image-container">
          <div className="hero-overlay"></div>
          <img 
            id="hero-image"
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2200&auto=format&fit=crop" 
            alt="Article Hero" 
            className="hero-image"
          />
          {/* Image Caption Overlay */}
          <div className="image-caption">
            <p className="caption-text">
              Img 01 — The digital frontier of legislative change
            </p>
          </div>
        </div>

        {/* Layout Grid */}
        <div className="blog-layout-grid">
          
          {/* Sticky Sidebar (Left) */}
          <aside className="blog-sidebar">
            <div className="sidebar-content">
              {/* Author */}
              <div className="author-info">
                <div className="author-avatar">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200" alt="Author" />
                </div>
                <div>
                  <p className="author-name">{blog.author}</p>
                  <p className="author-role">Editor in Chief</p>
                </div>
              </div>

             
              {/* Tags */}
              <div className="tags-section">
                <span className="section-label">Topics</span>
                <div className="tags-container">
                  {blog.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Article Body (Right) */}
          <article className="blog-article-content">
            
            <div className="article-body">
              <p className="article-intro drop-cap">
                {blog.excerpt}
              </p>
              
              <p className="article-paragraph">
                Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.
              </p>

              {/* Key Point Box */}
              <div className="key-point-box">
                <div className="key-point-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
                  </svg>
                </div>
                <h3 className="key-point-label">Key Insight</h3>
                <p className="key-point-text">
                  "Digital infrastructure is no longer just a support system; it is the battlefield itself."
                </p>
              </div>

              <h2 className="article-heading">
                <span className="heading-number">01.</span>
                The Structure of Change
              </h2>

              <p className="article-paragraph">
                Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. 
              </p>

              {/* Wide Image in content */}
              <figure className="content-image">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1800&auto=format&fit=crop" 
                  alt="Data visualization" 
                  className="image-content"
                />
                <figcaption className="image-caption-inline">
                  <div className="caption-badge">
                    <span className="badge-text">Figure 2.1</span>
                  </div>
                </figcaption>
              </figure>

              <p className="article-paragraph">
                Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus molestie pellentesque.
              </p>

              <blockquote className="article-quote">
                <p className="quote-text">
                  To ignore the digital realm is to ignore the primary venue of modern discourse.
                </p>
              </blockquote>

              <p className="article-paragraph">
                Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum.
              </p>
              
              <div className="divider"></div>


            </div>
          </article>
        </div>

        {/* Trusted Section */}
        <section className="trusted-section">
          <div className="trusted-grid">
            <div className="grid-header">
              <span className="header-label">Trusted By</span>
            </div>
            <div className="grid-item">
              <div className="item-overlay"></div>
             Item1
            </div>
            <div className="grid-item">
              <div className="item-overlay"></div>
             Item2
            </div>
            <div className="grid-item">
              <div className="item-overlay"></div>
                 Item3
            </div>
            <div className="grid-item">
              <div className="item-overlay"></div>
                 Item4
            </div>
            <div className="grid-item">
              <div className="item-overlay"></div>
                 Item5
            </div>
          </div>
        </section>

      </main>


    </div>
  );
};

export default BlogDetail;