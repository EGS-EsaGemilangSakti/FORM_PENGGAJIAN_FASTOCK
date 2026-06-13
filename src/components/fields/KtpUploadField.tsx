import { useEffect, useState } from 'react';
import type { UseFormRegister, UseFormWatch } from 'react-hook-form';
import type { PayrollFormValues } from '../../types/payroll';
import { FieldShell, inputClass } from './FieldShell';

export function KtpUploadField({ register, watch, error }: { register: UseFormRegister<PayrollFormValues>; watch: UseFormWatch<PayrollFormValues>; error?: string }) {
  const [preview, setPreview] = useState('');
  const fileList = watch('ktpFile');

  useEffect(() => {
    const file = fileList?.item(0);
    if (!file || !file.type.startsWith('image/')) {
      setPreview('');
      return;
    }
    const url = URL.createObjectURL(file);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [fileList]);

  return (
    <FieldShell label="Foto KTP" error={error}>
      <input className={inputClass} type="file" accept=".jpg,.jpeg,.png,image/jpeg,image/png" {...register('ktpFile')} />
      {preview ? <img src={preview} alt="Preview KTP" className="mt-3 h-40 w-full object-contain ring-1 ring-line" /> : null}
    </FieldShell>
  );
}
