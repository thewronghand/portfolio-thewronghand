export interface Skill {
  title: string;
  icon: string;
  description: string;
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
