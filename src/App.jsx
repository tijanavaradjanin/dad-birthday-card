import { useState } from "react";
import confetti from "canvas-confetti";
import "./App.css";

export default function App() {
  const [candles, setCandles] = useState([true, true, true, true]);

  const allBlownOut = candles.every((isLit) => !isLit);

  function extinguishCandle(index) {
    setCandles((prev) => {
      if (!prev[index]) return prev;

      const updated = prev.map((isLit, i) => (i === index ? false : isLit));

      if (updated.every((isLit) => !isLit)) {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
        });
      }

      return updated;
    });
  }

  function resetCandles() {
    setCandles([true, true, true, true]);
  }

  return (
    <div className="page">
      <main className="card">
        <h1>Srećan rođendan, tata!</h1>
        <p className="subtitle">
          {allBlownOut
            ? "Sve svećice su ugašene — želja je zamišljena!"
            : "Zamisli želju i klikni na svaku svećicu da je ugasiš."}
        </p>

        <div className="cake-stage">
          <div className="candles-row">
            {candles.map((isLit, index) => (
              <button
                key={index}
                type="button"
                className={`candle ${isLit ? "is-lit" : "is-out"}`}
                onClick={() => extinguishCandle(index)}
                disabled={!isLit}
                aria-label={`Svećica ${index + 1}`}
              >
                {isLit ? <span className="flame" /> : <span className="smoke" />}
                <span className="wick" />
                <span className="candle-body" />
              </button>
            ))}
          </div>

          <div className="cake">
            <div className="tier tier-top">
              <div className="frosting" />
            </div>
            <div className="tier tier-bottom">
              <div className="frosting" />
            </div>
            <div className="plate" />
          </div>
        </div>

        {allBlownOut && (
          <section className="surprise">
            <h2>Srećan 63. rođendan!</h2>
            <p>
              Hvala ti za svu podršku, strpljenje i najbolje savete. Neka ti
              ova godina donese puno zdravlja, smeha i lepih trenutaka!
            </p>
            <button type="button" className="reset-btn" onClick={resetCandles}>
              Upali svećice ponovo
            </button>
          </section>
        )}
      </main>
    </div>
  );
}