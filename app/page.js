import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Research from "@/components/Research";
import Publications from "@/components/Publications";
import Projects from "@/components/Projects";
import Awards from "@/components/Awards";
import Education from "@/components/Education";
import References from "@/components/References";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import {
  profile,
  education,
  experience,
  research,
  publications,
  projects,
  awards,
  certifications,
  volunteer,
  credentials,
  skills,
} from "@/lib/data";

export default function Home() {
  return (
    <>
      <Header name={profile.name} />
      <main>
        <Hero profile={profile} />
        <About bio={profile.bio} credentials={credentials} />
        <Education education={education} skills={skills} />
        <Experience experience={experience} />
        <Research research={research} />
        <Publications publications={publications} />
        <Projects projects={projects} />
        <Awards
          awards={awards}
          certifications={certifications}
          volunteer={volunteer}
        />

        <References references="Available upon request." />
        <Contact profile={profile} />
      </main>
      <Footer name={profile.name} />
    </>
  );
}
