import { Patient } from "../types/patientstypes";


const PatientData: Patient[] = [{
  patient_id: 1,
  personal_data: {
    first_name: "John",
    last_name: "Doe",
    date_of_birth: "1985-04-12",
    gender: "Male",
    image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzIxNjl8MHwxfHNlYXJjaHwxfHxkb2N0b3J8ZW58MHx8fHwxNzM3NDQxMDUzfDA&ixlib=rb-4.0.3&q=80&w=1080",
    contact_information: {
      phone_number: "+1234567890",
      email: "johndoe@example.com",
      address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        postal_code: "90210",
        country: "USA"
      },
      emergencyContact: {
        relationship: "Mother",
        name: "Jane Doe",
        phone: "+1234567890",
        email: "janedoe@example.com",
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        postal_code: "90210",
        country: "USA"
      },
    }
  },
  medical_history: {
    allergies: [
      {
        substance: "Penicillin",
        reaction: "Rash",
        severity: "Moderate"
      },
      {
        substance: "Peanuts",
        reaction: "Anaphylaxis",
        severity: "Severe"
      }
    ],
    conditions: [
      {
        condition_name: "Hypertension",
        diagnosis_date: "2010-08-15",
        status: "Managed",
        treatments: [
          {
            medication: "Lisinopril",
            dosage: "10mg",
            frequency: "Once daily"
          }
        ]
      },
      {
        condition_name: "Type 2 Diabetes",
        diagnosis_date: "2015-03-22",
        status: "Managed",
        treatments: [
          {
            medication: "Metformin",
            dosage: "500mg",
            frequency: "Twice daily"
          }
        ]
      }
    ],
    surgeries: [
      {
        surgery_name: "Appendectomy",
        date: "2005-07-10",
        outcome: "Successful"
      }
    ],
    immunizations: [
      {
        vaccine: "Influenza",
        date_administered: "2022-10-01"
      },
      {
        vaccine: "COVID-19",
        date_administered: "2021-03-15",
        booster_date: "2021-10-01"
      }
    ],
    family_history: [
      {
        relation: "Father",
        condition: "Heart Disease",
        age_at_diagnosis: 55
      },
      {
        relation: "Mother",
        condition: "Breast Cancer",
        age_at_diagnosis: 60
      }
    ]
  },
  yearly_data: [
    {
      year: "2023",
      monthly_data: [
        {
          month: "2023-01",
          vital_signs: [
            {
              date: "2023-01-15",
              systolic_blood_pressure: "120 mmHg",
              diastolic_blood_pressure: "80 mmHg",
              temperature: "98.6°F",
              respiratory_rate: "16 breaths/min",
              heart_rate: "72 bpm"
            }
          ],
          lab_tests: [
            {
              test_name: "Complete Blood Count (CBC)",
              test_date: "2023-01-10",
              results: {
                white_blood_cells: "7,000 cells/mcL",
                red_blood_cells: "5.2 million cells/mcL",
                hemoglobin: "14.5 g/dL",
                hematocrit: "42%",
                platelets: "250,000 cells/mcL"
              },
              interpretation: "Normal"
            },
            {
              test_name: "Lipid Panel",
              test_date: "2023-01-10",
              results: {
                total_cholesterol: "180 mg/dL",
                hdl_cholesterol: "50 mg/dL",
                ldl_cholesterol: "100 mg/dL",
                triglycerides: "150 mg/dL"
              },
              interpretation: "Borderline high LDL cholesterol"
            }
          ],
          visits: [
            {
              visit_date: "2023-01-15",
              reason: "Routine Checkup",
              diagnosis: "Healthy",
              prescriptions: [],
              notes: "Patient is in good health, no issues reported."
            }
          ]
        },
        {
          month: "2023-02",
          vital_signs: [
            {
              date: "2023-02-10",
              systolic_blood_pressure: "125 mmHg",
              diastolic_blood_pressure: "82 mmHg",
              temperature: "98.4°F",
              respiratory_rate: "17 breaths/min",
              heart_rate: "74 bpm"
            }
          ],
          lab_tests: [],
          visits: []
        },
        {
          month: "2023-03",
          vital_signs: [
            {
              date: "2023-03-12",
              systolic_blood_pressure: "118 mmHg",
              diastolic_blood_pressure: "78 mmHg",
              temperature: "98.2°F",
              respiratory_rate: "15 breaths/min",
              heart_rate: "70 bpm"
            }
          ],
          lab_tests: [],
          visits: []
        },
        {
          month: "2023-04",
          vital_signs: [
            {
              date: "2023-04-20",
              systolic_blood_pressure: "130 mmHg",
              diastolic_blood_pressure: "85 mmHg",
              temperature: "98.4°F",
              respiratory_rate: "18 breaths/min",
              heart_rate: "75 bpm"
            }
          ],
          lab_tests: [
            {
              test_name: "HbA1c",
              test_date: "2023-04-18",
              results: {
                value: "6.2%"
              },
              interpretation: "Controlled"
            }
          ],
          visits: [
            {
              visit_date: "2023-04-20",
              reason: "Follow-up for Hypertension",
              diagnosis: "Hypertension",
              prescriptions: [
                {
                  medication: "Lisinopril",
                  dosage: "10mg",
                  frequency: "Once daily"
                }
              ],
              notes: "Blood pressure is well-controlled with current medication."
            }
          ]
        }
      ]
    }
  ]
}];

export default PatientData;