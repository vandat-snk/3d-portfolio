const config = {
  title: "VanDat_ | Data Engineer",
  description: {
    long: "Explore the portfolio of Van Dat, a data engineer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including My Portfolio, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Van Dat, a data engineer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Van Dat",
    "portfolio",
    "data engineer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "VanDat_",
  email: "datlamson2005@gmail.com",
  site: "https://3d-portfolio-lwjr.vercel.app",  // ✅ Quan trọng

  get ogImg() {
    return this.site + "/assets/seo/og-image.png"; // ✅ hoặc ảnh bạn đã đổi tên
  },
  social: {
    facebook: "https://www.facebook.com/vawnddatj",
    linkedin: "https://www.linkedin.com/in/dat-van-184351386/",
    instagram: "https://www.instagram.com/vnadat.1th1",
    github: "https://github.com/vandat-snk",
  },
};
export { config };
