import { Flex, Icon, Text } from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaYoutube } from "react-icons/fa";
import { SiBuymeacoffee } from "react-icons/si";

const Footer = () => {
  // to get current year
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Flex
      alignItems={"center"}
      p={6}
      justifyContent={"space-between"}
      flexDir={{ base: "column", md: "row" }}
      gap={{ base: 3 }}
      zIndex={100}
      mb={{ base: 20, md: 0 }}
      w={"100%"}
    >
      {/* Logo or Name */}
      <Text fontSize={{ md: 28, base: 22 }} fontWeight={700} color="#33FFCC">
        Faizu Rahman
      </Text>
      {/* Copyright */}{" "}
      <Text color={"white"} fontSize={{ md: 16, base: 14 }}>
        © {year} Faizu Rahman. All rights reserved.{" "}
      </Text>
      {/* Logo */}
      <Flex gap={4}>
        {/* Icons */}
        {footerIcon?.map((data, i) => {
          return (
            <Flex
              border={"1px solid"}
              alignItems={"center"}
              justifyContent={"center"}
              width={{ md: "40px", base: "35px" }}
              height={{ md: "40px", base: "35px" }}
              borderRadius={50}
              borderColor={"brand.white"}
              key={i}
              onClick={() => {
                window.open(data.link, "_blank");
              }}
              cursor={"pointer"}
            >
              <Icon
                as={data.iconName}
                boxSize={{ lg: 6, base: 5 }}
                color={"brand.white"}
              />
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Footer;

const footerIcon = [
  { iconName: CgMail, link: "mailto:codecodersofficial@gmail.com" },
  {
    iconName: FaLinkedinIn,
    link: "https://www.linkedin.com/in/faizu-rahman-a496aa256/",
  },
  { iconName: BsGithub, link: "https://github.com/Faizu9264" },
  { iconName: FaYoutube, link: "https://www.youtube.com/@CodeCodersYT" },
  { iconName: SiBuymeacoffee, link: "https://buymeacoffee.com/faizurahman" },
];
