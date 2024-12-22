
import React from 'react'

const Contact = () => {
  return (
 
        <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
          <div
            style={{
              backgroundColor: "#f4f4f4",
              padding: "2rem",
              textAlign: "center",
            }}
          >
            <h1 style={{ color: "#333" }}>Contact Us</h1>
            <p style={{ maxWidth: "600px", margin: "0 auto", color: "#666" }}>
              Have questions, feedback, or need assistance? We&apos;re here to help!
              Please fill out the form below or use the provided contact details to
              reach us.
            </p>
          </div>
    
          <section style={{ padding: "2rem 1rem", textAlign: "center" }}>
            <h2 style={{ color: "#333", marginBottom: "1rem" }}>Get in Touch</h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1.5rem",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              {/* Contact Form */}
              <form
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  style={{
                    padding: "0.75rem",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  style={{
                    padding: "0.75rem",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                />
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  required
                  style={{
                    padding: "0.75rem",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    padding: "0.75rem",
                    border: "none",
                    backgroundColor:  "#FFBD73",
                    color: "white",
                    fontWeight: "bold",
                    cursor: "pointer",
                    borderRadius: "4px",
                  }}
                >
                  Send Message
                </button>
              </form>
    
              {/* Contact Details */}
              <div style={{ textAlign: "left", width: "100%" }}>
                <h3 style={{ color: "#007BFF", marginBottom: "0.5rem" }}>
                  Contact Details:
                </h3>
                <p style={{ marginBottom: "0.5rem", color: "#666" }}>
                  📍 Address: 123 E-Commerce St, Business City, BC 12345
                </p>
                <p style={{ marginBottom: "0.5rem", color: "#666" }}>
                  📞 Phone: +123-456-7890
                </p>
                <p style={{ color: "#666" }}>
                  📧 Email:{" "}
                  <a
                    href=""
                    style={{ color: "#007BFF" }}
                  >
                    asfaqasim144@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </section>
    
        
        </div>
      );
    };
    
  


export default Contact;