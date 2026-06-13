import type { UseFormRegister } from 'react-hook-form';
import { POSITIONS } from '../../constants/placements';
import type { PayrollFormValues } from '../../types/payroll';
import { FieldShell, inputClass } from './FieldShell';

export function PositionField({ register, error }: { register: UseFormRegister<PayrollFormValues>; error?: string }) {
  return (
    <FieldShell label="Posisi" error={error}>
      <select className={inputClass} {...register('position')}>
        <option value="">Pilih posisi</option>
        {POSITIONS.map((position) => <option key={position} value={position}>{position}</option>)}
      </select>
    </FieldShell>
  );
}
