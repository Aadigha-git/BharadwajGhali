export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming",
    skills: ["C++", "Java", "Python", "Rust", "Solidity"],
  },
  {
    category: "Web Development",
    skills: ["HTML/CSS/JS", "React", "NodeJS", "Django", "NextJS"],
  },
  {
    category: "Machine Learning",
    skills: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn"],
  },
  {
    category: "Tools",
    skills: ["Git", "Docker", "AWS", "Azure", "Playwright"],
  },
];