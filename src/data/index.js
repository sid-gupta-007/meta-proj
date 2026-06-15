import { faGithub, faLinkedin, faMedium, faStackOverflow } from "@fortawesome/free-brands-svg-icons";

export const socials = [
  { icon: faGithub, url: "https://github.com/sid-gupta-007" },
  { icon: faLinkedin, url: "https://www.linkedin.com/in/siddharth-gupta-775357211" },
];

export const projects = [
  {
    title: "Encephlo",
    description: "A Deep Learning diagnostic tool for automated brain tumor classification and interpretability",
    getImageSrc: () => "https://picsum.photos/seed/encephlo/800/600",
  },
  {
    title: "Gravity-DBMS",
    description: "A visual based DBMS Project",
    getImageSrc: () => "https://picsum.photos/seed/gravity/800/600",
  },
  {
    title: "emergency-med-help",
    description: "for solution challenge 2026",
    getImageSrc: () => "https://picsum.photos/seed/emergency/800/600",
  },
  {
    title: "button-styles",
    description: "It is a collection of different button styles explored using HTML, CSS, and JavaScript for modern web interfaces.",
    getImageSrc: () => "https://picsum.photos/seed/buttons/800/600",
  },
];
