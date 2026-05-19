import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'sans-serif', backgroundColor: '#ffffff' }}>
        <header style={{ borderBottom: '1px solid #e2e8f0', backgroundColor: '#ffffff', position: 'sticky', top: 0, zIndex: 100 }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
              
              {/* Wrapped the logo in a Link to make it return to Home */}
              <Link href="/" style={{ textDecoration: 'none' }}>
                <strong style={{ fontSize: '1.5rem', color: '#0f172a', letterSpacing: '-0.5px' }}>
                  Fiscal<span style={{ color: '#2563eb' }}>X</span>
                </strong>
              </Link>
              
              <nav style={{ display: 'flex', gap: '24px', fontWeight: 500 }}>
                <Link href="/" style={{ color: '#1e293b', textDecoration: 'none' }}>Home</Link>
                <Link href="/contact" style={{ color: '#1e293b', textDecoration: 'none' }}>Contact</Link>
              </nav>
            </div>
            {/* High-Contrast Royal Blue Button with White Text */}
            <Link href="/portal" style={{ padding: '12px 24px', backgroundColor: '#2563eb', color: '#ffffff', borderRadius: '6px', fontSize: '0.95rem', fontWeight: 600, textDecoration: 'none', display: 'inline-block' }}>
              Client Portal
            </Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}