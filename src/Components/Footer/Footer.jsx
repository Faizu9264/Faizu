import { Flex, Icon, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/vector.png";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

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
      <Image
        src={logo}
        alt="logo"
        w={{ md: 100, base: 90 }}
        objectFit={"contain"}
      />
      {/* Copyright */}{" "}
      <Text color={"white"} fontSize={{ md: 16, base: 14 }}>
        © {year} Aneesha M S. All rights reserved.{" "}
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
  { iconName: CgMail, link: "mailto:msaneesha422@gmail.com" },
  {
    iconName: FaLinkedinIn,
    link: "https://www.linkedin.com/in/aneeshams2311/",
  },
  { iconName: BsGithub, link: "https://github.com/AneeshaMS" },
];
