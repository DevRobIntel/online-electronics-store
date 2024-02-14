// components/Navbar.js

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">
          {/* Remove the <a> tag */}
          Electronics Store
        </Link>
      </div>
      <div className="search">
        <input type="text" placeholder="Search" />
        <button type="submit">Search</button>
      </div>
      <div className="categories">
        {/* Remove the <a> tag */}
        <Link href="/categories">Categories</Link>
      </div>
      <div className="auth-links">
        {/* Remove the <a> tags */}
        <Link href="/signin">Sign In</Link>
        <Link href="/signup">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
