import type { UseFormRegister } from 'react-hook-form';
import { PLACEMENTS } from '../../constants/placements';
import type { PayrollFormValues } from '../../types/payroll';
import { FieldShell, inputClass } from './FieldShell';

export function PlacementField({ register, error }: { register: UseFormRegister<PayrollFormValues>; error?: string }) {
  return (
    <FieldShell label="Penempatan" error={error}>
      <select className={inputClass} {...register('placement')}>
        <option value="">Pilih penempatan</option>
        {PLACEMENTS.map((placement) => <option key={placement} value={placement}>{placement}</option>)}
      </select>
    </FieldShell>
  );
}
