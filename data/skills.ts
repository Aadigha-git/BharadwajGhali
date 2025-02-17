export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming",
    skills: ["Python", "MATLAB", "SQL", "UNIX Commands (Basic)"],
  },

  {
    category: "Machine Learning",
    skills: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "NLTK", "OpenCV", "LangChain"],
  },
  {
    category: "Tools",
    skills: ["VS Code", "Vim"],
  },
  {
    category: "Others",
    skills: ["Git", "VM", "Docker", "Azure"],
  },
];
