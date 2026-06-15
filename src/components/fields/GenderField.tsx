import type { UseFormRegister } from 'react-hook-form';
import { GENDERS } from '../../constants/placements';
import type { PayrollFormValues } from '../../types/payroll';
import { FieldShell, inputClass } from './FieldShell';

export function GenderField({ register, error }: { register: UseFormRegister<PayrollFormValues>; error?: string }) {
  return (
    <FieldShell label="Gender" error={error}>
      <select className={inputClass} {...register('gender')}>
        <option value="">Pilih gender</option>
        {GENDERS.map((gender) => <option key={gender} value={gender}>{gender}</option>)}
      </select>
    </FieldShell>
  );
}
