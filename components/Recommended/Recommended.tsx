'use client';
import css from '@/components/Recommended/Recommended.module.css';
import Swiper from 'swiper';
import type { Book } from '@/types/books';

type RecommendedProps = {
  books: Book[];
};

export default function Recommended({ books }: RecommendedProps) {
  return (
    <section className={css.container}>
      <h2 className={css.subtitle}>Recommended</h2>
      <div className={css.swiper}>
        <div className={css.arrows}>
          <div className="prev">←</div>
          <div className="next">→</div>
        </div>
        <div>
          {books.map((book) => (
            <div key={book._id}>{book.title}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
