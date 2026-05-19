TypeScript
import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{ borderBottom: '1px solid var(--border)', backgroundColor: '#ffffff', position: 'sticky', top: 0, zIndex: 100 }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
              <strong style={{ fontSize: '1.5rem', color: 'var(--primary)', letterSpacing: '-0.5px' }}>Fiscal<span style={{ color: 'var(--accent)' }}>X</span></strong>
              <nav style={{ display: 'flex', gap: '24px', fontWeight: 500 }}>
                <Link href="/" style={{ color: 'var(--text-dark)' }}>Home</Link>
                <Link href="/contact" style={{ color: 'var(--text-dark)' }}>Contact</Link>
              </nav>
            </div>
            <Link href="/portal" style={{ padding: '10px 20px', backgroundColor: 'var(--primary)', color: '#ffffff', borderRadius: '6px', fontSize: '0.95rem', fontWeight: 600 }}>
              Client Portal
            </Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}