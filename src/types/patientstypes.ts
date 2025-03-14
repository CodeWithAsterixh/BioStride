export interface Address {
  street: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
}

export interface EmergencyContact {
  relationship: string;
  name: string;
  phone: string;
  email: string;
  street: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
}

export interface ContactInformation {
  phone_number: string;
  email: string;
  address: Address;
  emergencyContact: EmergencyContact;
}

export interface Person {
  first_name: string;
  last_name: string;
  date_of_birth: string;
  gender: string;
  image: string;
}

export interface PersonalData {
  first_name: string;
  last_name: string;
  date_of_birth: string;
  gender: string;
  image: string;
  contact_information: ContactInformation;
}

export interface Allergy {
  substance: string;
  reaction: string;
  severity: string;
}

export interface Condition {
  condition_name: string;
  diagnosis_date: string;
  status: string;
  treatments: Treatment[];
}

export interface Treatment {
  medication: string;
  dosage: string;
  frequency: string;
}

export interface Surgery {
  surgery_name: string;
  date: string;
  outcome: string;
}

export interface Immunization {
  vaccine: string;
  date_administered: string;
  booster_date?: string;
}

export interface FamilyHistory {
  relation: string;
  condition: string;
  age_at_diagnosis: number;
}

export interface LabTest {
  test_name: string;
  test_date: string;
  results: Record<string, string>;
  interpretation: string;
}

export interface vital_signs {
  date: string;
  systolic_blood_pressure: number;
  diastolic_blood_pressure: number;
  temperature: string;
  respiratory_rate: string;
  heart_rate: string;
}

export interface Visit {
  visit_date: string;
  reason: string;
  diagnosis: string;
  prescriptions: Treatment[];
  notes: string;
}

export interface MonthlyData {
  month: string;
  vital_signs: vital_signs[];
  lab_tests: LabTest[];
  visits: Visit[];
}

export interface YearlyData {
  year: number;
  monthly_data: MonthlyData[];
}

export interface MedicalHistory {
  allergies: Allergy[];
  conditions: Condition[];
  surgeries: Surgery[];
  immunizations: Immunization[];
  family_history: FamilyHistory[];
}

export interface Patient {
  patient_id: string | number;
  personal_data: PersonalData;
  medical_history: MedicalHistory;
  yearly_data: YearlyData[];
}