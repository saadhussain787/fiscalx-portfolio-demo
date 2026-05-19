import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'sans-serif' }}>
        <nav style={{ padding: '20px', borderBottom: '1px solid #eee', display: 'flex', gap: '20px', alignItems: 'center' }}>
          <strong style={{ fontSize: '1.5rem' }}>FiscalX</strong>
          <Link href="/">Home</Link>
          <Link href="/portal" style={{ marginLeft: 'auto', padding: '8px 16px', backgroundColor: '#0070f3', color: 'white', borderRadius: '5px', textDecoration: 'none' }}>
            Client Portal
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}