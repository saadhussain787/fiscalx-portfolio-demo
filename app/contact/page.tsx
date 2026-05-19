"use client";

import Link from 'next/link';

export default function ContactPage() {
  return (
    <main style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 20px', fontFamily: 'sans-serif' }}>
      
      {/* Page Header */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#0f172a', fontWeight: 800, marginBottom: '12px' }}>Contact Our Firm</h1>
        <p style={{ color: '#64748b', fontSize: '1.1rem' }}>Have a question or need to schedule a tax consultation? Reach out today.</p>
      </div>

      {/* Split Screen Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '40px', alignItems: 'start' }}>
        
        {/* Left Side: Professional Contact Form */}
        <div style={{ padding: '40px', border: '1px solid #e2e8f0', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', backgroundColor: '#ffffff' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#0f172a', marginBottom: '20px', fontWeight: 700 }}>Send a Message</h2>
          
          <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '6px', fontWeight: 500, fontSize: '0.9rem', color: '#1e293b' }}>Full Name</label>
              <input type="text" placeholder="John Doe" style={{ width: '100%', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '1rem', backgroundColor: '#f8fafc' }} />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '6px', fontWeight: 500, fontSize: '0.9rem', color: '#1e293b' }}>Email Address</label>
              <input type="email" placeholder="john@example.com" style={{ width: '100%', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '1rem', backgroundColor: '#f8fafc' }} />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '6px', fontWeight: 500, fontSize: '0.9rem', color: '#1e293b' }}>Service Required</label>
              <select style={{ width: '100%', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '1rem', backgroundColor: '#f8fafc', color: '#1e293b' }}>
                <option>Corporate Tax Filing (T2)</option>
                <option>Personal Tax Returns (T1)</option>
                <option>Cloud Bookkeeping & Accounting</option>
                <option>CRA Audit Support</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '6px', fontWeight: 500, fontSize: '0.9rem', color: '#1e293b' }}>Message</label>
              <textarea rows={4} placeholder="How can our financial team assist you?" style={{ width: '100%', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '1rem', backgroundColor: '#f8fafc', resize: 'vertical' }}></textarea>
            </div>

            <button type="button" style={{ width: '100%', padding: '14px', backgroundColor: '#2563eb', color: '#ffffff', border: 'none', borderRadius: '6px', fontWeight: 600, fontSize: '1rem', cursor: 'pointer', transition: 'background-color 0.2s' }}>
              Submit Inquiry
            </button>
          </form>
        </div>

        {/* Right Side: Office Details & Live Google Map */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          <div style={{ padding: '30px', border: '1px solid #e2e8f0', borderRadius: '8px', backgroundColor: '#f8fafc' }}>
            <h3 style={{ fontSize: '1.25rem', color: '#0f172a', marginBottom: '12px', fontWeight: 700 }}>Office Information</h3>
            <p style={{ color: '#475569', margin: '4px 0' }}><strong>Location:</strong> Scarborough, ON, Canada</p>
            <p style={{ color: '#475569', margin: '4px 0' }}><strong>Hours:</strong> Monday – Friday: 9:00 AM – 5:00 PM</p>
            <p style={{ color: '#475569', margin: '4px 0' }}><strong>Status:</strong> Digital & In-Person Consultations Available</p>
          </div>

          {/* Connected Live Google Map Embed */}
          <div style={{ width: '100%', height: '400px', borderRadius: '8px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92134.19565576839!2d-79.31307735391306!3d43.77190989025066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d05e8d89e50f%3A0x6bda19a9f9d2a6a8!2sScarborough%2C%20ON!5e0!3m2!1sen!2sca!4v1716140000000!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

      </div>
    </main>
  );
}