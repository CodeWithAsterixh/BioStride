import React from "react";

interface DiagnosisEntry {
  date: string;
  diagnosis: string;
  treatment: string;
}

interface Person {
  id: number;
  name: string;
}

interface DiagnosisHistoryProps {
  person?: Person;
}

const diagnosisHistory: Record<number, DiagnosisEntry[]> = {
  1: [
    { date: "2023-01-15", diagnosis: "Common Cold", treatment: "Rest and fluids" },
    { date: "2023-03-22", diagnosis: "Sprained Ankle", treatment: "RICE method and pain medication" },
  ],
  2: [
    { date: "2023-02-10", diagnosis: "Migraine", treatment: "Pain medication and rest in a dark room" },
    { date: "2023-04-05", diagnosis: "Allergic Reaction", treatment: "Antihistamines and avoiding allergen" },
  ],
  3: [
    { date: "2023-01-30", diagnosis: "Hypertension", treatment: "Prescribed medication and lifestyle changes" },
    { date: "2023-05-12", diagnosis: "Bronchitis", treatment: "Antibiotics and rest" },
  ],
};

const DiagnosisHistory: React.FC<DiagnosisHistoryProps> = ({ person }) => {
  if (!person) {
    return (
      <div className="h-full flex items-center justify-center text-gray-500">
        Select a person to view their diagnosis history
      </div>
    );
  }

  const history = diagnosisHistory[person.id] || [];

  return (
    <div className="h-full flex flex-col p-4">
      <h2 className="text-2xl font-bold mb-4">{person.name}'s Diagnosis History</h2>
      <div className="flex-1 overflow-auto">
        {history.map((entry, index) => (
          <div key={index} className="mb-4 p-4 bg-white rounded shadow">
            <div className="font-semibold">{entry.date}</div>
            <div>Diagnosis: {entry.diagnosis}</div>
            <div>Treatment: {entry.treatment}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiagnosisHistory;
