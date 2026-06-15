import type { UseFormRegister } from 'react-hook-form';
import { RELIGIONS } from '../../constants/placements';
import type { PayrollFormValues } from '../../types/payroll';
import { FieldShell, inputClass } from './FieldShell';

export function ReligionField({ register, error }: { register: UseFormRegister<PayrollFormValues>; error?: string }) {
  return (
    <FieldShell label="Agama" error={error}>
      <select className={inputClass} {...register('religion')}>
        <option value="">Pilih agama</option>
        {RELIGIONS.map((religion) => <option key={religion} value={religion}>{religion}</option>)}
      </select>
    </FieldShell>
  );
}
