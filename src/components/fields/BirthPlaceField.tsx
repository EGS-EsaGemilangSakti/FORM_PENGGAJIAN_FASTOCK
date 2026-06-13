import type { UseFormSetValue, UseFormWatch } from 'react-hook-form';
import { useBirthRegencies } from '../../hooks/useRegional';
import type { PayrollFormValues } from '../../types/payroll';
import { FieldShell, inputClass } from './FieldShell';

export function BirthPlaceField({
  setValue,
  watch,
  error,
}: {
  setValue: UseFormSetValue<PayrollFormValues>;
  watch: UseFormWatch<PayrollFormValues>;
  error?: string;
}) {
  const regencies = useBirthRegencies();
  const birthPlaceCode = watch('birthPlaceCode');

  return (
    <FieldShell label="Tempat Lahir" error={error}>
      <select
        className={inputClass}
        value={birthPlaceCode}
        disabled={regencies.isLoading}
        onChange={(event) => {
          const selected = regencies.data?.find((item) => item.code === event.target.value);
          setValue('birthPlaceCode', selected?.code ?? '', { shouldValidate: true });
          setValue('birthPlace', selected?.name ?? '', { shouldValidate: true });
          setValue('birthPlaceProvince', selected?.province ?? '', { shouldValidate: true });
        }}
      >
        <option value="">{regencies.isLoading ? 'Memuat kota/kabupaten' : 'Pilih kota/kabupaten lahir'}</option>
        {(regencies.data ?? []).map((item) => (
          <option key={item.code} value={item.code}>
            {item.name} - {item.province}
          </option>
        ))}
      </select>
    </FieldShell>
  );
}
