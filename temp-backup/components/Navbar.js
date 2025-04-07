import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="nav-container"
    >
      <img src="/logo.png" alt="MentorQ Logo" className="logo" />
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/test-portal">Test Portal</Link></li>
        <li><Link href="/become-mentor">Become a Mentor</Link></li>
        <li><Link href="/contact">Contact Us</Link></li>
        <li><Link href="/about">About Us</Link></li>
        <li><Link href="/login">Login</Link></li>
      </ul>
      <style jsx>{`
        .nav-container {
          max-width: 1300px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 30px;
          background: #1a1a2e;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
        }
        .logo {
          width: 200px;
          transition: transform 0.3s ease;
        }
        .logo:hover {
          transform: scale(1.05);
        }
        ul {
          list-style: none;
          display: flex;
        }
        li {
          margin: 0 20px;
        }
        a {
          color: #c0c0c0;
          font-weight: 600;
          font-size: 1.1em;
          transition: color 0.3s ease;
        }
        a:hover {
          color: #ffd700;
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;
