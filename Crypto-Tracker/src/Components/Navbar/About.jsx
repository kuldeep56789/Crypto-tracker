import React from "react";

const About = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>About Us</h1>
      </header>
      <section style={styles.section}>
        <h2 style={styles.heading}>Who We Are</h2>
        <p style={styles.text}>
          Welcome to Crypto World! We are a team of dedicated professionals passionate about
          blockchain technology and cryptocurrencies. Our mission is to provide insightful
          resources and cutting-edge solutions to help you navigate the crypto ecosystem with confidence.
        </p>

        <h2 style={styles.heading}>Our Mission</h2>
        <p style={styles.text}>
          Our mission is to empower individuals and businesses by providing transparent,
          reliable, and innovative tools for cryptocurrency adoption and blockchain utilization.
        </p>

        <h2 style={styles.heading}>Our Values</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Transparency</li>
          <li style={styles.listItem}>Innovation</li>
          <li style={styles.listItem}>Security</li>
          <li style={styles.listItem}>Community</li>
        </ul>

        <h2 style={styles.heading}>Why Choose Us?</h2>
        <p style={styles.text}>
          Whether you're a seasoned trader or a blockchain enthusiast, Crypto World provides
          resources and tools designed to make your journey seamless and rewarding. Join us in
          shaping the future of finance!
        </p>
      </section>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f4f9",
    color: "#333",
    lineHeight: 1.6,
    margin: 0,
    padding: 0,
  },
  header: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "1rem 0",
    textAlign: "center",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  },
  section: {
    padding: "2rem",
    maxWidth: "800px",
    margin: "0 auto",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    color: "#444",
    marginBottom: "1rem",
  },
  text: {
    fontSize: "16px",
    lineHeight: "1.8",
    marginBottom: "1.5rem",
  },
  list: {
    paddingLeft: "20px",
    marginBottom: "1.5rem",
  },
  listItem: {
    marginBottom: "0.5rem",
  },
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "1rem 0",
    marginTop: "2rem",
  },
};

export default About;
