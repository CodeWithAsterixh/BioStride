// Define a type for Gender
export type Gender = "Male" | "Female" | "Other";
export type workTimes =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23;
export type Days =
  | "Sunday"
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday";

  export type StaffRole = "Doctor" | "Nurse";
export type Post = "Cardio" | "Dental" | "General" | "Emergency" | "Orthopedic" | "Neurology" | "Pediatrics";

// Contact Information
export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}

// Personal Profile
export interface PersonalProfile {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  gender: Gender;
  contact: ContactInfo;
  bio?: string;
  profilePictureUrl?: string;
}

// Work Schedule
export interface WorkSchedule {
  day: Days;
  startTime: workTimes;
  endTime: workTimes;
}

// Work Profile
export interface WorkProfile {
    staffRole: StaffRole;
  post: Post;
  specialization: string;
  department: string;
  qualification: string;
  yearsOfExperience: number;
  workSchedule: WorkSchedule[];
  consultationFee: number;
  isAvailable: boolean;
}

// Full Doctor interface
export interface Doctor {
  id: number;
  personalProfile: PersonalProfile;
  workProfile: WorkProfile;
}
