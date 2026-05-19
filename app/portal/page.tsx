"use client";

import Link from 'next/link';

export default function PortalPage() {
  return (
    <main style={{ maxWidth: '600px', margin: '60px auto', padding: '40px', border: '1px solid #e2e8f0', borderRadius: '8px', fontFamily: 'sans-serif', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
      <h2 style={{ fontSize: '1.75rem', color: '#0f172a', marginBottom: '8px', fontWeight: 700 }}>Client Login Portal</h2>
      <p style={{ color: '#64748b', marginBottom: '24px', fontSize: '0.95rem' }}>Secure access for FiscalX corporate and personal tax clients.</p>
      
      <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '6px', fontWeight: 500, fontSize: '0.9rem', color: '#1e293b' }}>Email Address</label>
          <input type="email" placeholder="name@company.com" style={{ width: '100%', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '1rem' }} disabled />
        </div>
        
        <div>
          <label style={{ display: 'block', marginBottom: '6px', fontWeight: 500, fontSize: '0.9rem', color: '#1e293b' }}>Password</label>
          <input type="password" placeholder="••••••••" style={{ width: '100%', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '1rem' }} disabled />
        </div>

        <button type="button" style={{ width: '100%', padding: '12px', backgroundColor: '#0f172a', color: '#ffffff', border: 'none', borderRadius: '6px', fontWeight: 600, fontSize: '1rem', marginTop: '8px', cursor: 'not-allowed', opacity: 0.7 }}>
          Sign In
        </button>
      </form>

      <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid #e2e8f0', textAlign: 'center' }}>
        <Link href="/" style={{ color: '#2563eb', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>
          ← Back to Homepage
        </Link>
      </div>
    </main>
  );
}