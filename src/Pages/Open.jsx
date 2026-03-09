import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Open() {
  const navigate = useNavigate();

  // ---------------- CLOCK (Watch) ---------------- //
  const [time, setTime] = useState("");
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // ---------------- BUTTON CLICK ANIMATION ---------------- //
  const [clicked, setClicked] = useState(false);
  const handleLaunch = () => {
    setClicked(true);
    setTimeout(() => {
      navigate("/"); // Redirect after animation
    }, 2000); // Increased waiting time to 5 seconds
  };

  return (
    <>
      <style>{`
        .open-container {
          position: relative; /* for absolute clock & confetti */
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-image: url('/assets/images/opening.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          text-align: center;
          padding: 20px;
          animation: fadeIn 1.2s ease;
        }

        .clock {
          position: absolute;
          top: 20px;
          right: 20px;
          font-size: 22px;
          font-weight: bold;
          color: #000000ff;
          animation: fadeUp 1s ease forwards;
          text-shadow: 1px 1px 5px rgba(0,0,0,0.6);
          z-index: 1000; /* Keep clock above confetti */
        }

        .open-title {
          font-size: 50px;
          margin-bottom: 20px;
          opacity: 0;
          animation: slideDown 1s ease forwards;
          animation-delay: 0.3s;
          color: #FFE100;
          text-shadow: 2px 2px 6px rgba(0,0,0,0.6);
        }

        .open-text {
          max-width: 600px;
          font-size: 20px;
          line-height: 1.6;
          margin-bottom: 20px;
          opacity: 0;
          animation: fadeUp 1s ease forwards;
          animation-delay: 0.8s;
          color: #24241dff;
          text-shadow: 1px 1px 4px rgba(0,0,0,0.6);
        }

        .open-text b {
          font-weight: bold;
        }

        .open-btn {
          padding: 12px 22px;
          background-color: #28a745;
          border: none;
          border-radius: 8px;
          color: #fff;
          font-size: 18px;
          cursor: pointer;
          transition: 0.4s ease;
          opacity: 0;
          animation: fadeUp 1s ease forwards;
          animation-delay: 1.2s;
        }

        .open-btn:hover {
          transform: scale(1.08);
          background-color: #08CB00;
        }

        .open-btn.clicked {
          transform: scale(0.6);
          opacity: 0;
        }

        .loading {
          width: 30px;
          height: 30px;
          border: 4px solid #08CB00;
          border-top-color: transparent;
          border-radius: 50%;
          margin-top: 20px;
          animation: spin 0.8s linear infinite;
        }

        /* Full confetti */
        .confetti-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
          z-index: 500; /* confetti below clock */
        }

        .confetti {
          position: absolute;
          width: 6px;
          height: 10px;
          opacity: 0.9;
          top: -10px;
          animation: confettiFall linear forwards;
        }

        /* Confetti animation */
        @keyframes confettiFall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(600px) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes fadeIn { 0% { opacity: 0; } 100% { opacity: 1; } }
        @keyframes slideDown { 0% { transform: translateY(-30px); opacity: 0; } 100% { transform: translateY(0); opacity: 1; } }
        @keyframes fadeUp { 0% { transform: translateY(30px); opacity: 0; } 100% { transform: translateY(0); opacity: 1; } }
      `}</style>

      <div className="open-container">
        <div className="clock">🕒 {time}</div>
        <h1 className="open-title">
          Welcome to <b>chanatravels.com</b> Launch!
        </h1>
        <p className="open-text">
          We are excited to officially launch <b>chanatravels.com</b>. Discover breathtaking destinations and start planning your next adventure.
        </p>
        <button
          className={`open-btn ${clicked ? "clicked" : ""}`}
          onClick={handleLaunch}
          disabled={clicked}
        >
          Launch
        </button>

        {clicked && <div className="loading"></div>}

        {/* Rich Confetti */}
        {clicked && (
          <div className="confetti-container">
            {[...Array(100)].map((_, i) => {
              const left = Math.random() * 100; // random horizontal position
              const size = Math.random() * 8 + 4; // random size
              const delay = Math.random() * 1.5; // random animation delay
              const duration = Math.random() * 1 + 1.5; // random fall duration
              const colors = ["#ff0", "#f0f", "#0ff", "#f00", "#0f0", "#00f"];
              const color = colors[Math.floor(Math.random() * colors.length)];
              const rotate = Math.random() * 360;
              return (
                <div
                  key={i}
                  className="confetti"
                  style={{
                    left: `${left}%`,
                    width: `${size}px`,
                    height: `${size * 1.5}px`,
                    backgroundColor: color,
                    animationDelay: `${delay}s`,
                    animationDuration: `${duration}s`,
                    transform: `rotate(${rotate}deg)`
                  }}
                ></div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default Open;
