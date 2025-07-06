"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocation,
  faClock,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faSquareGithub,
  faSquareFacebook,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { useRef } from "react";
import { toast } from "sonner";
import { Toaster } from "sonner";
import Image from 'next/image';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const form = formRef.current;
    if (!form) return;

    if (form.checkValidity()) {
      console.log("Form Valid");
      //form.submit(); // Replace this with a post call.
      toast.success("Form Submission Successful", {
        description: "I got your message! Thanks.",
        action: { label: "Dismiss", onClick: () => {} },
      });
    } else {
      form.reportValidity();
        toast.error("Form Submission Unsuccessful", {
        description: "Kindly double check your inputs.",
        action: { label: "Dismiss", onClick: () => {} },
      });
    }
  };

  return (
    <div className="h-full flex flex-col items-center">
      <Toaster
        icons={{
          success: <Image width={32} height={32} alt="Check Icon" src="/check.png"></Image>,
          error: <Image width={32} height={32} alt="Error Icon" src="/error.png"></Image>,
        }}
        toastOptions={{
          classNames: {
            toast: "!bg-[var(--toast-background)] !border-[var(--sidebar-ring)]",
            title: "!text-[var(--foreground)]",
            description: "!text-[var(--foreground)]",
            actionButton: "!bg-[var(--foreground)] !text-[var(--background)]",
          },
        }}
      />
      <motion.div
        className="w-full max-w-[1200px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <p className="text-3xl lg:text-6xl mt-4 font-semibold">
          {" "}
          Let&apos;s start building.
        </p>
        <p className="opacity-70 mt-4 text-sm lg:text-base">
          {" "}
          Feel free to reach out through any of my social channels, or send a
          message using the contact form below.{" "}
        </p>

        <div className="flex flex-col md:flex-row gap-5 lg:items-center mt-5">
          {/* Form */}
          <div className="border-2 rounded-2xl w-full max-w-[700px] min-w-[200px]">
            <form
              ref={formRef}
              action=""
              method="post"
              className="flex flex-col p-4 gap-3"
            >
              <div className="flex gap-2">
                <span className="text-base text-[var(--destructive)]">*</span>{" "}
                <p className="text-sm opacity-70">Indicates a required field</p>
              </div>

              <label htmlFor="name">
                Name{" "}
                <span className="text-base text-[var(--destructive)]">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="off"
                placeholder="Your Name"
                className="bg-[var(--input)] text-foreground rounded-sm px-2 p-1 border-0"
                required={true}
              />
              <label htmlFor="address">
                Email Address{" "}
                <span className="text-base text-[var(--destructive)]">*</span>
              </label>
              <input
                type="email"
                name="address"
                id="address"
                autoComplete="off"
                placeholder="Your Email"
                className="bg-[var(--input)] text-foreground rounded-sm px-2 p-1"
                required={true}
              />
              <label htmlFor="message">
                Message{" "}
                <span className="text-base text-[var(--destructive)]">*</span>
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Type your message here."
                autoComplete="on"
                className="bg-[var(--input)] text-foreground rounded-sm px-2 p-1 h-40 max-h-[300px]"
                required={true}
                maxLength={400}
              ></textarea>
              <div className="flex w-full justify-center">
                <Button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full lg:max-w-[200px] hover:drop-shadow-[0_0_6px_var(--foreground)] active:drop-shadow-[0_0_6px_var(--foreground)] hover:scale-105 mt-5"
                >
                  {" "}
                  Submit{" "}
                </Button>
              </div>
            </form>
          </div>

          <div>
            {/* Socials */}
            <div className="flex flex-wrap gap-x-8 border-2 rounded-2xl w-full max-w-[700px] min-w-[200px] p-4 self-start">
              <p className="w-full mb-2 font-semibold"> My Socials:</p>
              <div className="flex flex-col gap-y-1">
                <div className="flex flex-col gap-y-1">
                  <Link
                    className="flex gap-3 hover:drop-shadow-[0_0_4px_var(--foreground)] transition-all duration-150 items-center"
                    href={"mailto:jr.concha99@gmail.com"}
                  >
                    <FontAwesomeIcon size="xl" icon={faEnvelope} className="" />
                    <p className="text-sm lg:text-base">
                      {" "}
                      jr.concha99@gmail.com
                    </p>
                  </Link>
                  <Link
                    className="flex gap-3 hover:drop-shadow-[0_0_4px_var(--foreground)] transition-all duration-150 items-center"
                    href={"https://www.linkedin.com/in/jhack-concha-3b2a65267/"}
                  >
                    <FontAwesomeIcon size="xl" icon={faLinkedin} className="" />
                    <p className="text-sm lg:text-base"> jhack.concha</p>
                  </Link>
                  <Link
                    className="flex gap-3 hover:drop-shadow-[0_0_4px_var(--foreground)] transition-all duration-150 items-center"
                    href={"https://github.com/Miyukiin"}
                  >
                    <FontAwesomeIcon
                      size="xl"
                      icon={faSquareGithub}
                      className=""
                    />
                    <p className="text-sm lg:text-base"> Miyukiin</p>
                  </Link>
                </div>
                <div className="flex flex-col gap-y-1">
                  <Link
                    className="flex gap-3 hover:drop-shadow-[0_0_4px_var(--foreground)] transition-all duration-150 items-center"
                    href={"https://www.linkedin.com/in/jhack-concha-3b2a65267/"}
                  >
                    <FontAwesomeIcon
                      size="xl"
                      icon={faSquareInstagram}
                      className=""
                    />
                    <p className="text-sm lg:text-base"> jhack.concha</p>
                  </Link>

                  <Link
                    className="flex gap-3 hover:drop-shadow-[0_0_4px_var(--foreground)] transition-all duration-150 items-center"
                    href={"https://www.linkedin.com/in/jhack-concha-3b2a65267/"}
                  >
                    <FontAwesomeIcon
                      size="xl"
                      icon={faSquareFacebook}
                      className=""
                    />
                    <p className="text-sm lg:text-base"> jhack.concha</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="flex flex-wrap gap-x-8 border-2 rounded-2xl w-full mt-3 max-w-[700px] min-w-[200px] p-4 self-start">
              <p className="w-full mb-2  font-semibold">
                {" "}
                Contact Information:
              </p>
              <div className="flex gap-2">
                <FontAwesomeIcon size="xl" icon={faPhone} className="" />
                <p className="w-full mb-3 font-medium "> Phone Number</p>
              </div>
              <p className="pl-8 w-full mb-2 text-sm md:text-base">
                {" "}
                0926 652 9612
              </p>

              <div className="flex gap-2">
                <FontAwesomeIcon size="xl" icon={faClock} className="" />
                <p className="w-full mb-3 font-medium"> Working Hours</p>
              </div>
              <p className="pl-8 w-full mb-2 text-sm md:text-base">
                {" "}
                Monday to Friday | 8:00 AM to 5:00 PM
              </p>

              <div className="flex gap-2">
                <FontAwesomeIcon size="xl" icon={faLocation} className="" />
                <p className="w-full mb-3 font-medium"> Location</p>
              </div>

              <p className="pl-8 w-full mb-2 text-sm md:text-base">
                {" "}
                1957 Firmeza St. Sampaloc Manila
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
