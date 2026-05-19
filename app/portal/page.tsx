"use client";

import { Amplify } from 'aws-amplify';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Link from 'next/link';

// Connects our frontend directly to the backend settings produced during build
import outputs from '@/amplify_outputs.json';
Amplify.configure(outputs);

function DashboardContent() {
  const { user, signOut } = useAuthenticator();

  return (
    <main style={{ maxWidth: '800px', margin: '40px auto', padding: '40px', border: '1px solid #e2e8f0', borderRadius: '12px', fontFamily: 'sans-serif', backgroundColor: '#ffffff', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', borderBottom: '2px solid #f1f5f9', paddingBottom: '16px' }}>
        <div>
          <span style={{ color: '#2563eb', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Secure Session Active</span>
          <h1 style={{ fontSize: '1.75rem', color: '#0f172a', margin: '4px 0 0 0', fontWeight: 800 }}>Client Workstation</h1>
        </div>
        <button onClick={signOut} style={{ padding: '8px 16px', backgroundColor: '#ef4444', color: '#ffffff', border: 'none', borderRadius: '6px', fontWeight: 600, cursor: 'pointer', fontSize: '0.9rem' }}>
          Secure Log Out
        </button>
      </div>

      <div style={{ padding: '24px', backgroundColor: '#f8fafc', borderRadius: '8px', marginBottom: '24px', border: '1px solid #e2e8f0' }}>
        <h3 style={{ margin: '0 0 8px 0', color: '#0f172a', fontSize: '1.1rem', fontWeight: 700 }}>Welcome Back</h3>
        <p style={{ margin: 0, color: '#475569', fontSize: '0.95rem' }}>Authenticated Account: <strong>{user?.signInDetails?.loginId}</strong></p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div style={{ padding: '20px', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
          <h4 style={{ margin: '0 0 6px 0', color: '#0f172a', fontWeight: 700 }}>Tax Filing Activity</h4>
          <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>No active processing requests found. Contact your auditor to link your corporate ledger accounts.</p>
        </div>
        <div style={{ padding: '20px', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
          <h4 style={{ margin: '0 0 6px 0', color: '#0f172a', fontWeight: 700 }}>Document Safe Storage</h4>
          <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>Your shared encrypted workspace folder is ready. Upload forms safely inside this console environment.</p>
        </div>
      </div>

      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <Link href="/" style={{ color: '#2563eb', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>
          ← Back to Main Public Site
        </Link>
      </div>
    </main>
  );
}

export default function PortalPage() {
  return (
    <div style={{ padding: '60px 20px', display: 'flex', justifyContent: 'center', background: '#f8fafc', minHeight: 'calc(100vh - 80px)' }}>
      {/* The AWS Authenticator wrapper intercepts non-logged-in users automatically */}
      <Authenticator>
        <DashboardContent />
      </Authenticator>
    </div>
  );
}