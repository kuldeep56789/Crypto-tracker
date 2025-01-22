import React from "react";

const Pricing = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Pricing Plans</h1>
      </header>
      <section style={styles.section}>
        <h2 style={styles.heading}>Choose the Best Plan for You</h2>
        <div style={styles.pricingContainer}>
          <div style={styles.plan}>
            <h3 style={styles.planTitle}>Basic</h3>
            <p style={styles.price}>$10/month</p>
            <ul style={styles.featuresList}>
              <li style={styles.feature}>Access to basic features</li>
              <li style={styles.feature}>Email support</li>
            </ul>
            <button style={styles.button}>Get Started</button>
          </div>
          <div style={styles.plan}>
            <h3 style={styles.planTitle}>Standard</h3>
            <p style={styles.price}>$30/month</p>
            <ul style={styles.featuresList}>
              <li style={styles.feature}>All Basic features</li>
              <li style={styles.feature}>Priority support</li>
              <li style={styles.feature}>Advanced analytics</li>
            </ul>
            <button style={styles.button}>Get Started</button>
          </div>
          <div style={styles.plan}>
            <h3 style={styles.planTitle}>Premium</h3>
            <p style={styles.price}>$50/month</p>
            <ul style={styles.featuresList}>
              <li style={styles.feature}>All Standard features</li>
              <li style={styles.feature}>Dedicated account manager</li>
              <li style={styles.feature}>Custom integrations</li>
            </ul>
            <button style={styles.button}>Get Started</button>
          </div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f4f9",
    color: "#333",
    margin: 0,
    padding: 0,
  },
  header: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "1rem 0",
    textAlign: "center",
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
    marginBottom: "1.5rem",
  },
  pricingContainer: {
    display: "flex",
    justifyContent: "space-around",
    gap: "20px",
    flexWrap: "wrap",
  },
  plan: {
    backgroundColor: "#e8eaf6",
    padding: "1.5rem",
    borderRadius: "8px",
    textAlign: "center",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    width: "250px",
  },
  planTitle: {
    fontSize: "1.5rem",
    marginBottom: "1rem",
    color: "#333",
  },
  price: {
    fontSize: "1.25rem",
    marginBottom: "1rem",
    color: "#444",
  },
  featuresList: {
    listStyle: "none",
    padding: 0,
    margin: "1rem 0",
  },
  feature: {
    marginBottom: "0.5rem",
    fontSize: "1rem",
  },
  button: {
    backgroundColor: "#333",
    color: "#fff",
    border: "none",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "1rem",
  },
  buttonHover: {
    backgroundColor: "#444",
  },
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "1rem 0",
    marginTop: "2rem",
  },
};

export default Pricing;
