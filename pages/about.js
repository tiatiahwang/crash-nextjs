export default function About() {
  return (
    <div className='about'>
      <h1>ABOUT US</h1>
      <p>
        Welcome to the official explorer for The New York
        Times Best Seller list explorer.
        <br />
        We hope you enjoy your stay!
      </p>
      <style jsx>{`
        .about {
          width: 600px;
          padding: 30px;
          box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
        }
        h1 {
          font-size: 30px;
          font-weight: 600;
          padding-bottom: 20px;
        }
        p {
          font-size: 14px;
        }
      `}</style>
    </div>
  );
}
