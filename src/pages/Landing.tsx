import { useState, useEffect } from 'react';
import DecryptedText from '../components/DecryptedText';
import ScrollVelocity from '../components/ScrollVelocity';
import useIsMobile from '../hooks/useIsMobile';
import { useNavigate } from 'react-router-dom';


const quotes = [
  "Good things take 3 seconds. Great things take us.",
  "This is where boring proposals come to die.",
  "Loading the ‘Shut up and take my money’ portfolio…",
  "If we could, we would hire ourselves!",
  "Spoiler: You’re about to say yes.",
  "The last portfolio you’ll ever need to open.",
  "Warning: May cause immediate trust.",
  "We’re not like the others. You’ll see.",
  "Yes, we’re actually this good.",
  "Loading the reason your project will thank you.",
  "Get ready to close every other tab."
];

function App() {
  const [quote, setQuote] = useState('');
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/portfolio');
  };

  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }, []);

  return (
    <div className="app-container" onClick={handleClick}  style={{ cursor: 'pointer' }}>
      <div className="click-instruction" >
         Click anywhere to continue 
      </div>
      {isMobile ? (
        <div className="quote-container">
          {quote && (
            <DecryptedText
              text={quote}
              speed={50}
              maxIterations={20}
              className="decrypted-text"
              animateOn="view"
              revealDirection="start"
            />
          )}
        </div>
      ) : (
        <div className="desktop-scroll-container">
          <div style={{ height: '10vh' }}></div>
          {quotes.map((q, i) => (
            <div key={i} style={{ marginBottom: '10vh' }}>
              <ScrollVelocity
                text={`${q} • `}
                velocity={i % 2 === 0 ? 3 : -3}
                className="scroll-text"
              />
            </div>
          ))}
          <div style={{ height: '30vh' }}></div>
        </div>
      )}
    </div>
  );
}

export default App;

