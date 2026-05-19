import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section style={{ backgroundColor: 'var(--bg-light)', padding: '100px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span style={{ color: 'var(--accent)', fontWeight: 600, textTransform: 'uppercase', tracking: '1px', fontSize: '0.85rem' }}>Corporate & Personal Tax Specialists</span>
          <h1 style={{ fontSize: '3rem', color: 'var(--primary)', marginTop: '12px', marginBottom: '24px', lineHeight: 1.1, fontWeight: 800 }}>
            Strategic Tax Solutions. <br />Simplified Financial Management.
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '40px' }}>
            Providing expert corporate tax planning, compliance, and cloud accounting services tailored to secure your financial future.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <Link href="/contact" style={{ padding: '14px 28px', backgroundColor: 'var(--accent)', color: '#ffffff', borderRadius: '6px', fontWeight: 600 }}>
              Schedule a Consultation
            </Link>
            <Link href="/portal" style={{ padding: '14px 28px', border: '1px solid var(--border)', backgroundColor: '#ffffff', color: 'var(--primary)', borderRadius: '6px', fontWeight: 600 }}>
              Access Client Portal
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Grid / Core Value Props */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          <div style={{ padding: '32px', border: '1px solid var(--border)', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--primary)' }}>Corporate Strategy</h3>
            <p style={{ color: 'var(--text-muted)' }}>Tailored T2 filing and structural planning designed to maximize deductions and maintain pristine alignment with CRA guidelines.</p>
          </div>
          <div style={{ padding: '32px', border: '1px solid var(--border)', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--primary)' }}>Cloud Accounting</h3>
            <p style={{ color: 'var(--text-muted)' }}>Real-time bookkeeping integrations allowing seamless access to financial statements and accurate monthly performance monitoring.</p>
          </div>
          <div style={{ padding: '32px', border: '1px solid var(--border)', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--primary)' }}>Secure Document Hub</h3>
            <p style={{ color: 'var(--text-muted)' }}>A protective repository allowing clients to encrypt and upload sensitive tax data directly to dedicated cloud storage modules.</p>
          </div>
        </div>
      </section>
    </main>
  );
}