import { Doctor } from "../types/doctorstypes";

export const doctors: Doctor[] = [
  {
    id: 1,
    personalProfile: {
      firstName: "Jonathan",
      lastName: "Carter",
      dateOfBirth: new Date("1972-06-15"),
      gender: "Male",
      contact: {
        phone: "555-1111",
        email: "jonathan.carter@hospital.com",
        address: "101 Medical Plaza, Cityville",
      },
      bio: "Dr. Jonathan Carter is a seasoned cardiologist known for his compassionate approach and innovative treatments.",
      profilePictureUrl:
        "https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    workProfile: {
      staffRole: "Doctor",
      post: "Cardio",
      specialization: "Cardiology",
      department: "Cardiology",
      qualification: "MD, Cardiology",
      yearsOfExperience: 25,
      workSchedule: [
        { day: "Monday", startTime: 9, endTime: 17 },
        { day: "Wednesday", startTime: 9, endTime: 17 },
      ],
      consultationFee: 220,
      isAvailable: true,
    },
  },
  {
    id: 2,
    personalProfile: {
      firstName: "Emily",
      lastName: "Stone",
      dateOfBirth: new Date("1985-03-20"),
      gender: "Female",
      contact: {
        phone: "555-2222",
        email: "emily.stone@hospital.com",
        address: "202 Health Blvd, Townsville",
      },
      bio: "Dr. Emily Stone specializes in pediatrics, offering gentle and attentive care to young patients.",
      profilePictureUrl:
        "https://plus.unsplash.com/premium_photo-1661766718556-13c2efac1388?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZG9jdG9yfGVufDB8fDB8fHww",
    },
    workProfile: {
      staffRole: "Doctor",
      post: "Pediatrics",
      specialization: "Pediatrics",
      department: "Pediatrics",
      qualification: "MD, Pediatrics",
      yearsOfExperience: 18,
      workSchedule: [
        { day: "Tuesday", startTime: 10, endTime: 18 },
        { day: "Thursday", startTime: 10, endTime: 18 },
      ],
      consultationFee: 180,
      isAvailable: true,
    },
  },
  {
    id: 3,
    personalProfile: {
      firstName: "Alice",
      lastName: "Brown",
      dateOfBirth: new Date("1978-11-02"),
      gender: "Female",
      contact: {
        phone: "555-3333",
        email: "alice.brown@hospital.com",
        address: "303 Wellness Way, Villageton",
      },
      bio: "Dr. Alice Brown is an accomplished neurologist with an extensive background in clinical research.",
      profilePictureUrl:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    workProfile: {
      staffRole: "Doctor",
      post: "Neurology",
      specialization: "Neurology",
      department: "Neurology",
      qualification: "MD, Neurology",
      yearsOfExperience: 20,
      workSchedule: [
        { day: "Monday", startTime: 8, endTime: 16 },
        { day: "Friday", startTime: 8, endTime: 16 },
      ],
      consultationFee: 240,
      isAvailable: false,
    },
  },
  {
    id: 4,
    personalProfile: {
      firstName: "Michael",
      lastName: "Green",
      dateOfBirth: new Date("1980-07-10"),
      gender: "Male",
      contact: {
        phone: "555-4444",
        email: "michael.green@hospital.com",
        address: "404 Medical Lane, Metrocity",
      },
      bio: "Dr. Michael Green is an innovative orthopedic surgeon focused on minimally invasive procedures.",
      profilePictureUrl:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9jdG9yfGVufDB8fDB8fHww",
    },
    workProfile: {
      staffRole: "Doctor",
      post: "Orthopedic",
      specialization: "Orthopedics",
      department: "Orthopedics",
      qualification: "MD, Orthopedics",
      yearsOfExperience: 15,
      workSchedule: [
        { day: "Wednesday", startTime: 11, endTime: 19 },
        { day: "Saturday", startTime: 12, endTime: 16 },
      ],
      consultationFee: 320,
      isAvailable: true,
    },
  },
  {
    id: 5,
    personalProfile: {
      firstName: "James",
      lastName: "Rollins",
      dateOfBirth: new Date("1992-12-05"),
      gender: "Male",
      contact: {
        phone: "555-5555",
        email: "james.rollins@hospital.com",
        address: "505 Care Street, Suburbia",
      },
      bio: "Doctor James Rollins is recognized for his compassionate care in emergency settings, ensuring prompt and effective support.",
      profilePictureUrl:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&auto=format&fit=crop&q=60",
    },
    workProfile: {
      staffRole: "Doctor",
      post: "Emergency",
      specialization: "Emergency Care",
      department: "Emergency",
      qualification: "RN",
      yearsOfExperience: 10,
      workSchedule: [
        { day: "Tuesday", startTime: 9, endTime: 17 },
        { day: "Friday", startTime: 14, endTime: 20 },
      ],
      consultationFee: 120,
      isAvailable: false,
    },
  },
];
