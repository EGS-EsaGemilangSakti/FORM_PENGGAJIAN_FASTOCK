import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, ShieldCheck, Send } from 'lucide-react';
import { useMemo, useRef } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { BANKS } from '../../constants/banks';
import { useSubmitPayroll } from '../../hooks/useSubmitPayroll';
import { useValidateBank } from '../../hooks/useValidateBank';
import { payrollSchema } from '../../schemas/payrollSchema';
import type { PayrollFormValues } from '../../types/payroll';
import { toDisplayDate, nowIso } from '../../utils/formatters';
import { sanitizeText } from '../../utils/sanitize';
import { fileToBase64Payload } from '../../utils/validators';
import { AccountNumberField } from '../fields/AccountNumberField';
import { AccountOwnerField } from '../fields/AccountOwnerField';
import { AccountValidationResult } from '../fields/AccountValidationResult';
import { AddressField } from '../fields/AddressField';
import { BankField } from '../fields/BankField';
import { BirthDateField } from '../fields/BirthDateField';
import { BirthPlaceField } from '../fields/BirthPlaceField';
import { EmailField } from '../fields/EmailField';
import { EmploymentStatusField } from '../fields/EmploymentStatusField';
import { FirstWorkDateField } from '../fields/FirstWorkDateField';
import { FullNameField } from '../fields/FullNameField';
import { KtpUploadField } from '../fields/KtpUploadField';
import { NikField } from '../fields/NikField';
import { OwnershipStatusField } from '../fields/OwnershipStatusField';
import { PhoneField } from '../fields/PhoneField';
import { PlacementField } from '../fields/PlacementField';
import { PositionField } from '../fields/PositionField';
import { PowerOfAttorneyUploadField } from '../fields/PowerOfAttorneyUploadField';
import { FormSection } from '../layout/FormSection';

const defaultValidation = {
  status: 'UNVALIDATED' as const,
  score: null,
  validatedName: '',
  validationTimestamp: '',
  message: '',
};

export function PayrollForm() {
  const submitLock = useRef(false);
  const validateMutation = useValidateBank();
  const submitMutation = useSubmitPayroll();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<PayrollFormValues>({
    resolver: zodResolver(payrollSchema),
    mode: 'onBlur',
    defaultValues: {
      email: '',
      fullName: '',
      address: '',
      addressDetail: '',
      provinceCode: '',
      provinceName: '',
      regencyCode: '',
      regencyName: '',
      districtCode: '',
      districtName: '',
      villageCode: '',
      villageName: '',
      postalCode: '',
      nik: '',
      birthPlaceCode: '',
      birthPlace: '',
      birthPlaceProvince: '',
      birthDate: '',
      phone: '',
      placement: '',
      employmentStatus: '',
      position: '',
      firstWorkDate: '',
      bankCode: '',
      bankName: '',
      accountNumber: '',
      accountOwner: '',
      accountValidation: defaultValidation,
      ownershipStatus: '',
      website: '',
      formStartedAt: nowIso(),
    },
  });

  const accountValidation = watch('accountValidation');
  const ownershipStatus = watch('ownershipStatus');
  const bankCode = watch('bankCode');
  const canSubmit = accountValidation.status === 'VALID' && !isSubmitting && !submitMutation.isPending;

  const resetValidation = () => {
    setValue('accountValidation', defaultValidation, { shouldValidate: true });
  };

  const validateAccount = async () => {
    const fieldsValid = await trigger(['bankCode', 'bankName', 'accountNumber', 'accountOwner']);
    if (!fieldsValid) return;
    const values = watch();
    try {
      const response = await validateMutation.mutateAsync({
        bank_code: values.bankCode,
        bank_name: values.bankName,
        account_number: values.accountNumber,
        account_owner: values.accountOwner,
        origin: window.location.origin,
      });
      setValue('accountValidation', {
        status: response.status,
        score: response.score,
        validatedName: response.validatedName,
        validationTimestamp: response.validationTimestamp,
        message: response.message,
      }, { shouldValidate: true });
      toast[response.status === 'VALID' ? 'success' : 'error'](response.message);
    } catch (error) {
      setValue('accountValidation', { ...defaultValidation, status: 'INVALID', message: 'Validasi rekening gagal' }, { shouldValidate: true });
      toast.error(error instanceof Error ? error.message : 'Validasi rekening gagal');
    }
  };

  const selectedBank = useMemo(() => BANKS.find((bank) => bank.bank_code === bankCode), [bankCode]);

  const onSubmit = async (values: PayrollFormValues) => {
    if (submitLock.current) return;
    if (!window.confirm('Kirim data penggajian karyawan?')) return;
    submitLock.current = true;
    try {
      const ktp = values.ktpFile.item(0);
      const powerOfAttorney = values.powerOfAttorneyFile?.item(0) ?? null;
      if (!ktp || !selectedBank) throw new Error('Data belum lengkap');
      const payload = {
        origin: window.location.origin,
        submittedAt: nowIso(),
        website: sanitizeText(values.website || ''),
        data: {
          email: values.email,
          fullName: values.fullName,
          address: values.address,
          addressDetail: values.addressDetail,
          provinceCode: values.provinceCode,
          provinceName: values.provinceName,
          regencyCode: values.regencyCode,
          regencyName: values.regencyName,
          districtCode: values.districtCode,
          districtName: values.districtName,
          villageCode: values.villageCode,
          villageName: values.villageName,
          postalCode: values.postalCode,
          nik: values.nik,
          birthPlaceCode: values.birthPlaceCode,
          birthPlace: values.birthPlace,
          birthPlaceProvince: values.birthPlaceProvince,
          birthDate: toDisplayDate(values.birthDate),
          phone: values.phone,
          placement: values.placement,
          employmentStatus: values.employmentStatus,
          position: values.position,
          firstWorkDate: toDisplayDate(values.firstWorkDate),
          accountNumber: values.accountNumber,
          accountOwner: values.accountOwner,
          accountValidation: values.accountValidation,
          ownershipStatus: values.ownershipStatus,
          formStartedAt: values.formStartedAt,
          bank: selectedBank,
        },
        files: {
          ktp: await fileToBase64Payload(ktp),
          powerOfAttorney: powerOfAttorney ? await fileToBase64Payload(powerOfAttorney) : null,
        },
      };
      const response = await submitMutation.mutateAsync(payload);
      if (!response.success) throw new Error(response.message);
      toast.success(`${response.message}: ${response.submissionId}`);
      reset();
      setValue('formStartedAt', nowIso());
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Pengiriman gagal');
    } finally {
      submitLock.current = false;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" noValidate>
      <input type="text" className="hidden" tabIndex={-1} autoComplete="off" {...register('website')} />
      <FormSection title="Identitas Karyawan">
        <EmailField register={register} error={errors.email?.message} />
        <FullNameField register={register} setValue={setValue} error={errors.fullName?.message} />
        <AddressField register={register} setValue={setValue} watch={watch} errors={errors} />
        <NikField register={register} setValue={setValue} error={errors.nik?.message} />
        <BirthPlaceField setValue={setValue} watch={watch} error={errors.birthPlaceCode?.message || errors.birthPlace?.message || errors.birthPlaceProvince?.message} />
        <BirthDateField register={register} error={errors.birthDate?.message} />
        <PhoneField register={register} setValue={setValue} error={errors.phone?.message} />
      </FormSection>

      <FormSection title="Data Pekerjaan">
        <PlacementField register={register} error={errors.placement?.message} />
        <EmploymentStatusField register={register} error={errors.employmentStatus?.message} />
        <PositionField register={register} error={errors.position?.message} />
        <FirstWorkDateField register={register} error={errors.firstWorkDate?.message} />
      </FormSection>

      <FormSection title="Data Rekening">
        <BankField register={register} setValue={setValue} error={errors.bankCode?.message || errors.bankName?.message} onBankChanged={resetValidation} />
        <AccountNumberField register={register} setValue={setValue} error={errors.accountNumber?.message} onChanged={resetValidation} />
        <AccountOwnerField register={register} setValue={setValue} error={errors.accountOwner?.message} onChanged={resetValidation} />
        <div className="flex items-end">
          <button type="button" onClick={validateAccount} disabled={validateMutation.isPending} className="inline-flex w-full items-center justify-center gap-2 bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand/90 disabled:cursor-not-allowed disabled:bg-slate-400">
            {validateMutation.isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <ShieldCheck className="h-4 w-4" />}
            VALIDASI REKENING
          </button>
        </div>
        <AccountValidationResult result={accountValidation} />
      </FormSection>

      <FormSection title="Dokumen">
        <OwnershipStatusField register={register} error={errors.ownershipStatus?.message} />
        <KtpUploadField register={register} watch={watch} error={errors.ktpFile?.message} />
        <PowerOfAttorneyUploadField register={register} required={ownershipStatus === 'ORANG LAIN'} error={errors.powerOfAttorneyFile?.message} />
      </FormSection>

      <div className="flex justify-end border-t border-line pt-6">
        <button type="submit" disabled={!canSubmit} className="inline-flex min-w-48 items-center justify-center gap-2 bg-accent px-5 py-3 text-sm font-bold text-white transition hover:bg-accent/90 disabled:cursor-not-allowed disabled:bg-slate-400">
          {isSubmitting || submitMutation.isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          KIRIM DATA
        </button>
      </div>
    </form>
  );
}
