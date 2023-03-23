const vaccineList = [
  {
    title: "Infant",
    Sublist: [
      {
        time: "Birth",
        vaccines: [
          {
            name: "Hepatitis B - 1",
            Dose: "1 of 4",
            protectsAgainst:
              "Hepatitis B infection; a liver infection caused by the Hepatitis B virus.",
            toBeGiven: "within the first 24 hours after birth",
            protection:
              "The Hepatitis B vaccine can be provided alone or in combination vaccines that also help protect against other diseases, as part of routine immunization for infants. Consult with your healthcare professional for further information.",
          },
          {
            name: "BCG",
            Dose: "1 of 1",
            protectsAgainst: "Tuberculosis",
            toBeGiven: "Before discharge",
            protection:
              "BCG is currently the only available TB vaccine and can help protect against tuberculosis infection. The BCG vaccine can be provided as part of routine immunization for infants. Consult with your healthcare professional for further information.",
          },
          {
            name: "OPV",
            Dose: "1 of 1",
            protectsAgainst:
              "Polio; a disease caused by a virus that can affect the nerves",
            toBeGiven: "As soon as possible after birth",
            protection:
              "The polio vaccine can be provided alone or included in combination vaccines that also help protect against other diseases, as part of routine immunization for infants. Unfortunately, there is no cure for the disease. Consult with your healthcare professional for further information.",
          },
        ],
      },
      {
        time: "6 Weeks",
        vaccines: [
          {
            name: "DTP - 1",
            Dose: "1 of 3",
            protectsAgainst:
              "Diphtheria, tetanus and pertussis. This vaccination is a booster that helps boost the immunity to the same diseases the DTP vaccine help protects from.",
            toBeGiven: "at 6 Weeks",
            protection:
              "The diphtheria, tetanus, and pertussis vaccinations are included in combination vaccines that also help protect against other diseases, as part of routine immunization for children.Consult with your healthcare professional for further information.",
          },
          {
            name: "IPV - 1",
            Dose: "1 of 5",
            protectsAgainst:
              "Polio; a disease caused by a virus that can affect the nerves",
            toBeGiven: "at 6 Weeks",
            protection:
              "The polio vaccine can be provided alone or included in combination vaccines that also help protect against other diseases, as part of routine immunization for infants. Unfortunately, there is no cure for the disease. Consult with your healthcare professional for further information.",
          },
          {
            name: "Hib - 1",
            Dose: "1 of 4",
            protectsAgainst: "Haemophilus influenzae type B (Hib) bacteria",
            toBeGiven: "At 6 weeks of age",
            protection:
              "The Hib vaccine can be included in combination vaccines that also help protect against other diseases, as part of routine immunization for infants. Consult with your healthcare professional for further information.The spread of Hib disease can also be prevented by hand washing, improving water supply and sanitation, and reducing household air pollution.",
          },
          {
            name: "Hepatitis B - 2",
            Dose: "2 of 4",
            protectsAgainst:
              "Hepatitis B infection; a liver infection caused by the Hepatitis B virus.",
            toBeGiven: "at 6 Weeks",
            protection:
              "The Hepatitis B vaccine can be provided alone or in combination vaccines that also help protect against other diseases, as part of routine immunization for infants. Consult with your healthcare professional for further information.",
          },
          {
            name: "Rotavirus - 1",
            Dose: "1 of 3",
            protectsAgainst:
              "rotavirus infection; a disease caused by a virus that can affect the intestines",
            toBeGiven: "at 6 Weeks",
            protection:
              "The rotavirus vaccine is an oral vaccine provided as part of routine immunization for infants. Consult with your healthcare professional for further information. Good hygiene like handwashing and cleanliness, improved water and sanitation are important factors to help control against infection.",
          },
          {
            name: "PCV - 1",
            Dose: "1 of 4",
            protectsAgainst:
              "pneumococcal disease that can result in pneumonia, otitis media, meningitis and other diseases caused by the pneumococcal bacteria",
            toBeGiven: "at 6 Weeks",
            protection:
              "Pneumococcal vaccination can help protect against infection and can be provided as part of routine immunization for infants. Consult with your healthcare professional for further information.",
          },
        ],
      },
      {
        time: "10 Weeks",
        vaccines: [
          {
            name: "DTP - 2",
            Dose: "2 of 3",
            protectsAgainst:
              "Diphtheria, tetanus and pertussis. This vaccination is a booster that helps boost the immunity to the same diseases the DTP vaccine help protects from.",
            toBeGiven: "at 10 Weeks",
            protection:
              "The diphtheria, tetanus, and pertussis vaccinations are included in combination vaccines that also help protect against other diseases, as part of routine immunization for children.Consult with your healthcare professional for further information.",
          },
          {
            name: "IPV - 2",
            Dose: "2 of 5",
            protectsAgainst:
              "Polio; a disease caused by a virus that can affect the nerves",
            toBeGiven: "at 10 Weeks",
            protection:
              "The polio vaccine can be provided alone or included in combination vaccines that also help protect against other diseases, as part of routine immunization for infants. Unfortunately, there is no cure for the disease. Consult with your healthcare professional for further information.",
          },
          {
            name: "Hib - 2",
            Dose: "2 of 4",
            protectsAgainst: "Haemophilus influenzae type B (Hib) bacteria",
            toBeGiven: "At 10 weeks of age",
            protection:
              "The Hib vaccine can be included in combination vaccines that also help protect against other diseases, as part of routine immunization for infants. Consult with your healthcare professional for further information.The spread of Hib disease can also be prevented by hand washing, improving water supply and sanitation, and reducing household air pollution.",
          },
          {
            name: "Hepatitis B - 3",
            Dose: "3 of 4",
            protectsAgainst:
              "Hepatitis B infection; a liver infection caused by the Hepatitis B virus.",
            toBeGiven: "at 10 Weeks",
            protection:
              "The Hepatitis B vaccine can be provided alone or in combination vaccines that also help protect against other diseases, as part of routine immunization for infants. Consult with your healthcare professional for further information.",
          },
          {
            name: "Rotavirus - 2",
            Dose: "2 of 3",
            protectsAgainst:
              "rotavirus infection; a disease caused by a virus that can affect the intestines",
            toBeGiven: "at 10 Weeks",
            protection:
              "The rotavirus vaccine is an oral vaccine provided as part of routine immunization for infants. Consult with your healthcare professional for further information. Good hygiene like handwashing and cleanliness, improved water and sanitation are important factors to help control against infection.",
          },
          {
            name: "PCV - 2",
            Dose: "2 of 4",
            protectsAgainst:
              "pneumococcal disease that can result in pneumonia, otitis media, meningitis and other diseases caused by the pneumococcal bacteria",
            toBeGiven: "at 10 Weeks",
            protection:
              "Pneumococcal vaccination can help protect against infection and can be provided as part of routine immunization for infants. Consult with your healthcare professional for further information.",
          },
        ],
      },
      {
        time: "14 Weeks",
        vaccines: [
          {
            name: "DTP - 3",
            Dose: "3 of 3",
            protectsAgainst:
              "Diphtheria, tetanus and pertussis. This vaccination is a booster that helps boost the immunity to the same diseases the DTP vaccine help protects from.",
            toBeGiven: "at 14 Weeks",
            protection:
              "The diphtheria, tetanus, and pertussis vaccinations are included in combination vaccines that also help protect against other diseases, as part of routine immunization for children.Consult with your healthcare professional for further information.",
          },
          {
            name: "IPV - 3",
            Dose: "3 of 5",
            protectsAgainst:
              "Polio; a disease caused by a virus that can affect the nerves",
            toBeGiven: "at 14 Weeks",
            protection:
              "The polio vaccine can be provided alone or included in combination vaccines that also help protect against other diseases, as part of routine immunization for infants. Unfortunately, there is no cure for the disease. Consult with your healthcare professional for further information.",
          },
          {
            name: "Hib - 3",
            Dose: "3 of 4",
            protectsAgainst: "Haemophilus influenzae type B (Hib) bacteria",
            toBeGiven: "At 14 weeks of age",
            protection:
              "The Hib vaccine can be included in combination vaccines that also help protect against other diseases, as part of routine immunization for infants. Consult with your healthcare professional for further information.The spread of Hib disease can also be prevented by hand washing, improving water supply and sanitation, and reducing household air pollution.",
          },
          {
            name: "Hepatitis B - 4",
            Dose: "4 of 4",
            protectsAgainst:
              "Hepatitis B infection; a liver infection caused by the Hepatitis B virus.",
            toBeGiven: "at 14 Weeks",
            protection:
              "The Hepatitis B vaccine can be provided alone or in combination vaccines that also help protect against other diseases, as part of routine immunization for infants. Consult with your healthcare professional for further information.",
          },
          {
            name: "Rotavirus - 3",
            Dose: "3 of 3",
            protectsAgainst:
              "rotavirus infection; a disease caused by a virus that can affect the intestines",
            toBeGiven: "at 14 Weeks",
            protection:
              "The rotavirus vaccine is an oral vaccine provided as part of routine immunization for infants. Consult with your healthcare professional for further information. Good hygiene like handwashing and cleanliness, improved water and sanitation are important factors to help control against infection.",
          },
          {
            name: "PCV - 3",
            Dose: "3 of 4",
            protectsAgainst:
              "pneumococcal disease that can result in pneumonia, otitis media, meningitis and other diseases caused by the pneumococcal bacteria",
            toBeGiven: "at 14 Weeks",
            protection:
              "Pneumococcal vaccination can help protect against infection and can be provided as part of routine immunization for infants. Consult with your healthcare professional for further information.",
          },
        ],
      },
      {
        time: "6 months",
        vaccines: [
          {
            name: "Influenza Vaccine - 1",
            Dose: "1 of 2",
            protectsAgainst: "Influenza, commonly known as the 'seasonal flu'; a respiratory infection caused by two main types of influenza virus: Types A and B.",
            toBeGiven: " At 6 months of age",
            protection: "The flu vaccine can be provided as part of routine immunization for infants. Immunity from vaccination wanes over time so annual vaccination may be needed to protect against the flu. Consult with your healthcare professional for further information.",
          },
        ],
      },
      {
        time: "7 months",
        vaccines: [
          {
            name: "Influenza Vaccine - 2",
            Dose: "2 of 2",
            protectsAgainst: "Influenza, commonly known as the 'seasonal flu'; a respiratory infection caused by two main types of influenza virus: Types A and B.",
            toBeGiven: "At 7 months of age & to be repeated every year, in pre-monsoon period, till 5 years of age.",
            protection: "The flu vaccine can be provided as part of routine immunization for infants. Immunity from vaccination wanes over time so annual vaccination may be needed to protect against the flu. Consult with your healthcare professional for further information.",
          },
        ],
      },
      {
        time: "9 months",
        vaccines: [
          {
            name: "MMR - 1",
            Dose: " 1 of 3",
            protectsAgainst: "Measles, Mumps, and Rubella",
            toBeGiven: "At 9 months",
            protection: "Children should get two doses of MMR vaccine, starting with the first dose at 12 to 15 months of age, and the second dose at 4 through 6 years of age. Teens and adults should also be up to date on their MMR vaccination.",
          },
        ],
      }
      
      
    ],
  },
  {
    title: "Toodlers",
    Sublist: [
      {
        time: "Birth",
        vaccines: [
          {
            name: "",
            Dose: "",
            protectsAgainst: "",
            toBeGiven: "",
            protection: "",
          },
        ],
      },
    ],
  },
  {
    title: "School Going Kids",
    Sublist: [
      {
        time: "Birth",
        vaccines: [
          {
            name: "",
            Dose: "",
            protectsAgainst: "",
            toBeGiven: "",
            protection: "",
          },
        ],
      },
    ],
  },
];

export default vaccineList;
