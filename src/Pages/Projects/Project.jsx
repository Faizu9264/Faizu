import { Divider, Flex, Grid } from "@chakra-ui/react";
import TypewriterText from "../../Components/TypewriterText";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import p1 from "../../assets/projects/project1.png";
import p2 from "../../assets/projects/project2.png";
import p3 from "../../assets/projects/project3.png";
import p4 from "../../assets/projects/project4.png";
import p5 from "../../assets/projects/project5.png";

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
          title={"Media Streaming Application"}
          description={
            "A MEAN stack Media Streaming Application where admins can upload and manage video content, and users can browse and stream videos seamlessly. It features secure user management, efficient video organization, and a responsive interface for smooth content delivery."
          }
          image={p1}
          stack={[
            "Html",
            "CSS",
            "JS",
            "Nodejs",
            "Angular",
            "Express",
            "MongoDB",
          ]}
        />
        <ProjectCard
          title={"ICT Academy Kerala Website"}
          description={
            "A revamped ICTAK Academy website built with the MEAN stack features dedicated modules for course management and student enrollment. Admins can add, update, and manage courses and related details, while students can explore courses, view details, and enroll easily through a dynamic and user-friendly interface."
          }
          image={p3}
          stack={[
            "Html",
            "CSS",
            "JS",
            "Nodejs",
            "Angular",
            "Express",
            "MongoDB",
          ]}
        />
        <ProjectCard
          title={"Weather Application"}
          description={
            "A Weather App using RapidAPI provides real-time weather updates and forecasts. Users can search for locations to view detailed weather conditions, including temperature, humidity, and wind speed, through a sleek and responsive interface. Designed for accuracy and ease of use."
          }
          image={p2}
          stack={[
            "Html",
            "CSS",
            "JS",
            "Nodejs",
            "Angular",
            "Express",
            "MongoDB",
            "Rapid API",
          ]}
        />
        <ProjectCard
          title={"Car Rental DApp"}
          description={
            "A Car Rental DApp built on Ethereum enables secure, decentralized car rental services. Using smart contracts, users can browse available cars, book rentals transparently, while ensuring trust and immutability. The platform offers a user-friendly interface for seamless interaction with the blockchain."
          }
          image={p4}
          stack={[
            "MERN Stack",
            "Solidity",
            "Ether js",
            "Ethereum",
            "Blockchain",
            "Hardhat",
            "Metamask",
          ]}
        />
        <ProjectCard
          title={"Honey Supplychain"}
          description={
            "A Honey Supply Chain system built on Hyperledger Fabric ensures transparency and traceability in honey production and distribution. It tracks every stage, from beekeeping to final delivery, using a secure, tamper-proof ledger. Stakeholders can verify product authenticity, enhancing trust and efficiency in the supply chain."
          }
          image={p5}
          stack={["Html", "GO", "MiniFab", "Hyperledger Fabric"]}
        />
      </Grid>
    </Flex>
  );
};

export default Project;
