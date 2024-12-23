import React from 'react'

  
    

    const About = () => {
      return (
        <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
          <div
            style={{
              backgroundColor: "#f4f4f4",
              padding: "2rem",
              textAlign: "center",
            }}
          >
            <h1 style={{ color: "#333" }}>About Us</h1>
            <p style={{ maxWidth: "600px", margin: "0 auto", color: "#666" }}>
              Welcome to <strong>My shop</strong>, your one-stop online store for
              all your shopping needs! We are dedicated to providing you with the
              best products at competitive prices while ensuring an enjoyable
              shopping experience.
            </p>
          </div>
    
          <section style={{ padding: "2rem 1rem", textAlign: "center" }}>
            <h2 style={{ color: "#333", marginBottom: "1rem" }}>Our Mission</h2>
            <p style={{ maxWidth: "800px", margin: "0 auto", color: "#666" }}>
              At Myshop, our mission is to make online shopping convenient,
              affordable, and enjoyable. We aim to bring quality products from
              around the world right to your doorstep, saving you time and effort.
            </p>
          </section>
    
          <section
            style={{
              backgroundColor: "#f9f9f9",
              padding: "2rem 1rem",
              textAlign: "center",
            }}
          >
            <h2 style={{ color: "#333", marginBottom: "1rem" }}>Why Choose Us?</h2>
            <div style={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
              <div style={{ maxWidth: "250px" }}>
                <h3 style={{ color: "#FFBD73" }}>Wide Range of Products</h3>
                <p style={{ color: "#666" }}>
                  From fashion to electronics, home décor to personal care, we offer
                  everything under one roof.
                </p>
              </div>
              <div style={{ maxWidth: "250px" }}>
                <h3 style={{ color: "#FFBD73" }}>Quality Guarantee</h3>
                <p style={{ color: "#666" }}>
                  We only partner with trusted brands and vendors to ensure top
                  quality for our customers.
                </p>
              </div>
              <div style={{ maxWidth: "250px" }}>
                <h3 style={{ color: "#FFBD73" }}>Customer Support</h3>
                <p style={{ color: "#666" }}>
                  Our dedicated support team is here to help you 24/7 with any
                  queries or concerns.
                </p>
              </div>
            </div>
          </section>
    
      
        </div>
      );
    };
    
  


export default About