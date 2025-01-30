
export interface Person {
    id: number;
    name: string;
    photo: string;
    dob: string;
    gender: string;
    contact?: string;
    emergencyContact?: string;
    insuranceProvider?: string;
    respiratoryRate?: number | string;
    temperature?: number | string;
    heartRate?: number | string;
  }
export const people: Person[] = [
    { id: 1, name: "John Doe", dob: "1980-05-15", gender: "Male", photo: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzIxNjl8MHwxfHNlYXJjaHwxfHxkb2N0b3J8ZW58MHx8fHwxNzM3NDQxMDUzfDA&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 2, name: "Jane Smith", dob: "1992-08-22", gender: "Female", photo: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzIxNjl8MHwxfHNlYXJjaHwxfHxkb2N0b3J8ZW58MHx8fHwxNzM3NDQxMDUzfDA&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 3, name: "Bob Johnson", dob: "1975-11-30", gender: "Male", photo: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzIxNjl8MHwxfHNlYXJjaHwxfHxkb2N0b3J8ZW58MHx8fHwxNzM3NDQxMDUzfDA&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 4, name: "John2 Doe", dob: "1980-05-15", gender: "Male", photo: "/placeholder.svg?height=40&width=40" },
    { id: 5, name: "Jane2 Smith", dob: "1992-08-22", gender: "Female", photo: "/placeholder.svg?height=40&width=40" },
    { id: 6, name: "Bob2 Johnson", dob: "1975-11-30", gender: "Male", photo: "/placeholder.svg?height=40&width=40" },
    { id: 7, name: "John3 Doe", dob: "1980-05-15", gender: "Male", photo: "/placeholder.svg?height=40&width=40" },
    { id: 8, name: "Jane3 Smith", dob: "1992-08-22", gender: "Female", photo: "/placeholder.svg?height=40&width=40" },
    { id: 9, name: "Bob3 Johnson", dob: "1975-11-30", gender: "Male", photo: "/placeholder.svg?height=40&width=40" },
    { id: 10, name: "John4 Doe", dob: "1980-05-15", gender: "Male", photo: "/placeholder.svg?height=40&width=40" },
    { id: 11, name: "Jane4 Smith", dob: "1992-08-22", gender: "Female", photo: "/placeholder.svg?height=40&width=40" },
    { id: 12, name: "Bob4 Johnson", dob: "1975-11-30", gender: "Male", photo: "/placeholder.svg?height=40&width=40" },
  ];