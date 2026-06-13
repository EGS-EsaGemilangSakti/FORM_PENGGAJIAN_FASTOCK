import type { ReactNode } from 'react';

interface FormCardProps {
  children: ReactNode;
}

export function FormCard({ children }: FormCardProps) {
  return (
    <main className="min-h-screen bg-panel px-4 py-6 text-ink sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 border-b border-line pb-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">Form publik</p>
          <h1 className="mt-2 text-3xl font-bold tracking-normal text-ink sm:text-4xl">FORM PENGGAJIAN KARYAWAN</h1>
        </div>
        <div className="bg-white p-5 shadow-sm ring-1 ring-line sm:p-7">{children}</div>
      </div>
    </main>
  );
}
