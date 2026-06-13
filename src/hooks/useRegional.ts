import { useQuery } from '@tanstack/react-query';
import { listBirthRegencies, listDistricts, listProvinces, listRegencies, listVillages } from '../services/api';

const origin = () => window.location.origin;

export function useProvinces() {
  return useQuery({
    queryKey: ['regional', 'provinces'],
    queryFn: async () => (await listProvinces(origin())).data,
    staleTime: 24 * 60 * 60 * 1000,
  });
}

export function useRegencies(provinceCode: string) {
  return useQuery({
    queryKey: ['regional', 'regencies', provinceCode],
    queryFn: async () => (await listRegencies(origin(), provinceCode)).data,
    enabled: provinceCode.length === 2,
    staleTime: 24 * 60 * 60 * 1000,
  });
}

export function useDistricts(regencyCode: string) {
  return useQuery({
    queryKey: ['regional', 'districts', regencyCode],
    queryFn: async () => (await listDistricts(origin(), regencyCode)).data,
    enabled: regencyCode.length === 4,
    staleTime: 24 * 60 * 60 * 1000,
  });
}

export function useVillages(districtCode: string) {
  return useQuery({
    queryKey: ['regional', 'villages', districtCode],
    queryFn: async () => (await listVillages(origin(), districtCode)).data,
    enabled: districtCode.length === 6,
    staleTime: 24 * 60 * 60 * 1000,
  });
}

export function useBirthRegencies() {
  return useQuery({
    queryKey: ['regional', 'birth-regencies'],
    queryFn: async () => (await listBirthRegencies(origin())).data,
    staleTime: 24 * 60 * 60 * 1000,
  });
}
