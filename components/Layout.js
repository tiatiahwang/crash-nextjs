import NavBar from './NavBar';

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
      <style jsx>{`
        div {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  );
}
