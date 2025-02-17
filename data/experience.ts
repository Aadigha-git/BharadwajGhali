export interface Experience {
  company: string;
  role: string;
  location: string;
  duration: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    company: "Indegene",
    role: "Gen AI Intern",
    location: "Bengaluru, KA, IN",
    duration: "Jul 2024",
    description:
      "Contributed to Indegene's AI initiatives by conducting in-depth research on cutting-edge AI technologies, with a focus on fine-tuning techniques. Played a pivotal role in initiating the exploration of the DSPy framework for potential applications within the organization. My research was instrumental in informing senior stakeholders about the feasibility of integrating these advancements into the product roadmap.",
  },
  {
    company: "thinkMolecular",
    role: "Intern",
    location: "Bengaluru, KA, IN",
    duration: "Jan 2024 - Feb 2024",
    description:
      "Designed and implemented Python scripts leveraging RDKit and DecimerAI to precisely extract chemical structures from patent data. Collaborated closely with data science engineers to optimize structure extraction for downstream analysis. Enhanced script efficiency and adaptability by improving modularity and reusability for seamless integration into data pipelines.",
  },

];
