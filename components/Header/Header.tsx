import css from '@/components/Header/Header.module.css';

export default function Header() {
  return (
    <section className={css.containerHeader}>
      <svg width="42" height="17" className={css.icon}>
        <use href="/logoMob.svg"></use>
      </svg>
      <div className={css.rightBox}>
        <svg width="35" height="35" className={css.iconBlock}>
          <use href="/block.svg"></use>
        </svg>
        <svg width="28" height="28" className={css.menu}>
          <use href="/menuMob.svg"></use>
        </svg>
      </div>
    </section>
  );
}
