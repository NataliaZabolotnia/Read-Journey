import css from '@/app/(no-header)/login/login.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Registration() {
  return (
    <section className={css.container}>
      <div className={css.boxForm}>
        <svg className={css.icon} fill="currentColor">
          <path d="M0 17.905v-8.381h9.821c1.335 0 2.636 0.425 3.713 1.215 0.644 0.472 1.158 1.099 1.495 1.823l1.136 2.442c0.439-1.072 0.989-2.094 1.641-3.050l0.056-0.082c0.187-0.275 0.402-0.53 0.639-0.762l0.484-0.473c0.315-0.308 0.69-0.55 1.101-0.71l0.042-0.016c0.651-0.254 1.344-0.385 2.043-0.385h9.829v8.381h-32z"></path>
          <path d="M0 19.429h32v3.048h-32v-3.048z"></path>
        </svg>
        <h1 className={css.title}>
          <span className={css.nowrap}>Expand your mind,</span>
          <span className={css.nowrapSecond}>
            reading<span className={css.span}> a book</span>
          </span>
        </h1>
        <form className={css.form}>
          <input className={css.input} type="email" placeholder="Mail::" />
          <div className={css.password}>
            <input
              className={css.input}
              type="password"
              placeholder="Password:"
            />
            <svg
              className={css.eye}
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="#141414"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.75 9C0.75 9 3.75 3 9 3C14.25 3 17.25 9 17.25 9C17.25 9 14.25 15 9 15C3.75 15 0.75 9 0.75 9Z"
                stroke="#F9F9F9"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 11.25C10.2426 11.25 11.25 10.2426 11.25 9C11.25 7.75736 10.2426 6.75 9 6.75C7.75736 6.75 6.75 7.75736 6.75 9C6.75 10.2426 7.75736 11.25 9 11.25Z"
                stroke="#F9F9F9"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <button type="submit" className={css.btnReg}>
            Login
          </button>
          <Link className={css.link} href={'/registration'}>
            Don’t have an account?
          </Link>
        </form>
      </div>
      <div className={css.boxPicture}>
        <Image src="/iPhoneMob.png" alt="iPhone" width={255} height={518} />
      </div>
    </section>
  );
}
