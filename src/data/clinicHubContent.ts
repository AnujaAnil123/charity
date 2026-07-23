import heroDoctorsImage from "../imports/ExporttoFigmaClinichubFramerAiClinicHubFamilyClinic/8ba931b2968407d4bad330eaef6d955e354b4657.png"
import introVideoImage from "../imports/ExporttoFigmaClinichubFramerAiClinicHubFamilyClinic/74ad9e39d2d0e780136a5404ffe0301dfa3d3c20.png"
import dentalImage from "../imports/ExporttoFigmaClinichubFramerAiClinicHubFamilyClinic/7581beb6def4ba750e2c174428b93108bda1e1ab.png"
import orthopedicImage from "../imports/ExporttoFigmaClinichubFramerAiClinicHubFamilyClinic/66ed0bf67f10642e9fdb6bbb7aeeff584cdb88e7.png"
import generalMedicineImage from "../imports/ExporttoFigmaClinichubFramerAiClinicHubFamilyClinic/0505ad1fdeee23198d20a743857320271558c33a.png"
import dermatologyImage from "../imports/ExporttoFigmaClinichubFramerAiClinicHubFamilyClinic/3b6ad9410fe0f2448211f4eba71daf0a0c89fe8c.png"
import gynecologyImage from "../imports/ExporttoFigmaClinichubFramerAiClinicHubFamilyClinic/512d081edac4fb6439692af3a255105ef4e34c34.png"
import pediatricImage from "../imports/ExporttoFigmaClinichubFramerAiClinicHubFamilyClinic/732e28bb76d107a029041d3a034af4e4d7cf5af2.png"
import stepOneImage from "../imports/ExporttoFigmaClinichubFramerAiClinicHubFamilyClinic/6ddbedee8e230cd76ab027251511eb8b6445b8f8.png"
import stepTwoImage from "../imports/ExporttoFigmaClinichubFramerAiClinicHubFamilyClinic/138f86cb672a12f3432f64033fb6add33479f07a.png"
import stepThreeImage from "../imports/ExporttoFigmaClinichubFramerAiClinicHubFamilyClinic/986bfcc193d4f5d0af71eb249bd0691fbb701283.png"
import featuredDoctorImage from "../imports/ExporttoFigmaClinichubFramerAiClinicHubFamilyClinic/600fc5eface3875fff0d1668a5bbd0da03f52bca.png"
import doctorPortraitOne from "../imports/ExporttoFigmaClinichubFramerAiClinicHubFamilyClinic/bcd259235d642056b148f7a9df15d4e221a69ba5.png"
import doctorPortraitTwo from "../imports/ExporttoFigmaClinichubFramerAiClinicHubFamilyClinic/5dd11b201659b501e2e6d33fac1e3e7a7b6760e0.png"
import doctorPortraitThree from "../imports/ExporttoFigmaClinichubFramerAiClinicHubFamilyClinic/b16c4ac6e05afb3d2748aa54fb251c619fb13403.png"
import isoBadge from "../imports/ExporttoFigmaClinichubFramerAiClinicHubFamilyClinic/9ebe55c1baad8fc92eac43eeff43047ca728fb78.png"
import hipaaBadge from "../imports/ExporttoFigmaClinichubFramerAiClinicHubFamilyClinic/eb2b7e92e259bf2c3d25223b474c92befe3c9a00.png"
import clinicLogo from "../imports/ExporttoFigmaClinichubFramerAiClinicHubFamilyClinic/9a0c34322fa71ecf360c483c894bfc93422e59ac.png"

export type ImageCard = {
  title: string
  image: string
  description: string
}

export type Doctor = {
  name: string
  role: string
  image: string
}

export const images = {
  clinicLogo,
  heroDoctorsImage,
  introVideoImage,
  isoBadge,
  hipaaBadge,
}

export const navItems = ["Services", "Doctors", "How it works", "Reviews"]

export const stats = [
  { value: "15+", label: "Years of trusted family care" },
  { value: "10K", label: "Patients treated every year" },
  { value: "99%", label: "Overall patient satisfaction rate" },
]

export const services: ImageCard[] = [
  {
    title: "Dental Care",
    image: dentalImage,
    description:
      "Preventive cleanings, cosmetic dentistry, and emergency dental visits.",
  },
  {
    title: "Orthopedics",
    image: orthopedicImage,
    description:
      "Movement, injury, and joint care from diagnosis through recovery.",
  },
  {
    title: "General Medicine",
    image: generalMedicineImage,
    description: "Primary care, annual checkups, and same-week appointments.",
  },
  {
    title: "Dermatology",
    image: dermatologyImage,
    description:
      "Modern skin, hair, and allergy treatment plans for every age.",
  },
  {
    title: "Gynecology",
    image: gynecologyImage,
    description:
      "Compassionate women’s health, screenings, and ongoing wellness care.",
  },
  {
    title: "Pediatric Care",
    image: pediatricImage,
    description:
      "Kid-friendly visits, immunizations, and family-centered guidance.",
  },
]

export const appointmentSteps: ImageCard[] = [
  {
    title: "Choose your care",
    image: stepOneImage,
    description:
      "Pick a specialty, doctor, and time that fits your family schedule.",
  },
  {
    title: "Book in minutes",
    image: stepTwoImage,
    description:
      "Reserve online, share details securely, and get instant confirmation.",
  },
  {
    title: "Feel better faster",
    image: stepThreeImage,
    description:
      "Meet your clinician and leave with a practical, personalized care plan.",
  },
]

export const doctors: Doctor[] = [
  {
    name: "Dr. Anika Rao",
    role: "Family Medicine",
    image: featuredDoctorImage,
  },
  {
    name: "Dr. Marcus Lane",
    role: "Orthopedic Specialist",
    image: doctorPortraitOne,
  },
  { name: "Dr. Elena Park", role: "Pediatrician", image: doctorPortraitTwo },
  {
    name: "Dr. Sofia Miles",
    role: "Dermatologist",
    image: doctorPortraitThree,
  },
]
