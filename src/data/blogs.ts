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

export const blogData: Blog[] = [
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
