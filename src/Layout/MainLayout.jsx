import Header from "../Components/Header/Header";
import { Flex, Text } from "@chakra-ui/react";
import ParticlesComponent from "../Components/Particles";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Skills from "../Pages/Skills";
import Experience from "../Pages/Experience";
import Project from "../Pages/Projects/Project";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Flex w={"90%"} alignSelf={"center"} mt={6}>
        <Text
          fontSize={{ base: 22 }}
          fontWeight={700}
          color="#33FFCC"
          display={{ base: "flex", md: "none" }}
        >
          Faizu Rahman
        </Text>
      </Flex>
      <ParticlesComponent id="particle" />
      <Flex flexDir={"column"} zIndex={100}>
        <Home />
        <About />
        <Skills />
        <Experience />
        <Project />
      </Flex>
      <Footer />
    </>
  );
};

export default MainLayout;
