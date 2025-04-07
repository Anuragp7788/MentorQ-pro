import Link from 'next/link';

const Footer = () => (
  <footer>
    <p>© 2025 MentorQ. All rights reserved.</p>
    <div className="footer-links">
      <Link href="/privacy">Privacy Policy</Link>
      <Link href="/contact">Contact Us</Link>
    </div>
    <style jsx>{`
      footer {
        background: #1a1a2e;
        color: #d4d4d4;
        text-align: center;
        padding: 30px;
        border-top: 1px solid #333;
      }
      .footer-links a {
        color: #ffd700;
        margin: 0 15px;
        font-weight: 600;
        transition: color 0.3s ease;
      }
      .footer-links a:hover {
        color: #ffeb3b;
      }
    `}</style>
  </footer>
);

export default Footer;
