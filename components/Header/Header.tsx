'use client';
import css from '@/components/Header/Header.module.css';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className={css.containerHeader}>
      <svg width="42" height="17" className={css.icon}>
        <use href="/logoMob.svg"></use>
      </svg>
      <div className={css.rightBox}>
        <svg width="35" height="35" className={css.iconBlock}>
          <use href="/block.svg"></use>
        </svg>
        <button
          type="button"
          aria-label="menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg width="28" height="28" className={css.menu}>
            <use href="/menuMob.svg"></use>
          </svg>
        </button>
        {isOpen && (
          <div className={css.overlay} onClick={() => setIsOpen(false)}>
            <div className={css.modal} onClick={(e) => e.stopPropagation()}>
              <button type="button" onClick={() => setIsOpen(false)}>
                <svg height="28" width="28" className={css.closeModal}>
                  <use href="/closeMenu.svg"></use>
                </svg>
              </button>
              <div className={css.nav}>
                <Link href="/" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
                <Link href="/library" onClick={() => setIsOpen(false)}>
                  Library
                </Link>
              </div>
              <button type="button" className={css.btnOut}>
                Log out
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
