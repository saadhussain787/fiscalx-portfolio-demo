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

            <button type="button" style={{ width: '100%', padding: '14px', backgroundColor: '#2563eb', color: '#ffffff', border: 'none', borderRadius: '6px', fontWeight: 600, fontSize: '1rem', cursor: 'pointer' }}>
              Submit Inquiry
            </button>
          </form>
        </div>

        {/* Right Side: Specific Office Details & Live Map */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          <div style={{ padding: '30px', border: '1px solid #e2e8f0', borderRadius: '8px', backgroundColor: '#f8fafc' }}>
            <h3 style={{ fontSize: '1.25rem', color: '#0f172a', marginBottom: '16px', fontWeight: 700 }}>Office Information</h3>
            
            <div style={{ marginBottom: '12px' }}>
              <strong style={{ color: '#0f172a', display: 'block', marginBottom: '2px' }}>Address:</strong>
              <p style={{ color: '#475569', margin: 0, lineHeight: '1.5' }}>
                255 Duncan Mill Rd, Suite 206<br />
                North York, ON M3B 3H9
              </p>
            </div>

            <div style={{ marginBottom: '12px' }}>
              <strong style={{ color: '#0f172a', display: 'block', marginBottom: '2px' }}>Phone:</strong>
              <p style={{ color: '#475569', margin: 0 }}>+1 (416) 555-0199</p>
            </div>

            <div style={{ marginBottom: '12px' }}>
              <strong style={{ color: '#0f172a', display: 'block', marginBottom: '2px' }}>Hours:</strong>
              <p style={{ color: '#475569', margin: 0 }}>Monday – Friday: 9:00 AM – 5:00 PM</p>
            </div>

            <div>
              <strong style={{ color: '#0f172a', display: 'block', marginBottom: '2px' }}>Consultations:</strong>
              <p style={{ color: '#475569', margin: 0 }}>By Appointment Only (In-Person & Virtual)</p>
            </div>
          </div>

          {/* Map Centered Directly on 255 Duncan Mill Rd */}
          <div style={{ width: '100%', height: '375px', borderRadius: '8px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d2882.264259463583!2d-79.35432292340578!3d43.76133194537385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d390c9bffffd%3A0x8303cf56c9e8f219!2s255%20Duncan%20Mill%20Rd%20Suite%20206%2C%20North%20York%2C%20ON%20M3B%203H9!5e0!3m2!1sen!2sca!4v1716145000000!5m2!1sen!2sca"
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