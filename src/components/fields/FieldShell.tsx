import type { ReactNode } from 'react';

interface FieldShellProps {
  label: string;
  error?: string;
  children: ReactNode;
  className?: string;
}

export function FieldShell({ label, error, children, className = '' }: FieldShellProps) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1 block text-sm font-medium text-ink">{label}</span>
      {children}
      {error ? <span className="mt-1 block text-sm text-accent">{error}</span> : null}
    </label>
  );
}

export const inputClass =
  'w-full border border-line bg-white px-3 py-2 text-sm text-ink outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20 disabled:bg-slate-100';
