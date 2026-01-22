import { Puzzle, Phone, Earth, Laptop } from "lucide-react";
export const services = [
  {
    title: "Online Decoder",
    icon: Puzzle,
    action: () => {
      window.location.href = "/tool";
    },
  },

  {
    title: "Mobile Application",
    icon: Phone,
    action: () => {},
  },

  {
    title: "API",
    icon: Laptop,
    action: () => {},
  },
];

export const team = [
  {
    name: "Nikunj Chauhan",
    profile: "https://linkedin.com/in/nkca122",
    img: "https://media.licdn.com/dms/image/v2/D5603AQFcOpQrMeYSqQ/profile-displayphoto-scale_400_400/B56ZiyCa9WHQAk-/0/1755333647086?e=1770854400&v=beta&t=QQvQF1Bpl_aWBEgxYGzyw_Mqv_EEb2-jQBIxj-LsiDc",
    description:
      "Led the technical architecture and implementation of the solution, designing the core API, integrating multiple platforms, and ensuring scalability, performance, and clean code across the system",
  },
  {
    name: "Satyam Kumar Kesarwani",
    profile: "https://www.linkedin.com/in/satyam-kumar-kesarwani-763b61293/",
    img: "https://media.licdn.com/dms/image/v2/D5603AQFy0Oz-LSK8Ow/profile-displayphoto-scale_400_400/B56Zi4c0qDG0Ag-/0/1755441223294?e=1770854400&v=beta&t=9ZpZ-8BasxpvYti8pmBU--5hvkb8jfp3zzCXFZ1UQ0o",
    description:
      "Drove the user experience and interface design across web, mobile, and extension platforms, focusing on clarity, accessibility, and intuitive workflows to make complex cryptanalysis easy to use",
  },
  {
    name: "Sarafaraj Nasardi",
    profile: "https://www.linkedin.com/in/sarafaraj-nasardi-7722b31b3/",
    img: "https://media.licdn.com/dms/image/v2/D4D03AQGxkjfbl-cjvQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724172741248?e=1770854400&v=beta&t=LPSVw_49u9bq9q5MjCHLygkqa3QOeeu9fE_JELx6Qrg",
    description:
      "Ensured reliability and quality by rigorously testing features, validating cipher analysis accuracy, and identifying edge cases across platforms to deliver a stable and secure final product",
  },
];
