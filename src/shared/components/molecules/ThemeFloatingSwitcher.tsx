import { useEffect, useRef, useState } from 'react';
import Icon from '../atoms/Icon';
import ThemePanel from './ThemePanel';

export default function ThemeFloatingSwitcher() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const fabRef = useRef<HTMLButtonElement | null>(null);

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      const t = e.target as Node;
      if (!panelRef.current?.contains(t) && !fabRef.current?.contains(t)) {
        setOpen(false);
      }
    };
    window.addEventListener('mousedown', onDown);
    return () => window.removeEventListener('mousedown', onDown);
  }, [open]);

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  return (
    <>
      {/* FAB */}
      <button
        ref={fabRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label="Theme switcher"
        className="fixed bottom-20 right-5 lg:right-20 z-50 inline-flex items-center justify-center size-12 rounded-full shadow-lg bg-gray-900 text-white hover:opacity-90 dark:bg-white dark:text-gray-900 cursor-pointer"
      >
        <Icon type="sparkle" />
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[1px] animate-in fade-in duration-150"
          aria-hidden="true"
        />
      )}

      {/* Panel */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Choose theme"
          ref={panelRef}
          className="fixed z-50 bottom-20 right-4 w-[min(92vw,22rem)] origin-bottom-right rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl animate-in fade-in zoom-in-95 duration-150"
        >
          <ThemePanel onClose={() => setOpen(false)} />
        </div>
      )}
    </>
  );
}