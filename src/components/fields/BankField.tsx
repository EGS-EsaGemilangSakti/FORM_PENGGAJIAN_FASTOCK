import type { UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { BANKS } from '../../constants/banks';
import type { PayrollFormValues } from '../../types/payroll';
import { FieldShell, inputClass } from './FieldShell';

export function BankField({
  register,
  setValue,
  error,
  onBankChanged,
}: {
  register: UseFormRegister<PayrollFormValues>;
  setValue: UseFormSetValue<PayrollFormValues>;
  error?: string;
  onBankChanged: () => void;
}) {
  return (
    <FieldShell label="Bank" error={error}>
      <input className={`${inputClass} mb-2`} list="bank-options" placeholder="Cari bank" {...register('bankName')} readOnly />
      <select
        className={inputClass}
        {...register('bankCode')}
        onChange={(event) => {
          const bank = BANKS.find((item) => item.bank_code === event.target.value);
          setValue('bankCode', bank?.bank_code ?? '', { shouldValidate: true });
          setValue('bankName', bank?.bank_name ?? '', { shouldValidate: true });
          onBankChanged();
        }}
      >
        <option value="">Pilih bank</option>
        {BANKS.map((bank) => (
          <option key={bank.bank_code} value={bank.bank_code}>
            {bank.bank_name}
          </option>
        ))}
      </select>
      <datalist id="bank-options">
        {BANKS.map((bank) => <option key={bank.bank_code} value={bank.bank_name} />)}
      </datalist>
    </FieldShell>
  );
}
