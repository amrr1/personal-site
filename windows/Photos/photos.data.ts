export interface Photo {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}

export const photosData: Photo[] = [
  {
    id: "placeholder-photo",
    src: "/images/placeholder.jpg",
    alt: "Placeholder photo",
    caption: "A photo caption goes here.",
  },
];
