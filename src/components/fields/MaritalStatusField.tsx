import type { UseFormRegister } from 'react-hook-form';
import { MARITAL_STATUSES } from '../../constants/placements';
import type { PayrollFormValues } from '../../types/payroll';
import { FieldShell, inputClass } from './FieldShell';

export function MaritalStatusField({ register, error }: { register: UseFormRegister<PayrollFormValues>; error?: string }) {
  return (
    <FieldShell label="Status Perkawinan" error={error}>
      <select className={inputClass} {...register('maritalStatus')}>
        <option value="">Pilih status perkawinan</option>
        {MARITAL_STATUSES.map((status) => <option key={status} value={status}>{status}</option>)}
      </select>
    </FieldShell>
  );
}
