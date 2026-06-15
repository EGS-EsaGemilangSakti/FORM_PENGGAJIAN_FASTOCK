import type { UseFormRegister } from 'react-hook-form';
import { PTKP_OPTIONS } from '../../constants/placements';
import type { PayrollFormValues } from '../../types/payroll';
import { FieldShell, inputClass } from './FieldShell';

export function PtkpField({ register, error }: { register: UseFormRegister<PayrollFormValues>; error?: string }) {
  return (
    <FieldShell label="PTKP" error={error}>
      <select className={inputClass} {...register('ptkp')}>
        <option value="">Pilih PTKP</option>
        {PTKP_OPTIONS.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
      </select>
    </FieldShell>
  );
}
