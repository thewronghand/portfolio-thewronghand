export interface Skill {
  title: string;
  imgUrl: string;
  description: string[];
  bgColorCode: string;
}

export interface SkillSet {
  title: string;
  data: Skill[];
}

export interface SkillListProps {
  data: SkillSet[];
  onItemClick: (skill: Skill) => void;
  selectedSkill: Skill | null;
}

interface DocUrl {
  title: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  thumbnailBgColor: string;
  secondaryColor: string;
  thumbnailLogo: string;
  type: string;
  imgs: Array<string>;
  stacks: Array<string>;
  description: string;
  docsUrls?: DocUrl[];
  deployUrl: string;
  gitHubUrl: string;
  nextProject: NextProject;
}

interface NextProject {
  title: string;
  path: string;
}

export interface Profile {
  description: string;
  imgUrl: string;
}

export interface Contact {
  title: string;
  subtitle: string;
  data: string;
  type: string;
}

export interface ContactMisc {
  title: string;
  data: ContactMiscData[];
  type: string;
}

export interface ContactMiscData {
  title: string;
  img: string;
  url: string;
}

export interface ContactSet {
  data: (Contact | ContactMisc)[];
}

export interface ProjectListImgSectionProps {
  hoveredItem: Project | null;
}
