export default function ContactPage() {
  return (
    <main style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1>Contact Us</h1>
      <p>Have questions about your taxes? Let's connect.</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginTop: '30px' }}>
        {/* Contact Form */}
        <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input type="text" placeholder="Your Name" style={{ padding: '10px' }} />
          <input type="email" placeholder="Email Address" style={{ padding: '10px' }} />
          <textarea placeholder="How can we help?" style={{ padding: '10px', height: '100px' }} />
          <button type="submit" style={{ padding: '10px', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '5px' }}>
            Send Message
          </button>
        </form>

        {/* Office Details */}
        <div>
          <h3>Visit Our Office</h3>
          <p>255 Duncan Mill Rd, Suite 206<br />North York, ON M3B 3H9</p>
          <div style={{ width: '100%', height: '200px', backgroundColor: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Google Maps placeholder */}
            [Map Placeholder]
          </div>
        </div>
      </div>
    </main>
  );
}