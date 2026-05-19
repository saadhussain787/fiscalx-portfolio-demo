export default function PortalPage() {
  return (
    <main style={{ padding: '40px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1>FiscalX Secure Client Portal</h1>
      <p>Please sign in to access your tax documents and secure dashboard.</p>
      
      <div style={{ maxWidth: '400px', margin: '40px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
        <input type="email" placeholder="Email Address" style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '10px' }} />
        <input type="password" placeholder="Password" style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '20px' }} />
        <button style={{ width: '100%', padding: '10px', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '5px' }}>
          Sign In
        </button>
      </div>
      
      <p>Need an account? <a href="#">Create an account here</a></p>
    </main>
  );
}