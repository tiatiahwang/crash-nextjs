import { useRouter } from 'next/router';

export default function IndexPage({ results }) {
  const router = useRouter();
  const onClick = (title) => {
    router.push(`/books/${title}`);
  };
  return (
    <div className='books'>
      <h1>THE NEW YORK TIMES BEST SELLER EXPLORER</h1>
      {results?.map((book) => (
        <div
          className='book'
          key={book.list_name}
          onClick={() => onClick(book.list_name)}
        >
          <span>{book.display_name}</span>
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
      ))}
      <style jsx>{`
        .books {
          width: 600px;
          padding: 30px;
          box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
        }
        h1 {
          font-size: 30px;
          font-weight: 600;
          padding-bottom: 20px;
        }
        .book {
          cursor: pointer;
          font-size: 12px;
          border: 1px solid black;
          width: fit-content;
          display: inline-block;
          align-items: center;
          padding: 5px;
          margin: 15px;
          border-radius: 10px;
          box-shadow: 1px 5px 5px rgb(0 0 0 / 0.2);
          &:hover {
            transform: scale(0.95);
            transition: all 0.5s ease-in-out;
            border-color: rgb(0 0 0 / 0.25);
          }
          &:active {
            border-color: pink;
          }
        }
        .icon {
          width: 20px;
          height: 20px;
          margin-left: 10px;
          display: inline-block;
        }
      `}</style>
    </div>
  );
}
// export default function Home({ results }) {
//   const router = useRouter();
//   const onClick = (id, title) => {
//     router.push(`/movies/${title}/${id}`);
//   };
//   return (
//     <div className='container'>
//       <Seo title='Home' />
//       {results?.map((movie) => (
//         <div
//           onClick={() => onClick(movie.id, movie.original_title)}
//           key={movie.id}
//         >
//           <div className='movie' key={movie.id}>
//             <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
//             <Link
//               legacyBehavior
//               href={`/movies/${movie.original_title}/${movie.id}`}
//             >
//               <a>{movie.original_title}</a>
//             </Link>
//           </div>
//         </div>
//       ))}
//       <style jsx>{`
//         .container {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           padding: 20px;
//           gap: 20px;
//         }
//         .movie {
//           cursor: pointer;
//           text-align: center;
//         }
//         .movie img {
//           max-width: 100%;
//           border-radius: 12px;
//           transition: transform 0.2s ease-in-out;
//           box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
//         }
//         .movie:hover img {
//           transform: scale(1.05) translateY(-10px);
//         }
//         .movie a,
//         .movie a:visited {
//           font-size: 18px;
//           text-decoration: none;
//           color: black;
//         }
//         .movie a:hover {
//           color: pink;
//         }
//       `}</style>
//     </div>
//   );
// }

export async function getServerSideProps() {
  const { results } = await (
    await fetch(
      'https://books-api.nomadcoders.workers.dev/lists',
    )
  ).json();
  return {
    props: { results },
  };
}
