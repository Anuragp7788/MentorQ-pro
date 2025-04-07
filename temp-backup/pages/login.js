import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function Login() {
  return (
    <div>
      <Navbar />
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="login"
      >
        <h1>Login to MentorQ</h1>
        <form method="POST" action="/api/login">
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="password" name="password" placeholder="Your Password" required />
          <motion.button
            type="submit"
            className="btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </motion.button>
        </form>
      </motion.section>
      <Footer />
      <style jsx>{`
        .login {
          max-width: 900px;
          margin: 60px auto;
          padding: 40px;
          background: #1f1f1f;
          border-radius: 15px;
          text-align: center;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
        }
        .login input {
          display: block;
          width: 100%;
          padding: 15px;
          margin: 15px 0;
          border: 1px solid #333;
          border-radius: 8px;
          font-size: 1.1em;
          background: #2a2a2a;
          color: #d4d4d4;
        }
        .login input:focus {
          border-color: #ffd700;
          outline: none;
        }
        .btn {
          display: block;
          width: 100%;
          padding: 15px;
          background: #ffd700;
          color: #1a1a2e;
          border-radius: 30px;
          font-weight: 700;
          font-size: 1.1em;
          box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
          border: none;
        }
      `}</style>
    </div>
  );
}
