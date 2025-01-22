import React from "react";

const Blog = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Crypto Insights Blog</h1>
      </header>
      <section style={styles.section}>
        <h2 style={styles.heading}>Latest Articles</h2>
        <div style={styles.articlesContainer}>
          <div style={styles.article}>
            <h3 style={styles.articleTitle}>Understanding Blockchain Technology</h3>
            <p style={styles.articleExcerpt}>
              Blockchain is more than just a buzzword. Dive deep into its mechanics
              and discover how it's revolutionizing industries.
            </p>
            <button style={styles.readMoreButton}>Read More</button>
          </div>
          <div style={styles.article}>
            <h3 style={styles.articleTitle}>Top 5 Cryptocurrencies to Watch in 2025</h3>
            <p style={styles.articleExcerpt}>
              Stay ahead of the market by exploring the most promising
              cryptocurrencies for the upcoming year.
            </p>
            <button style={styles.readMoreButton}>Read More</button>
          </div>
          <div style={styles.article}>
            <h3 style={styles.articleTitle}>How to Safeguard Your Crypto Assets</h3>
            <p style={styles.articleExcerpt}>
              Security is key. Learn the best practices to protect your
              cryptocurrency investments from potential threats.
            </p>
            <button style={styles.readMoreButton}>Read More</button>
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
  articlesContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  article: {
    backgroundColor: "#e8eaf6",
    padding: "1.5rem",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  },
  articleTitle: {
    fontSize: "1.25rem",
    marginBottom: "1rem",
    color: "#333",
  },
  articleExcerpt: {
    fontSize: "1rem",
    marginBottom: "1rem",
    lineHeight: "1.6",
  },
  readMoreButton: {
    backgroundColor: "#333",
    color: "#fff",
    border: "none",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    cursor: "pointer",
  },
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "1rem 0",
    marginTop: "2rem",
  },
};

export default Blog;
