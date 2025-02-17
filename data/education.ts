export interface Education {
  degree: string;
  school: string;
  duration: string;
  grade?: string;
}

export const education: Education[] = [
  {
    degree: "Study Abroad Program GSTAR (3+2)",
    school: "University of California, Irvine",
    duration: "2024 – 2025",
  },
  {
    degree: "B.Tech. Computer Science and Engieering - Artificial Intelligence",
    school: "Amrita Vishwa Vidyapeetham",
    duration: "2021 – 2025",
    grade: "83%",
  },
];
