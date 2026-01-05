import { useState, useEffect } from 'react'
import './index.css'

function App() {
  const [isRounded, setIsRounded] = useState(false)
  const [copied, setCopied] = useState(false)
  const [currentTime] = useState(new Date().toISOString())

  const CA = "0x0000000000000000000000000000000000000000"

  useEffect(() => {
    if (isRounded) {
      document.body.classList.add('rounded-mode')
    } else {
      document.body.classList.remove('rounded-mode')
    }
  }, [isRounded])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(CA)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main>
      <div className="header-meta">
        <div className="official-logo">
          <img src="/logo.png" alt="Normalcoin Logo" />
          <span>normalcoin</span>
        </div>
        <div className="header-right">
          <div className="status-row">
            SYSTEM STATUS: <span className="status-pill">OPERATIONAL</span>
          </div>
          <div className="status-row" style={{ color: '#888', fontStyle: 'italic' }}>
            LAST VERIFIED: {currentTime.split('T')[0]}
          </div>
          <div className="mode-control">
            <span>NORMAL MODE:</span>
            <input
              type="checkbox"
              checked={!isRounded}
              onChange={() => setIsRounded(!isRounded)}
            />
            <span style={{ minWidth: '25px' }}>{isRounded ? 'OFF' : 'ON'}</span>
          </div>
        </div>
      </div>

      <header style={{ marginBottom: '5rem' }}>
        <h1>Normalcoin</h1>
        <p className="tagline">Just a normal coin.</p>
        <p style={{ color: '#666', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
          Ref. No: 2026-NORMAL-01 — "Coins got complicated. Normalcoin didn't."
        </p>

        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          <button className="btn-primary" onClick={() => window.open(`https://jup.ag/swap/SOL-${CA}`, '_blank')}>Execute Buy Order</button>
          <button className="btn-secondary" onClick={() => window.open(`https://dexscreener.com/solana/${CA}`, '_blank')}>View Real-time Chart</button>
        </div>
      </header>

      <section data-label="§ 1.0 ASSET REGISTRY">
        <div style={{ marginBottom: '1.5rem' }}>
          <span className="label">OFFICIAL CONTRACT ADDRESS (SOLANA)</span>
        </div>
        <div className="ca-box">
          <code>{CA}</code>
          <button
            className="btn-secondary"
            style={{ padding: '0.5rem 1rem', fontSize: '0.75rem', border: '1px solid #000' }}
            onClick={copyToClipboard}
          >
            {copied ? 'COPIED TO CLIPBOARD' : 'COPY ADDRESS'}
          </button>
        </div>
      </section>

      <section data-label="§ 2.0 ACQUISITION PROCEDURE">
        <div className="procedure-list">
          <div className="procedure-item">
            <div>
              <p style={{ fontWeight: 700 }}>Initialize Wallet</p>
              <p style={{ fontSize: '0.85rem', color: '#555' }}>Ensure a compatible Solana wallet is active and funded with SOL.</p>
            </div>
          </div>
          <div className="procedure-item">
            <div>
              <p style={{ fontWeight: 700 }}>Exchange Navigation</p>
              <p style={{ fontSize: '0.85rem', color: '#555' }}>Access a verified decentralized exchange (DEX) on the Solana network.</p>
            </div>
          </div>
          <div className="procedure-item">
            <div>
              <p style={{ fontWeight: 700 }}>Execute Swap</p>
              <p style={{ fontSize: '0.85rem', color: '#555' }}>Input the official Contract Address and confirm the transaction.</p>
            </div>
          </div>
        </div>
      </section>

      <section data-label="§ 3.0 SPECIFICATIONS (SUMMARY)">
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            <tr>
              <th style={{ backgroundColor: '#f4f4f4', padding: '1rem', border: '1px solid #000', width: '30%', textAlign: 'left', fontSize: '0.7rem' }}>TICKER SYMBOL</th>
              <td style={{ padding: '1rem', border: '1px solid #000', fontWeight: 700 }}>NORMAL</td>
            </tr>
            <tr>
              <th style={{ backgroundColor: '#f4f4f4', padding: '1rem', border: '1px solid #000', width: '30%', textAlign: 'left', fontSize: '0.7rem' }}>PRIMARY NETWORK</th>
              <td style={{ padding: '1rem', border: '1px solid #000' }}>SOLANA (LAYER 1)</td>
            </tr>
            <tr>
              <th style={{ backgroundColor: '#f4f4f4', padding: '1rem', border: '1px solid #000', width: '30%', textAlign: 'left', fontSize: '0.7rem' }}>COMPLEXITY RATING</th>
              <td style={{ padding: '1rem', border: '1px solid #000' }}>0.0 (NOMINAL)</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section data-label="§ 4.0 PHILOSOPHICAL THESIS">
        <p style={{ marginBottom: '1.2rem', fontSize: '1.1rem', fontWeight: 500 }}>
          Normalcoin returns to structural origins.
        </p>
        <p style={{ color: '#333', marginBottom: '1rem' }}>
          Modern digital assets have entered a cycle of hyper-narrative inflation. Users are expected to decode technical whitepapers, track multi-chain liquidity, and participate in complex governance models.
        </p>
        <p style={{ color: '#333' }}>
          Normalcoin rejects these requirements. By adhering to a "normal" standard, we provide an asset that is intentionally unremarkable, predictable, and functional. This is not a manifesto; it is documentation of a coin.
        </p>
      </section>



      <div className="footnotes">
        <div className="footnote-item">[1] Verification performed via visual confirmation of the blockchain state.</div>
        <div className="footnote-item">[2] "Normal" is used here in its primary dictionary definition: conforming to a standard; usual, typical, or expected.</div>
        <div className="footnote-item">[3] Source: It exists.</div>
      </div>

      <footer className="footer">
        <div className="footer-nav">
          <a href="#">X (TWITTER)</a>
          <a href={`https://dexscreener.com/solana/${CA}`} target="_blank" rel="noopener noreferrer">DEXSCREENER</a>
          <a href={`https://solscan.io/token/${CA}`} target="_blank" rel="noopener noreferrer">SOLSCAN</a>
        </div>
        <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <span>NO EMAIL. NO FORMS. NO NEWSLETTER.</span>
          <div>
            <span className="doc-stamp">ID-176757-NORMAL-SOL</span>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default App
