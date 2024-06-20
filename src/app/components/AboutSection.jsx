"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React</li>
        <li>Express</li>
        <li>Node.js</li>
        <li>JavaScript</li>
        <li>MongoDB</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
      <div className="sec1 flex justify-between py-1">
        <div>
          <li>Motilal Nehru National Institute of Technology Allahabad <span className="italic font-light">B.Tech in Computer Science and Engineering</span></li>
        </div>
        <p>2021-2025</p>
      </div>
      <br />
      <div className="sec2 flex justify-between py-1">
        <div>
          <li>G.N. National Public School, Gorakhpur <span className="italic font-light">Central Board of Secondary Education(XII)</span></li>
        </div>
        <p>Apr 2021</p>
      </div>
      <br />
      <div className="sec2 flex justify-between py-1">
        <div>
          <li>Little Flower School, Gorakhpur <span className="italic font-light">Indian Certificate of Secondary Education(X)</span></li>
        </div>
        <p>Apr 2019</p>
      </div>
      <br />
    </ul>
     
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
  <li>
    <div className="flex justify-between items-center">
      <span>Cisco Networking Basics</span>
      <a href="https://www.credly.com/badges/0da53524-c1b4-4c65-989b-36904b0e712d/public_url" className="ml-2 text-xs italic">Credential</a>
    </div>
  </li>
  <li>
    <div className="flex justify-between items-center">
      <span>Cisco Operating System Basics</span>
      <a href="https://www.credly.com/badges/840378e9-4562-4435-b0be-00c0e6115f26/public_url" className="ml-2 text-xs italic">Credential</a>
    </div>
  </li>
  <li>
    <div className="flex justify-between items-center">
      <span>Cisco Hardware Basics</span>
      <a href="https://www.credly.com/badges/46beb18e-3377-4ea0-9ca6-d8978dad404e/public_url" className="ml-2 text-xs italic">Credential</a>
    </div>
  </li>
</ul>

    
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="./images/abt.jpg" alt="about image" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a final year student at MNNIT Allahabad, Prayagraj with a
            passion for building innovative web products. Thriving in
            collaborative environments, I leverage my web dev skills and DSA
            knowledge to deliver exceptional results. A quick learner with a
            positive attitude, I keep myself updated with the current trends of
            the tech industry.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
