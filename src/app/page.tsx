"use client";

import Header from "@/components/Header";
import Head from "next/head";
import SectionWelcome from "@/components/SectionWelcome";
import SectionAbout from "@/components/SectionAbout";
import SectionSkills from "@/components/SectionSkills";
import SectionProjects from "@/components/SectionProjects";
import SectionContact from "@/components/SectionContact";
import Footer from "@/components/Footer";
import useGoogleAnalytics from "../Hooks/useGoogleAnalytics";

export default function Home() {
  const trackingId = "UA-XXXXXXXXX-X";

  useGoogleAnalytics(trackingId);

  return (
    <>
      <Head>
        <title>Home - Portifólio</title>
      </Head>
      <main>
        <Header />
        <SectionWelcome />
        <SectionAbout />
        <SectionSkills />
        <SectionProjects />
        <SectionContact />
        <Footer />
      </main>
    </>
  );
}
