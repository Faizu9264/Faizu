import { Flex, Text, Image, Divider, Icon } from "@chakra-ui/react";
import dev from "../assets/Skills/dev.svg";
import teach from "../assets/Skills/teach.svg";
import TypewriterText from "../Components/TypewriterText";
import { motion } from "framer-motion";
import { CiStar } from "react-icons/ci";
const Experience = () => {
  const text = "E x p e r i e n c e ".split(" ");
  return (
    <Flex
      width={"100%"}
      flexDir={"column"}
      justifyContent={"center"}
      id="experience"
      alignItems={"center"}
      // minH={{ md: "100vh", base: "auto" }}
      gap={10}
      py={20}
      bg={"rgba(22, 22, 22, 0.3)"}
      backdropFilter={"blur(2px)"}
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
      {/* Experience Section */}
      <Flex flexDir={"column"} alignItems={"center"} w={"100%"}>
        {/* First Experience */}
        {experienceData.map((data, i) => {
          return (
            <Flex
              gap={{ md: 2, base: 1 }}
              key={i}
              w={{ md: "100%", base: "90%" }}
              justifyContent={"center"}
              m={"auto"}
            >
              {/* First Section Starts */}
              <motion.div
                initial={{ opacity: 0, y: 5 }}
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
                  bg={"brand.buttonGreen"}
                  h={{ md: 8, base: 7 }}
                  alignItems={"center"}
                  width={{ lg: 180, md: 130, base: "100px" }}
                  borderRadius={20}
                  mt={2}
                  justifyContent={"center"}
                  display={{ base: "none", md: "flex" }}
                >
                  <Text
                    fontSize={{ lg: "14px", md: "12px", base: "10px" }}
                    fontWeight={600}
                    color={"black"}
                  >
                    {data.period}
                  </Text>
                </Flex>
              </motion.div>
              {/* First Section Ends */}
              {/* Second Section Starts */}
              <Flex flexDir={"column"} alignItems={"center"}>
                {/* Icon */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    transition: {
                      duration: 0.5, // Animation duration
                      delay: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                >
                  <Flex
                    width={{ md: "50px", base: "40px" }}
                    height={{ md: "50px", base: "40px" }}
                    border={"2px solid "}
                    alignItems={"center"}
                    justifyContent={"center"}
                    borderColor={"brand.buttonGreen"}
                    borderRadius={50}
                    p={1.5}
                    boxShadow=" 1px 0 10px 0px #33FFCC"
                  >
                    <Image src={data.icon} alt="dev" mt={3} />
                  </Flex>
                </motion.div>
                {/* Line */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  whileInView={{
                    opacity: 1,
                    height: "100%", // Slide in to its original position
                    marginBottom: 5,
                    transition: {
                      duration: 0.5, // Animation duration
                      delay: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                >
                  <Divider
                    orientation="vertical"
                    // h={"100%"}
                    borderWidth={2}
                    w={0}
                    my={1}
                    borderColor={"#33FFCC"}
                  />
                </motion.div>
              </Flex>
              {/* Second Section Starts */}

              {/* Second Experience */}
              {/* Third Section Starts */}
              <Flex
                color={"white"}
                flexDir={"column"}
                ml={{ md: 4, base: 2 }}
                w={{ xl: "35%", lg: "45%", md: "50%", base: "100%" }}
                mb={5}
              >
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
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
                    bg={"brand.buttonGreen"}
                    h={{ md: 8, base: 7 }}
                    alignItems={"center"}
                    width={{ lg: 180, md: 130, base: 120 }}
                    borderRadius={20}
                    mt={1}
                    mb={2}
                    justifyContent={"center"}
                    display={{ base: "flex", md: "none" }}
                  >
                    <Text
                      fontSize={{ lg: "14px", md: "12px", base: "10px" }}
                      fontWeight={600}
                      color={"black"}
                    >
                      {data.period}
                    </Text>
                  </Flex>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
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
                  <Text
                    fontSize={{ md: "3xl", base: "18px" }}
                    fontWeight={"bold"}
                  >
                    {data.role}
                  </Text>
                  <Text fontSize={{ md: "xl", base: "15px" }} fontWeight={600}>
                    {data.company}
                  </Text>
                </motion.div>
                <Flex
                  flexDir={"column"}
                  width={"100%"}
                  pl={{ lg: 4, md: 2, base: 1 }}
                >
                  {data.description.map((desc, i) => {
                    return (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{
                          opacity: 1,
                          y: 0, // Slide in to its original position
                          transition: {
                            duration: 0.7, // Animation duration
                            delay: 0.5,
                          },
                        }}
                        viewport={{ once: true }}
                        key={i}
                      >
                        <Flex
                          alignItems={"center"}
                          gap={2}
                          w={{ lg: "100%", md: "100%", base: "95%" }}
                        >
                          <Icon as={CiStar} color={"#33FFCC"} />
                          <Text
                            fontSize={{ md: "14px", base: "12px" }}
                            mt={2}
                            color={"whiteAlpha.800"}
                          >
                            {desc}
                          </Text>
                        </Flex>
                      </motion.div>
                    );
                  })}
                </Flex>
              </Flex>
              {/* Third Section Ends */}
            </Flex>
          );
        })}
        {/* First Experience Ends */}
      </Flex>
    </Flex>
  );
};

export default Experience;

const experienceData = [
  {
    title: "Full Stack Developer",
    company: "Axorbit Technologies Pvt Ltd",
    icon: dev, // You may want to update the icon as needed
    period: "Jan 2025 - Present",
    description: [
      "Developing and maintaining scalable web applications as a Full Stack Developer.",
      "Built a feature-rich Cosmetics E-commerce Platform using Sanity CMS, Clerk authentication, and Geolocation API for dynamic currency switching.",
      "Deployed backend services on AWS Lambda for scalability and reliability.",
      "Collaborating with cross-functional teams to deliver high-quality software solutions.",
    ],
  },
  {
    title: "Freelance Developer",
    company: "Self-Employed",
    icon: dev, // You may want to update the icon as needed
    period: "Aug 2024 - Dec 2024",
    description: [
      "Collaborated with clients to develop customized web solutions, ensuring alignment with their specific needs and business goals.",
      "Designed and implemented responsive websites using Next.js, Tailwind CSS, Daisy UI, and TypeScript, with a focus on SEO optimization and user experience.",
      "Built a German learning web application using Next.js, Tailwind CSS, Daisy UI, MongoDB, Cloudinary, and TypeScript, featuring admin authentication, a dashboard, and dynamic image upload functionality.",
      "Provided services for Shopify store theme editing and SEO optimization for dropshippers.",
      "Enhanced debugging and troubleshooting skills by resolving client-reported issues promptly and effectively.",
    ],
  },
  {
    title: "Junior Developer",
    company: "Final Apps",
    icon: dev, // You may want to update the icon as needed
    period: "Feb 2024 - Aug 2024",
    description: [
      "Developed and maintained Shopify apps using React, Remix, Node.js, and Shopify Polaris.",
      "Worked closely with the CTO, gaining valuable insights into best practices and modern development techniques.",
      "Contributed to enhancing app performance and usability for better user experiences.",
      "Acquired hands-on experience with Shopify app architecture and development workflows.",
    ],
  },
  {
    title: "Content Creator",
    company: "CodeCoders (YouTube Channel)",
    icon: dev, // You may want to update the icon as needed
    period: "Mar 2024 - Present",
    description: [
      "Started a YouTube channel to help beginners learn programming concepts in an easy-to-understand way.",
      "Published over 200+ tutorial videos, covering topics like C pattern printing, arrays in C, and Java OOP concepts.",
      "Built a community of coding enthusiasts and regularly engaged with followers by addressing their learning needs.",
      "Focused on creating high-quality content tailored to students and beginners.",
    ],
  },
  {
    title: "Full-Stack Developer Trainee",
    company: "Brototype",
    icon: teach, // You may want to update the icon as needed
    period: "Mar 2023 - Feb 2024",
    description: [
      "Developed multiple minor projects using MongoDB, Express.js, React.js, and Node.js (MERN stack).",
      "Created a fully functional E-commerce website as a major project, incorporating user authentication and payment gateway integration.",
      "Built a Hotel Booking Website with Mapbox integration for location services and Stripe for payment processing.",
      "Worked collaboratively in a team environment and followed agile methodologies.",
      "Built 2 major MERN stack projects and 10+ minor projects.",
      "🧪 Hosted projects on: AWS EC2 Instance (hands-on with server setup & deployment), Vercel (Next.js hosting), Render (for full stack & automation experiments).",
    ],
  },
  {
    title: "Self Learning",
    company: "Self Learning",
    icon: dev, // You may want to update the icon as needed
    period: "Sep 2022 - Mar 2023",
    description: [
      "Learned coding independently by watching YouTube tutorials and reading documentation.",
      "Developed a small e-commerce website called 'Shopping-Cart' using JavaScript, Node.js, and Handlebars. Integrated PayPal for payment processing.",
      "Built minor projects such as a React-based Netflix clone and a personal portfolio website using HTML and CSS.",
      "Gained foundational knowledge in JavaScript, web development, and backend integration.",
    ],
  },
];
