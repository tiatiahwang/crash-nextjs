import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link legacyBehavior href='/'>
        <a className={router.pathname === '/' ? 'active' : ''}> HOME</a>
      </Link>
      <Link legacyBehavior href='/about'>
        <a className={router.pathname === '/about' ? 'active' : ''}>ABOUT</a>
      </Link>
      <style jsx>{`
        nav {
          background-color: pink;
        }
        a {
          text-decoration: none;
        }
        .active {
          color: green;
        }
      `}</style>
    </nav>
  );
}
