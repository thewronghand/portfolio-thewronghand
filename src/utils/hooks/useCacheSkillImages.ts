import { useEffect } from "react";
import { Project, SkillSet } from "../../types";

const cacheImage = (url: string) => {
  const img = new Image();
  img.src = url;
};

export const useCacheSkillImages = (data: SkillSet[]) => {
  useEffect(() => {
    const imageUrls = data.flatMap((skillSet) =>
      skillSet.data.map((skill) => skill.imgUrl)
    );
    imageUrls.forEach(cacheImage);
  }, [data]);
};

export const useCacheProjectThumbnails = (data: Project[] | null) => {
  useEffect(() => {
    if (data) {
      const imageUrls = data.flatMap((project) => project.thumbnailLogo);
      imageUrls.forEach(cacheImage);
    }
  }, [data]);
};

export const useCacheProjectImages = (data: Project | null) => {
  useEffect(() => {
    data && data.imgs.forEach(cacheImage);
  }, [data]);
};
