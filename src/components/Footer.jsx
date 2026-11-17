export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Prasad. Built with React and Vite.</p>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}