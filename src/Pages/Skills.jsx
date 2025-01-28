import { Flex, Text, Grid, Image, Divider } from "@chakra-ui/react";

import bootstrap from "../assets/Skills/Bootstrap.png";
import chakraUi from "../assets/Skills/chakraui.png";
import css from "../assets/Skills/CSS3.png";
import javascript from "../assets/Skills/javaScript.png";
import ethereum from "../assets/Skills/ethereum.png";
import express from "../assets/Skills/expressw.png";
import figma from "../assets/Skills/Figma.png";
import git from "../assets/Skills/Git.png";
import github from "../assets/Skills/githubw.png";
import html from "../assets/Skills/HTML5.png";
import nodejs from "../assets/Skills/Nodejs.png";
import python from "../assets/Skills/Python.png";
import react from "../assets/Skills/React.png";
import solidity from "../assets/Skills/Solidity.png";
import vscode from "../assets/Skills/vsCode.png";
import mongo from "../assets/Skills/MongoDB.png";
import mysql from "../assets/Skills/MySQL.png";
import { motion } from "framer-motion";
import TypewriterText from "../Components/TypewriterText";

const Skills = () => {
  const text = "S K I L L S ".split(" ");
  return (
    <Flex
      width={"100%"}
      flexDir={"column"}
      justifyContent={"center"}
      id="skills"
      alignItems={"center"}
      minH={"100vh"}
      gap={4}
      py={{ base: 10, md: 20 }}
    >
      <Flex flexDir={"column"}>
        <TypewriterText text={text} />
        <motion.div
          initial={{ width: 0 }}
          whileInView={{
            width: "100%", // Slide in to its original position
            transition: {
              duration: 1, // Animation duration
              delay: 0.5,
            },
          }}
          viewport={{ once: true }}
        >
          <Divider borderColor="brand.buttonGreen" borderWidth={2} />
        </motion.div>
      </Flex>
      {/* Skills Icon */}
      <Flex
        color={"brand.white"}
        w={{ lg: "60%", base: "100%" }}
        flexDir={"column"}
        justifyContent={"center"}
        gap={6}
        alignItems={"center"}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{
            opacity: 1,
            y: 0, // Slide in to its original position
            transition: {
              duration: 0.5, // Animation duration
              delay: 0.5,
            },
          }}
          viewport={{ once: true }}
        >
          <Text fontSize={{ lg: "18px", md: "16px", base: "15px" }} mb={4}>
            The skills,tools and technologies i use:
          </Text>
        </motion.div>
        {/* <Flex
          gap={6}
          justifyContent={"center"}
          alignItems={"center"}
          flexDir={"column"}
          alignSelf={"center"}
          w={"100%"}
        > */}

        <Grid
          templateColumns={{
            lg: "repeat(6, 1fr)",
            md: "repeat(5, 1fr)",
            base: "repeat(4, 1fr)",
          }}
          gap={{ lg: 6, md: 4, base: 6 }}
        >
          {skillData?.map((skill, index) => {
            return (
              <Flex
                key={index}
                mb={5}
                w={{ md: "100px" }}
                alignItems={"center"}
                flexDir={"column"}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0, // Slide in to its original position
                    transition: {
                      duration: 0.5, // Animation duration
                      delay: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                >
                  <Flex
                    w={{ lg: "80px", md: "60px", base: "55px" }}
                    h={{ lg: "80px", md: "60px", base: "55px" }}
                    borderRadius={{ lg: 20, base: 15 }}
                    border={"1px solid"}
                    borderColor={"brand.buttonGreen"}
                    as={Flex}
                    alignItems={"center"}
                    justifyContent={"center"}
                    // box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
                    _hover={{
                      boxShadow: " rgba(25,202,164,0.9) 8px -4px 0px 0px ", // Apply shadow on front and right sides
                      // "rgba(25,202,164,0.5) 4px 0px 0px 0px, rgba(25,202,164,0.5) -4px 0px 0px 0px, rgba(25,202,164,0.5) 0px 4px 0px 0px", // Apply shadow on front and right sides
                      transform: "rotateY(45deg) rotateZ(20deg)", // Apply rotation on Y and X axis
                    }}
                    transition={"transform 1.5s ease, box-shadow 1s ease"}
                    // transition: transform 1.5s ease;
                  >
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={{ lg: 12, md: 10, base: 8 }}
                      // height={{lg: 12, md: 10, base: 8 }}
                    />
                  </Flex>
                  {/* <Text
                    color={"whiteAlpha.700"}
                    fontSize={14}
                    fontWeight={300}
                    textAlign={"center"}
                    mt={1}
                  >
                    {skill.name}
                  </Text> */}
                </motion.div>
              </Flex>
            );
          })}
        </Grid>
      </Flex>
    </Flex>
  );
};

export default Skills;

const skillData = [
  { icon: react, name: "React" },
  { icon: html, name: "HTML" },
  { icon: css, name: "CSS" },
  { icon: javascript, name: "Javascript" },
  { icon: bootstrap, name: "Bootstrap" },
  { icon: chakraUi, name: "Chakra UI" },
  { icon: nodejs, name: "Node.js" },
  { icon: express, name: "Express.js" },
  { icon: python, name: "Python" },
  { icon: solidity, name: "Solidity" },
  { icon: mongo, name: "MongoDB" },
  { icon: mysql, name: "MySQL" },
  { icon: figma, name: "Figma" },
  { icon: git, name: "Git" },
  { icon: github, name: "Github" },
  { icon: vscode, name: "VSCode" },
  { icon: ethereum, name: "Ethereum" },
];
