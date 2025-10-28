const config = {
  title: "VanDat_ | Data Engineer",
  description: {
    long: "Explore the portfolio of Naresh, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Naresh, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Naresh",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations", 
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "VanDat_",
  email: "datlamson2005@gmail.com",
  site: "https://3d-portfolio-lwjr.vercel.app",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    facebook: "https://www.facebook.com/vawnddatj",
    linkedin: "https://www.linkedin.com/in/dat-van-184351386/",
    instagram: "https://www.instagram.com/vnadat.1th1",
    github: "https://github.com/vandat-snk",
  },
};
export { config };
