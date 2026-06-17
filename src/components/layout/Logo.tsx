import { Link } from "@tanstack/react-router";

export function Logo({ to = "/" }: { to?: string }) {
  return (
    <Link to={to} className="group inline-flex items-center gap-2">
      <span className="grid size-9 place-items-center rounded-xl bg-gradient-primary text-white shadow-soft transition-transform group-hover:scale-105">
        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21s-7-6.5-7-12a7 7 0 0114 0c0 5.5-7 12-7 12z" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
      </span>
      <span className="text-lg font-bold tracking-tight">Local Link</span>
    </Link>
  );
}