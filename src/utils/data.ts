import skills from "@/data/skills.json";
import projects from "@/data/projects.json";
import career from "@/data/career.json";

// Export des données
export { skills, projects, career };

// Fonctions utilitaires
export const getSkillById = (id: string) =>
  skills.find((skill) => skill.id === id);

export const getProjectById = (projectId: string) =>
  projects.find((project) => project.id === projectId);

export const getSoftSkills = () =>
  skills.filter((skill) => skill.type === "soft");

export const getTechnicalSkills = () =>
  skills.filter((skill) => skill.type === "tech");

export const getRelatedProjects = (skillId: string) =>
  projects.filter((project) => project.skills.includes(skillId));

export const getRelatedSkills = (projectId: string) => {
  const project = getProjectById(projectId);
  return project
    ? skills.filter((skill) => project.skills.includes(skill.id))
    : [];
};

