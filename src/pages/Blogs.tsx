import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Blogs.css';

// Sample blog data (move this to a separate file if needed)
export const blogData = [
  {
    id: 1,
    title: "NVIDIA's AI Chip Dominance Drives Market Growth",
    category: "Stock Analysis",
    date: "2024-01-15",
    author: "Sarah Chen",
    readTime: "5 min read",
    image: "nvidia-image",
    excerpt: "AI chip demand drives exceptional growth. Strong quarterly earnings exceeded analyst expectations by 15%.",
    content: `
      <h2>The AI Revolution Continues</h2>
      <p>NVIDIA Corporation has once again demonstrated its leadership in the AI chip market with outstanding quarterly results that surpassed analyst expectations by a remarkable 15%. The company's strategic positioning in artificial intelligence and machine learning technologies has positioned it for sustained growth.</p>
      
      <h3>Market Performance</h3>
      <p>With NVDA stock surging 8.24% in today's trading session, reaching $892.13 per share, investors are witnessing the powerful impact of AI-driven demand. The $67.82 increase represents one of the most significant single-day gains in the company's history.</p>
      
      <h3>Future Outlook</h3>
      <p>Industry analysts predict continued growth as AI adoption accelerates across multiple sectors including healthcare, autonomous vehicles, and data centers. NVIDIA's innovative approach to GPU technology continues to set industry standards.</p>
    `,
    tags: ["AI", "Technology", "Stocks", "Investing"],
    status: "Live",
    stockValue: "NVDA +8.24%",
    stockName: "NVIDIA Corporation",
    stockPrice: "$892.13",
    stockChange: "+$67.82"
  },
  {
    id: 2,
    title: "Military-Grade Security in Modern Trading Platforms",
    category: "Enterprise Security",
    date: "2024-01-14",
    author: "Michael Rodriguez",
    readTime: "4 min read",
    image: "security-image",
    excerpt: "Enterprise security with SOC 2 Type II certification and bank-level security protocols.",
    content: `
      <h2>Protecting Your Investments</h2>
      <p>In today's digital trading environment, security is paramount. Our platform implements military-grade encryption and two-factor authentication to ensure your assets and data remain protected.</p>
      
      <h3>SOC 2 Type II Certification</h3>
      <p>This rigorous certification demonstrates our commitment to security, availability, processing integrity, confidentiality, and privacy. Regular audits ensure we maintain the highest standards.</p>
      
      <h3>Bank-Level Security Protocols</h3>
      <p>We employ the same security measures used by leading financial institutions, including end-to-end encryption, secure socket layer technology, and regular security penetration testing.</p>
    `,
    tags: ["Security", "Technology", "Encryption"]
  },
  {
    id: 3,
    title: "Tesla's Autonomous Driving Breakthrough",
    category: "EV Innovation",
    date: "2024-01-13",
    author: "Jessica Wang",
    readTime: "6 min read",
    image: "tesla-image",
    excerpt: "Cybertruck production ramping up. Autonomous driving technology showing promising results in latest trials.",
    content: `
      <h2>The Future of Transportation</h2>
      <p>Tesla continues to push the boundaries of electric vehicle technology and autonomous driving capabilities. Recent trials have shown significant improvements in AI-driven navigation systems.</p>
      
      <h3>Cybertruck Production Update</h3>
      <p>With production scaling efficiently, Tesla is positioned to meet the overwhelming demand for its revolutionary Cybertruck. The unique design and advanced features are setting new standards in the automotive industry.</p>
      
      <h3>Autonomous Driving Milestones</h3>
      <p>Latest testing data indicates a 40% improvement in obstacle detection and response times. The neural network processing has become more efficient, allowing for safer and more reliable autonomous operation.</p>
    `,
    tags: ["Automotive", "EV", "Technology", "Innovation"],
    status: "EV Leader",
    stockValue: "TSLA +4.71%",
    stockName: "Tesla Inc.",
    stockPrice: "$248.73",
    stockChange: "+$11.19"
  },
  {
    id: 4,
    title: "Instant Payment Processing Revolution",
    category: "Instant Payments",
    date: "2024-01-12",
    author: "David Thompson",
    readTime: "3 min read",
    image: "payments-image",
    excerpt: "Lightning-fast deposits & withdrawals with zero fees and instant crypto confirmation.",
    content: `
      <h2>Seamless Financial Transactions</h2>
      <p>Modern trading requires instant access to funds. Our payment processing system eliminates traditional delays, providing ACH transfers in under 1 hour and same-day wire processing.</p>
      
      <h3>Zero Fee Advantage</h3>
      <p>Unlike traditional platforms that charge significant fees for transfers, we've eliminated these costs to provide better value for our users. This represents substantial savings for active traders.</p>
      
      <h3>Crypto Integration</h3>
      <p>Cryptocurrency deposits receive instant confirmation, allowing traders to capitalize on market opportunities without delay. The integration supports major cryptocurrencies with plans to expand.</p>
    `,
    tags: ["Payments", "Finance", "Crypto", "Technology"]
  },
  {
    id: 5,
    title: "Market Trends and Portfolio Performance",
    category: "Portfolio Analysis",
    date: "2024-01-11",
    author: "Robert Kim",
    readTime: "7 min read",
    image: "portfolio-image",
    excerpt: "Real-time market overview with performance indicators. Diversified portfolio showing strong upward momentum.",
    content: `
      <h2>Current Market Analysis</h2>
      <p>Technology stocks continue to lead market gains, with NVIDIA showing exceptional performance at +8.24%. The broader market demonstrates resilience despite economic uncertainties.</p>
      
      <h3>Top Performers</h3>
      <p>NVDA, TSLA, and AMZN are leading the charge with significant gains. The AI and electric vehicle sectors continue to attract substantial investor interest and capital inflow.</p>
      
      <h3>Portfolio Strategy</h3>
      <p>Diversification remains key to managing risk while capturing growth opportunities. Our analysis suggests continued strength in technology with emerging opportunities in renewable energy.</p>
    `,
    tags: ["Investing", "Markets", "Stocks", "Analysis"],
    status: "Portfolio",
    stocks: [
      { symbol: "NVDA", change: "+8.24%", trend: "up" },
      { symbol: "TSLA", change: "+4.71%", trend: "up" },
      { symbol: "AMZN", change: "+2.18%", trend: "up" },
      { symbol: "META", change: "-1.24%", trend: "down" },
      { symbol: "GOOGL", change: "+1.87%", trend: "up" }
    ]
  },
  {
    id: 6,
    title: "AI-Powered Trading Algorithms",
    category: "AI-Powered Trading",
    date: "2024-01-10",
    author: "Amanda Lewis",
    readTime: "5 min read",
    image: "features-image",
    excerpt: "Smart algorithms & predictive analytics using machine learning for risk assessment and pattern recognition.",
    content: `
      <h2>The Next Generation of Trading</h2>
      <p>Artificial intelligence is transforming how traders approach the markets. Our beta program demonstrates the power of machine learning in identifying patterns and managing risk.</p>
      
      <h3>Machine Learning Risk Assessment</h3>
      <p>Advanced algorithms analyze thousands of data points in real-time to assess risk levels and suggest optimal trading strategies. This represents a significant advancement over traditional technical analysis.</p>
      
      <h3>Automated Portfolio Management</h3>
      <p>The system automatically rebalances portfolios based on market conditions and risk tolerance, ensuring optimal performance while maintaining desired risk exposure.</p>
    `,
    tags: ["AI", "Algorithms", "Trading", "Technology"]
  }
];

export interface Blog {
  id: number;
  title: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string;
  tags: string[];
  status?: string;
  stockValue?: string;
  stockName?: string;
  stockPrice?: string;
  stockChange?: string;
  stocks?: Array<{ symbol: string; change: string; trend: string }>;
}

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