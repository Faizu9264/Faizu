import { Divider, Flex, Grid } from "@chakra-ui/react";
import TypewriterText from "../../Components/TypewriterText";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import hfHub from "../../assets/projects/hf-hub.png";
import staycation from "../../assets/projects/staycation.png";
import emotionDetector from "../../assets/projects/emotiondetector.jpg";
import imaginify from "../../assets/projects/imaginify.png";
import shopifyProductListing from "../../assets/projects/shopifyProductListing.png";
import goatGame from "../../assets/projects/goatGame.jpg";
import invoiceDashboard from "../../assets/projects/invoiceDashboard.jpg";
import todolist from "../../assets/projects/todolist.png";

const Project = () => {
  const text = "P r o j e c t s ".split(" ");

  return (
    <Flex
      width={"100%"}
      flexDir={"column"}
      justifyContent={"center"}
      id="projects"
      alignItems={"center"}
      // px={10}
      py={20}
      gap={10}
    >
      <Flex flexDir={"column"}>
        <TypewriterText text={text} />
        <motion.div
          initial={{ width: 0 }}
          whileInView={{
            width: "100%", // Slide in to its original position
            transition: {
              duration: 1, // Animation duration
              delay: 0.8,
            },
          }}
          viewport={{ once: true }}
        >
          <Divider borderColor="brand.buttonGreen" borderWidth={2} />
        </motion.div>
      </Flex>
      {/* Project Card */}
      <Grid
        templateColumns={{
          xl: "repeat(3, 1fr)",
          md: "repeat(2, 1fr)",
          base: "repeat(1, 1fr)",
        }}
        gap={{ xl: 10, lg: 16, md: 10, base: 5 }}
      >
        <ProjectCard
          title={"H&F Hub"}
          description={
            "An E-commerce site built with MongoDB, Express, Node.js, and EJS. It uses MVC architecture, has NodeMailer for OTP, Razorpay for payments, and an admin dashboard for managing the platform."
          }
          image={hfHub}
          stack={["Node.js", "Express", "MongoDB", "EJS", "Razorpay", "CSS", "Multer"]}
        />
        <ProjectCard
          title={"StayCation"}
          description={
            "A hotel booking platform built with MongoDB, Express, Node.js, React, and Redux. It uses clean architecture, features Google One-Tap Login, Mapbox search, Stripe for payments, and a powerful admin dashboard."
          }
          image={staycation}
          stack={["React", "Redux", "Node.js", "Express", "MongoDB", "Stripe", "Mapbox"]}
        />
        <ProjectCard
          title={"Emotion Detector"}
          description={
            "A real-time emotion detection app built using React, TensorFlow.js, Face API, and WebCam. It identifies emotions from facial expressions and displays them instantly on the screen."
          }
          image={emotionDetector}
          stack={["React", "TensorFlow.js", "Face API", "WebCam", "Emotion", "Age", "Gender"]}
        />
        <ProjectCard
          title={"IMAGINIFY"}
          description={
            "A SaaS application built with Next.js, Clerk, Radix UI, Stripe, Cloudinary, MongoDB, React, Tailwind CSS, and TypeScript. It supports GitHub and Google login via Clerk, offering features like Image Restore, Fill, Object Remove, Object Recolor and BG Removal."
          }
          image={imaginify}
          stack={["Next.js", "Clerk", "Stripe", "Cloudinary", "MongoDB", "Tailwind", "TypeScript"]}
        />
        <ProjectCard
          title={"Shopify Product Listing"}
          description={
            "A product listing web application built with Next.js and Shopify Polaris. Developed as a machine task, it features a product table, advanced filtering, error handling, and the ability to add new products at the top. Got hired. 🤩"
          }
          image={shopifyProductListing}
          stack={["Next.js", "Shopify Polaris", "React", "Vercel", "GitHub"]}
        />
        <ProjectCard
          title={"Goat Game"}
          description={
            "A fun web-based game built with JavaScript and Canvas API. Features scoring, levels, and sound effects."
          }
          image={goatGame}
          stack={["JavaScript", "Canvas API", "HTML", "CSS"]}
        />
        <ProjectCard
          title={"Invoice Dashboard"}
          description={
            "A dashboard for managing invoices, clients, and payments. Built with React and Node.js."
          }
          image={invoiceDashboard}
          stack={["React", "Node.js", "MongoDB", "Express"]}
        />
        <ProjectCard
          title={"Todo List"}
          description={
            "A simple and effective todo list app with drag-and-drop and persistent storage."
          }
          image={todolist}
          stack={["React", "LocalStorage", "CSS"]}
        />
      </Grid>
    </Flex>
  );
};

export default Project;
