import Link from 'next/link';

export default function NavBar() {
  return (
    <nav>
      <Link legacyBehavior href='/'>
        <a>HOME</a>
      </Link>
      <Link legacyBehavior href='/about'>
        <a>ABOUT</a>
      </Link>
      <style jsx>{`
        nav {
          color: black;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border: 1px solid black;
          margin: 0 5px;
          padding: 5px;
        }
        nav a {
          all: unset;
          cursor: pointer;
          font-weight: 600;
          font-size: 20px;
          text-decoration: none;
          padding-bottom: 5px;
          border-bottom: 3px solid black;
          &:hover {
            border-bottom: 3px solid #ccc;
          }
        }
      `}</style>
    </nav>
  );
}
