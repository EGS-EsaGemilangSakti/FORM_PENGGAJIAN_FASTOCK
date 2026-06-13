import type { UseFormRegister } from 'react-hook-form';
import type { PayrollFormValues } from '../../types/payroll';
import { FieldShell, inputClass } from './FieldShell';

export function PowerOfAttorneyUploadField({ register, error, required }: { register: UseFormRegister<PayrollFormValues>; error?: string; required: boolean }) {
  return (
    <FieldShell label={`Surat Kuasa${required ? '' : ' (Opsional)'}`} error={error}>
      <input className={inputClass} type="file" accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png" {...register('powerOfAttorneyFile')} />
    </FieldShell>
  );
}
