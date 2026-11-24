import { useState } from "react";
import confetti from "canvas-confetti";
import "./App.css";

const INITIAL_CANDLES = [
  { id: "6", label: "6", isLit: true },
  { id: "3", label: "3", isLit: true },
];

function NumberCandleShape({ digit }) {
  return (
    <svg
      className="candle-svg"
      viewBox="0 0 80 100"
      width="68"
      height="86"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id={`stripes-${digit}`}
          width="18"
          height="18"
          patternTransform="rotate(-35)"
          patternUnits="userSpaceOnUse"
        >
          <rect x="0" y="0" width="9" height="18" fill="#f8fafc" />
          <rect x="9" y="0" width="5" height="18" fill="#38bdf8" />
          <rect x="14" y="0" width="4" height="18" fill="#0284c7" />
        </pattern>
      </defs>

      {/* Blaga senka ispod svećice */}
      <ellipse cx="40" cy="94" rx="22" ry="4" fill="rgba(0, 0, 0, 0.35)" />

      {/* Tamni okvir radi oštrine i kontrasta */}
      {digit === "6" && (
        <path
          d="M 54 22 C 34 22, 22 38, 22 60 C 22 76, 31 85, 43 85 C 54 85, 61 77, 61 67 C 61 57, 54 50, 43 50 C 34 50, 27 55, 24 62"
          fill="none"
          stroke="#0c4a6e"
          strokeWidth="18"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}

      {digit === "3" && (
        <path
          d="M 24 25 L 55 25 L 38 48 C 50 48, 59 55, 59 67 C 59 79, 49 85, 36 85 C 28 85, 22 82, 19 78"
          fill="none"
          stroke="#0c4a6e"
          strokeWidth="18"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}

      {/* Glavno prugasto telo svećice */}
      {digit === "6" && (
        <path
          d="M 54 22 C 34 22, 22 38, 22 60 C 22 76, 31 85, 43 85 C 54 85, 61 77, 61 67 C 61 57, 54 50, 43 50 C 34 50, 27 55, 24 62"
          fill="none"
          stroke={`url(#stripes-6)`}
          strokeWidth="13"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}

      {digit === "3" && (
        <path
          d="M 24 25 L 55 25 L 38 48 C 50 48, 59 55, 59 67 C 59 79, 49 85, 36 85 C 28 85, 22 82, 19 78"
          fill="none"
          stroke={`url(#stripes-3)`}
          strokeWidth="13"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}

      {/* Tanak sjaj po sredini voska */}
      {digit === "6" && (
        <path
          d="M 54 22 C 34 22, 22 38, 22 60 C 22 76, 31 85, 43 85 C 54 85, 61 77, 61 67 C 61 57, 54 50, 43 50 C 34 50, 27 55, 24 62"
          fill="none"
          stroke="rgba(255, 255, 255, 0.35)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}

      {digit === "3" && (
        <path
          d="M 24 25 L 55 25 L 38 48 C 50 48, 59 55, 59 67 C 59 79, 49 85, 36 85 C 28 85, 22 82, 19 78"
          fill="none"
          stroke="rgba(255, 255, 255, 0.35)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}

export default function App() {
  const [candles, setCandles] = useState(INITIAL_CANDLES);

  const allBlownOut = candles.every((candle) => !candle.isLit);

  function extinguishCandle(index) {
    setCandles((prev) => {
      if (!prev[index].isLit) return prev;

      const updated = prev.map((candle, i) =>
        i === index ? { ...candle, isLit: false } : candle
      );

      if (updated.every((candle) => !candle.isLit)) {
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
    setCandles(INITIAL_CANDLES);
  }

  function DadCharacter() {
  return (
    <div className="dad-peeking" aria-hidden="true">
      <svg viewBox="0 0 140 120" width="150" height="128">
        {/* Ramena / majica */}
        <path
          d="M 24 118 C 26 88, 46 78, 70 78 C 94 78, 114 88, 116 118 Z"
          fill="#2563eb"
        />
        {/* Vrat */}
        <rect x="61" y="66" width="18" height="16" rx="6" fill="#f1c29b" />
        {/* Glava */}
        <circle cx="70" cy="48" r="27" fill="#f5cba7" />
        {/* Uši */}
        <ellipse cx="42" cy="49" rx="5.5" ry="8" fill="#f5cba7" />
        <ellipse cx="98" cy="49" rx="5.5" ry="8" fill="#f5cba7" />
        {/* Kosa */}
        <path
          d="M 44 43 C 42 32, 47 22, 54 18 C 56 13, 61 12, 65 15 C 69 11, 75 11, 78 16 C 83 13, 88 15, 89 20 C 95 24, 97 33, 96 43 C 92 34, 86 29, 78 28 C 73 25, 67 25, 62 28 C 54 29, 48 34, 44 43 Z"
          fill="#94a3b8"
        />
        {/* Obrve */}
        <path
          d="M 52 40 Q 58 36 64 40"
          fill="none"
          stroke="#475569"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M 76 40 Q 82 36 88 40"
          fill="none"
          stroke="#475569"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Oči */}
        <circle cx="58" cy="47" r="3" fill="#1e293b" />
        <circle cx="82" cy="47" r="3" fill="#1e293b" />
        {/* Rumenilo */}
        <ellipse cx="49" cy="54" rx="4.5" ry="2.5" fill="#fb7185" opacity="0.45" />
        <ellipse cx="91" cy="54" rx="4.5" ry="2.5" fill="#fb7185" opacity="0.45" />
        {/* Osmeh */}
        <path
          d="M 57 58 Q 70 70 83 58"
          fill="none"
          stroke="#1e293b"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

  return (
    <div className="page">
      <main className="card">
        {!allBlownOut && <h1>Zamisli želju i klikni na svećice da ih ugasiš.</h1>}
        <div className="cake-stage">
          {allBlownOut && <DadCharacter />}
          <div className="candles-row">
            {candles.map((candle, index) => (
              <button
                key={candle.id}
                type="button"
                className={`candle ${candle.isLit ? "is-lit" : "is-out"}`}
                onClick={() => extinguishCandle(index)}
                disabled={!candle.isLit}
                aria-label={`Svećica ${candle.label}`}
              >
                {candle.isLit ? (
                  <span className="flame" />
                ) : (
                  <span className="smoke" />
                )}
                <span className="wick" />
                <NumberCandleShape digit={candle.label} />
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
            <h2>Srećan rođendan, tata!</h2>
            <p>
              Hvala ti za svu podršku, strpljenje i najbolje savete. Neka
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