import Header from "@/components/Header";
import Head from "next/head";
import SectionWelcome from "@/components/SectionWelcome";
import SectionAbout from "@/components/SectionAbout";
import SectionSkills from "@/components/SectionSkills";
import SectionProjects from "@/components/SectionProjects";
import SectionContact from "@/components/SectionContact";
import Footer from "@/components/Footer";

export default function Home() {
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
        {/* <SectionProjects /> */}
        <SectionContact />
        <Footer />
      </main>
    </>
  );
}
