import React from 'react';
import { useNavigate } from 'react-router-dom';
import { blogData, Blog } from '../data/blogs';
import '../styles/Blogs.css';

const Blogs: React.FC = () => {
  const navigate = useNavigate();

  const handleCardClick = (blog: Blog) => {
    navigate(`/blog/${blog.id}`, { state: { blog } });
  };

  return (
    <div className="blogs-container">
      <main className="flex justify-content-center main-content w-screen h-screen">
        <div className="mx-auto w-[80vw]">
          <div className="title-animate text-center mb-12">
            <h1>Trading Intelligence Cards</h1>
            <p>Professional trading insights and market analytics at your fingertips</p>
          </div>
          
          <div className="cards-grid">
            {blogData.map((blog) => (
              <div 
                key={blog.id} 
                className={`card card-animate cursor-pointer card-${blog.image.split('-')[0]}`}
                onClick={() => handleCardClick(blog)}
              >
                <div className="card-content">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      {blog.status ? (
                        <>
                          {blog.category === "Stock Analysis" && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up">
                              <path d="M16 7h6v6"></path>
                              <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                            </svg>
                          )}
                          {blog.category === "EV Innovation" && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap">
                              <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                            </svg>
                          )}
                          {blog.category === "Portfolio Analysis" && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pie-chart">
                              <path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path>
                              <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                            </svg>
                          )}
                          <span className={`status-badge status-${blog.status.toLowerCase().replace(' ', '-')}`}>
                            {blog.status}
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="card-category">{blog.category}</span>
                          {blog.category === "Enterprise Security" && (
                            <div className="flex gap-1">
                              <div className="status-dot"></div>
                              <div className="status-dot"></div>
                              <div className="status-dot"></div>
                            </div>
                          )}
                          {blog.category === "Instant Payments" && (
                            <div className="fee-badge">0% Fees</div>
                          )}
                          {blog.category === "AI-Powered Trading" && (
                            <div className="beta-badge">Beta</div>
                          )}
                        </>
                      )}
                    </div>

                    {blog.stockValue ? (
                      <div>
                        <p className="stock-value">{blog.stockValue}</p>
                        <p className="stock-name">{blog.stockName}</p>
                      </div>
                    ) : blog.category === "Portfolio Analysis" ? (
                      <>
                        <h2 className="portfolio-title">Markets</h2>
                        <div className="stocks-list">
                          {blog.stocks?.map((stock, index) => (
                            <div key={index} className="stock-item">
                              <div className="flex items-center gap-2">
                                <div className={`stock-dot ${stock.symbol.toLowerCase()}-dot`}></div>
                                <span>{stock.symbol}</span>
                              </div>
                              <span className={`stock-change-${stock.trend === 'up' ? 'positive' : 'negative'}`}>
                                {stock.change} {stock.trend === 'up' ? '↗' : '↘'}
                              </span>
                            </div>
                          ))}
                        </div>
                      </>
                    ) : (
                      <>
                        {!blog.status && <div className="card-image"></div>}
                        <h2 className="card-title">{blog.title}</h2>
                      </>
                    )}

                    {(blog.stockPrice && blog.stockChange) && (
                      <div className="relative">
                        <div className="absolute top-0 right-0 text-right">
                          <p className="stock-price">{blog.stockPrice}</p>
                          <p className="stock-change">{blog.stockChange}</p>
                        </div>
                      </div>
                    )}

                    {!blog.stockValue && !blog.stocks && (
                      <div className="flex items-center justify-between pt-2">
                        <div className="text-sm text-zinc-600">
                          {blog.category === "Enterprise Security" && (
                            <>
                              <p>SOC 2 Type II Certified</p>
                              <p>Bank-level security protocols</p>
                            </>
                          )}
                          {blog.category === "Instant Payments" && (
                            <>
                              <p>• ACH transfers in under 1 hour</p>
                              <p>• Wire transfers same-day processing</p>
                              <p>• Crypto deposits instant confirmation</p>
                            </>
                          )}
                          {blog.category === "AI-Powered Trading" && (
                            <>
                              <p>• Machine learning risk assessment</p>
                              <p>• Pattern recognition alerts</p>
                              <p>• Automated portfolio rebalancing</p>
                            </>
                          )}
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right">
                          <path d="M7 7h10v10"></path>
                          <path d="M7 17 17 7"></path>
                        </svg>
                      </div>
                    )}
                  </div>

                  <div className="card-footer">
                    <p className="card-description">
                      {blog.excerpt}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="platform-name">VERTEX</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-verified">
                          <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                      </div>
                      <span className="read-more">Read More →</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blogs;