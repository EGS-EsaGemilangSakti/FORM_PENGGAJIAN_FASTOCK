import type { UseFormRegister } from 'react-hook-form';
import { EMPLOYMENT_STATUSES } from '../../constants/placements';
import type { PayrollFormValues } from '../../types/payroll';
import { FieldShell, inputClass } from './FieldShell';

export function EmploymentStatusField({ register, error }: { register: UseFormRegister<PayrollFormValues>; error?: string }) {
  return (
    <FieldShell label="Status Karyawan" error={error}>
      <select className={inputClass} {...register('employmentStatus')}>
        <option value="">Pilih status</option>
        {EMPLOYMENT_STATUSES.map((status) => <option key={status} value={status}>{status}</option>)}
      </select>
    </FieldShell>
  );
}
