import Link from 'next/link';

export default function Detail({ params, content }) {
  const title = params || '';
  return (
    <div className='wrapper'>
      <h1>{title}</h1>
      <div className='books'>
        {content?.books?.map((book) => (
          <div className='book' key={book.title}>
            <Link href={book.amazon_product_url}>
              <img src={book.book_image} alt={book.title} />
              <div className='description'>
                <p>{book.title}</p>
                <span>{book.author}</span>
                <div className='buy'>
                  <span>Buy Now</span>
                  <svg
                    className='icon'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                    ></path>
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <style jsx>{`
        .wrapper {
          width: 100%;
          padding: 10px;
          display: flex;
          align-items: center;
          flex-direction: column;
        }
        h1 {
          font-size: 30px;
          font-weight: 600;
          padding: 40px;
          text-align: center;
        }
        .books {
          display: grid;
          grid-template-columns: repeat(4, 250px);
          padding: 20px;
          gap: 20px;
        }
        .book {
          cursor: pointer;
          box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
        }
        .book img {
          width: 100%;
          height: 350px;
        }
        .book .description {
          padding: 20px;
        }
        .description p {
          font-size: 20px;
          font-weight: 600;
        }
        .description > span {
          font-size: 14px;
          font-weight: 500;
          color: pink;
        }
        .description .buy {
          font-size: 16px;
          border: 1px solid black;
          width: fit-content;
          padding: 5px;
          margin-top: 10px;
          border-radius: 5px;
          &:hover {
            transform: translateY(5px);
            transition: all 0.3s ease-in-out;
            border-color: rgb(0 0 0 / 0.25);
          }
          &:active {
            border-color: pink;
          }
        }
        .description .icon {
          width: 20px;
          height: 20px;
          margin-left: 10px;
          display: inline-block;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps({
  params: { params },
}) {
  const { results } = await (
    await fetch(
      `https://books-api.nomadcoders.workers.dev/list?name=${params}`,
    )
  ).json();
  return {
    props: {
      params,
      content: results,
    },
  };
}
