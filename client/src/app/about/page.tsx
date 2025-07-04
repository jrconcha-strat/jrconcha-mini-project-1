"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { motion } from "framer-motion";
import ExperienceCard from "@/components/ui/ExperienceCard";
import CertificationCard from "@/components/ui/CertificationCard";

export default function About() {
  return (
    <div className="h-full flex flex-col items-center">
      <motion.div
        className="w-full max-w-[1200px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <p className="text-3xl lg:text-6xl mt-4 font-semibold">
          {" "}
          Some things about me.
        </p>
        <p className="opacity-70 mt-4 text-sm lg:text-base">
          {" "}
          Behind every line of code is a dive to curiosity. Here’s a quick look
          into who I am, what I value, and what keeps me curious and passionate
          about tech and development.{" "}
        </p>
      </motion.div>

      {/* Hero Section */}
      <motion.div
        className="flex-col lg:flex-row flex flex-1 gap-x-10 w-full max-w-[1200px] mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true, amount: 0.5 }}
      >

        <div className="flex flex-col w-full">
          <div className="w-full relative text-center bg-[rgba(41,42,46,0.52)] border-l-8 p-4">
            <span className="text-5xl lg:text-8xl text-[var(--cambridge-blue)] top-1 left-2 lg:left-5 absolute font-serif">
              “
            </span>
            <blockquote className="pl-4 lg:pl-8 p-3 lg:p-10 text-sm lg:text-2xl text-center italic">
              Tell me what you&apos;ve been through, and I&apos;ll tell you who
              you are.
            </blockquote>
          </div>

        <div className="flex justify-center mt-5 h-50 md:h-64 lg:h-80">
          <Avatar className="w-50 h-50 md:w-64 md:h-64 lg:w-80 lg:h-80">
            <AvatarImage
              src="/picture.png"
              className="w-50 h-50 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full object-cover drop-shadow-[0_0_10px_var(--foreground)]"
            />
            <AvatarFallback>
              A smiling picture of Jhack in a formal outfit, slightly tilted to the right.
            </AvatarFallback>
          </Avatar>
        </div>

          <p className="text-2xl md:text-2xl lg:text-3xl font-semibold mt-6">
            {" "}
            Hey, I&apos;m Jhack!{" "}
          </p>

          <p className="mt-3 w-full text-sm text-justify">
            I&apos;m a Graduating Computer Science student at Pamantasan ng
            Lungsod ng Maynila with a deep curiosity for how things are built
            and how they can be improved. I enjoy solving problems through code,
            designing meaningful experiences, and continuously learning along
            the way.{" "}
          </p>

            <p className="mt-3 w-full text-sm text-justify">
            Whether it&apos;s building websites or exploring new
            technologies, I&apos;m passionate about creating things that make an
            impact. Right now, I&apos;m focused on growing as a developer and
            looking for opportunities where I can contribute, learn, and build
            something great.{" "}
          </p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 2, delay: 3 }}
            className="text-sm mt-3 text-right"
          >
            {" "}
            Ready? Scroll down anytime
          </motion.p>
        </div>
      </motion.div>

      {/* Experience section */}

      <motion.div
        className="w-full max-w-[1200px] mt-10"
        // initial={{ opacity: 0 }}
        // whileInView={{ opacity: 1 }}
        // transition={{ duration: 2 }}
        // viewport={{ once: true, amount: 0.5 }}
      >
        <p className="text-3xl lg:text-4xl mt-4 font-semibold"> Experience</p>
        <p className="opacity-70 mt-4 text-sm lg:text-base">
          {" "}
          Want to know more about me? I believe experiences speak louder than
          words — they reflect what I’ve learned, how I’ve grown, and the kind
          of work I’m passionate about. Take a look at some of the roles that
          have shaped my journey so far.{" "}
        </p>
        <div className="flex flex-wrap md:gap-5 lg:gap-10">
          <ExperienceCard
            image="/stratpoint.png"
            position="ReactJS Intern"
            company="@Stratpoint Technologies"
            alt="Stratpoint Logo"
            date="June - September"
            year="2025"
            description="As a ReactJS Intern at Stratpoint Technologies, I've been
          contributing to the development of scalable frontend features using
          modern React practices. I work closely with fellow developers,
          participate in sprint planning, and help implement responsive UI
          components, gaining hands-on experience with tools like Next.js,
          Tailwind CSS, and Git in a real-world Agile environment."
          ></ExperienceCard>
          <ExperienceCard
            image="/ucc_logo2.webp"
            position="Web Development Intern"
            company="@UCC Cafe Philippines"
            alt="UCC Logo"
            date="July - Aug"
            year="2024"
            description="As a Web Development Intern at UCC Cafe Philippines, I've 
        been involved in developing and maintaining websites for the company and its sister brands using WordPress. 
        I utilize HTML, CSS, JavaScript, and PHP to implement business requirements and improve site performance.
        I also work with cPanel for website and file management, and NameHero for domain and hosting configurations.
        Additionally, I contributed to the development side of our team's website proposal presented to key stakeholders."
          ></ExperienceCard>
        </div>
      </motion.div>

      {/* Certifications section */}
      <motion.div
        className="mt-10 w-full max-w-[1200px]"
        // initial={{ opacity: 0 }}
        // whileInView={{ opacity: 1 }}
        // transition={{ duration: 2 }}
        // viewport={{ once: true, amount: 0.5 }}
      >
        <p className="text-3xl lg:text-4xl mt-4 font-semibold">
          {" "}
          Certifications and Training
        </p>
        <p className="opacity-70 mt-4 text-sm lg:text-base">
          {" "}
          Technology is always evolving, and I&apos;m committed to growing
          alongside it. Here are some of the certifications and training
          programs I&apos;ve completed to stay current and sharpen my skills as
          a developer.
        </p>
        <div className="flex flex-wrap w-full gap-8 mt-10 justify-center">
          <CertificationCard
            image="/js_essentials.png"
            name="JavaScript Essentials 1"
            date="March 31, 2024"
            issuer="Cisco"
            desc="Completed a foundational course on core JavaScript concepts, including syntax, data types, functions, and basic algorithmic problem-solving."
          ></CertificationCard>
          <CertificationCard
            image="/py_essentials.png"
            name="Python Essentials 1"
            date="August 14, 2023"
            issuer="Cisco"
            desc="Completed a foundational course on Python programming, covering core syntax, problem-solving, and use of the Python Standard Library."
          ></CertificationCard>
          <CertificationCard
            image="/cybersecurity_essentials.png"
            name="Cybersecurity Essentials"
            date="April 7, 2023"
            issuer="Cisco"
            desc="Gained foundational knowledge in network security, encryption, cybersecurity laws, and defensive strategies based on the CIA triad."
          ></CertificationCard>
          <CertificationCard
            image="/introtocyber.png"
            name="Introduction to Cybersecurity"
            date="February 20, 2023"
            issuer="Cisco"
            desc="Learned the basics of cybersecurity threats, industry impact, and explored career paths and certifications in the field."
          ></CertificationCard>{" "}
          <CertificationCard
            image="/ISC2-CC-Featured.png"
            name="Certified in Cybersecurity Passer"
            date="May 24, 2023"
            issuer="ISC2"
            desc="Provisionally passed the (ISC)² Certified in Cybersecurity (CC) exam, demonstrating a solid grasp of core cybersecurity principles."
          ></CertificationCard>
        </div>
      </motion.div>
    </div>
  );
}
