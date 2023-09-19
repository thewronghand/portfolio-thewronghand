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
  thumbnailLogo: string;
  type: string;
  imgs: Array<string>;
  stacks: Array<string>;
  description: string;
  docsUrls: DocUrl[];
  deployUrl: string;
  gitHubUrl: string;
}

export interface Profile {
  description: string;
  imgUrl: string;
}
