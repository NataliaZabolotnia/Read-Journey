import css from '@/app/(no-header)/registration/registration.module.css';

export default function Registration() {
  return (
    <section className={css.container}>
      <h1 className={css.title}>
        Expand your mind, reading<span className={css.span}> a book</span>
      </h1>
    </section>
  );
}
