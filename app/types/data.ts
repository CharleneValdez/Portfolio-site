// export interface Education {
//   id: number;
//   school: string;
//   course: string;
//   dates: string;
//   logo: string;
// }

// export interface Experience {
//   id: number;
//   company: string;
//   role: string;
//   dates: string;
//   logo: string;
//   exactDate?: string;
//   responsibilities: string[]; // required
//   achievements: string[];     // required
//   modalKey?: string;
// }
// export type ModalItem = Experience | Education;

// export interface Experience {
//   type: "experience";
//   id: number;
//   company: string;
//   role: string;
//   dates: string;
//   logo: string;
//   exactDate?: string;
//   responsibilities: string[];
//   achievements: string[];
//   modalKey?: string;
// }

export interface Experience {
  type: "experience";
  id: number;
  company: string;
  role: string;
  dates: string;
  logo: string;
  exactDate?: string;
  responsibilities: string[];
  achievements: string[];  
  modalKey?: string;
}

export interface Education {
  type: "education";
  id: number;
  school: string;
  course: string;
  dates: string;
  logo: string;
  achievements: string[];
}


export interface Data {
  education: Education[];
  experience: Experience[];
}

export interface Skill {
  name: string;
  level?: string;
  iconKey?: string;
}

export interface SkillsData {
  frontend: Skill[];
  tools: Skill[];
  design: Skill[];
  softSkills: string[];
}

export type ModalItem = Education | Experience;