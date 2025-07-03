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

export default function Contact() {
  return (
    <div className="h-full pb-8 sm:py-10 md:py-12 lg:py-16 flex flex-col items-center">
      <div className="mt-10 w-full max-w-[1200px]">
        <p className="text-3xl lg:text-6xl mt-4 font-semibold">
          {" "}
          Let&apos;s start building.
        </p>
        <p className="opacity-70 mt-4 text-sm lg:text-base">
          {" "}
          Feel free to reach out through any of my social channels, or send a
          message using the contact form below.{" "}
        </p>

        <div className="flex flex-col md:flex-row gap-5">
          {/* Form */}
          <div className="border-2 rounded-2xl w-full mt-5 max-w-[700px] min-w-[300px]">
            <form action="" method="post" className="flex flex-col p-4 gap-3">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="off"
                placeholder="Your Name"
                className="bg-[var(--input)] text-foreground rounded-sm px-2 p-1"
              />
              <label htmlFor="address">Email Address:</label>
              <input
                type="email"
                name="address"
                id="address"
                autoComplete="off"
                placeholder="Your Email"
                className="bg-[var(--input)] text-foreground rounded-sm px-2 p-1"
              />
              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                id="message"
                placeholder="Type your message here."
                autoComplete="on"
                className="bg-[var(--input)] text-foreground rounded-sm px-2 p-1 h-40 max-h-[300px]"
              ></textarea>
              <Button
                type="button"
                className="hover:drop-shadow-[0_0_6px_var(--foreground)] active:drop-shadow-[0_0_6px_var(--foreground)] hover:scale-105 mt-5"
              >
                {" "}
                Submit{" "}
              </Button>
            </form>
          </div>

          <div>
            {/* Socials */}
            <div className="flex flex-wrap gap-x-8 border-2 rounded-2xl w-full mt-5 max-w-[700px] min-w-[300px] p-4 self-start">
              <p className="w-full mb-2 font-semibold"> My Socials:</p>
              <div>
                <Link
                  className="flex gap-3 hover:drop-shadow-[0_0_4px_var(--foreground)] transition-all duration-150 items-center"
                  href={"mailto:jr.concha99@gmail.com"}
                >
                  <FontAwesomeIcon size="xl" icon={faEnvelope} className="" />
                  <p className="text-sm"> jr.concha99@gmail.com</p>
                </Link>
                <Link
                  className="flex gap-3 hover:drop-shadow-[0_0_4px_var(--foreground)] transition-all duration-150 items-center"
                  href={"https://www.linkedin.com/in/jhack-concha-3b2a65267/"}
                >
                  <FontAwesomeIcon size="xl" icon={faLinkedin} className="" />
                  <p className="text-sm"> jhack.concha</p>
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
                  <p className="text-sm"> Miyukiin</p>
                </Link>
              </div>
              <div>
                <Link
                  className="flex gap-3 hover:drop-shadow-[0_0_4px_var(--foreground)] transition-all duration-150 items-center"
                  href={"https://www.linkedin.com/in/jhack-concha-3b2a65267/"}
                >
                  <FontAwesomeIcon
                    size="xl"
                    icon={faSquareInstagram}
                    className=""
                  />
                  <p className="text-sm"> jhack.concha</p>
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
                  <p className="text-sm"> jhack.concha</p>
                </Link>
              </div>
            </div>

            {/* Contact Information */}
            <div className="flex flex-wrap gap-x-8 border-2 rounded-2xl w-full mt-5 max-w-[700px] min-w-[300px] p-4 self-start">
              <p className="w-full mb-2 font-semibold"> Contact Information:</p>
              <div className="flex gap-2">
                <FontAwesomeIcon size="xl" icon={faPhone} className="" />
                <p className="w-full mb-3 font-medium"> Phone Number</p>
              </div>
              <p className="pl-8 w-full mb-4"> 0926 652 9612</p>

              <div className="flex gap-2">
                <FontAwesomeIcon size="xl" icon={faClock} className="" />
                <p className="w-full mb-3 font-medium"> Working Hours</p>
              </div>
              <p className="pl-8 w-full mb-4">
                {" "}
                Monday to Friday | 8:00 AM to 5:00 PM
              </p>

              <div className="flex gap-2">
                <FontAwesomeIcon size="xl" icon={faLocation} className="" />
                <p className="w-full mb-3 font-medium"> Location</p>
              </div>

              <p className="pl-8 w-full mb-4">
                {" "}
                1957 Firmeza St. Sampaloc Manila
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
