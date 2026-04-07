import css from '@/app/(width-header)/recommendedPage/recommendedPage.module.css';
import Link from 'next/link';
import Recommended from '@/components/Recommended/Recommended';
import type { Book } from '@/types/books';

async function getBooks(): Promise<Book[]> {
  // const res = await fetch('http://localhost:3000/api/books', {
  //   cache: 'no-store',
  // });
  // if (!res.ok) throw new Error('Failed to fetch books');
  // return res.json();
  try {
    const res = await fetch(`${process.env.API_URL}/books/recomend`);
    if (!res.ok) {
      throw new Error(`Failed to fetch books: ${res.status}`);
    }
    const books: Book[] = await res.json();
    return books;
  } catch (err) {
    console.error('Fetch error:', err);
    return [];
  }
}

export default async function RecommendedPage() {
  console.log('API_URL:', process.env.API_URL);
  const books: Book[] = await getBooks();
  // const res = await fetch('/books');

  return (
    <section className={css.container}>
      <div className={css.filters}>
        <p className={css.descr}>Filters:</p>
        <form className={css.form}>
          <input className={css.input} type="text" placeholder="Book title:" />
          <input className={css.input} type="text" placeholder="The author:" />
          <button type="submit" className={css.button}>
            To apply
          </button>
        </form>
        <div className={css.create}>
          <h1 className={css.title}>Start your workout</h1>
          <ul className={css.ul}>
            <li className={css.item}>
              <svg
                width="45"
                height="30"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="20" fill="#F9F9F9" />
                <path
                  d="M16.7175 13.57L20.0295 12.4H22.1895V25H19.7055V15.028L17.3295 15.694L16.7175 13.57Z"
                  fill="#1F1F1F"
                />
              </svg>
              <div className={css.paragr}>
                Create a personal library:
                <span className={css.span}>
                  {' '}
                  add the books you intend to read to it.
                </span>
              </div>
            </li>
            <li className={css.item}>
              <svg
                width="50"
                height="30"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="20" fill="#F9F9F9" />
                <path
                  d="M24.1288 25H15.7048V23.146L20.0068 18.718C20.9668 17.698 21.4468 16.858 21.4468 16.198C21.4468 15.706 21.2908 15.31 20.9788 15.01C20.6788 14.71 20.2888 14.56 19.8088 14.56C18.8488 14.56 18.1468 15.052 17.7028 16.036L15.6148 14.812C15.9988 13.96 16.5568 13.306 17.2888 12.85C18.0328 12.382 18.8608 12.148 19.7728 12.148C20.9128 12.148 21.8908 12.508 22.7068 13.228C23.5228 13.936 23.9308 14.896 23.9308 16.108C23.9308 17.416 23.2408 18.76 21.8608 20.14L19.3948 22.606H24.1288V25Z"
                  fill="#1F1F1F"
                />
              </svg>
              <div className={css.paragr}>
                Create your first workout:
                <span className={css.span}>
                  {' '}
                  define a goal, choose a period, start training.
                </span>
              </div>
            </li>
          </ul>
          <div className={css.bottom}>
            <Link className={css.link} href={'/login'}>
              My library
            </Link>

            <svg
              width={24}
              height={24}
              className={css.icon}
              viewBox="0 0 32 32"
            >
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeMiterlimit="4"
                strokeWidth="2.6667"
                d="M18.667 22.667l6.667-6.667-6.667-6.667"
              ></path>
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeMiterlimit="4"
                strokeWidth="2.6667"
                d="M25.333 16h-18.667"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <Recommended books={books} />
    </section>
  );
}
