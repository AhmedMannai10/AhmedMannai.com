import Head from "next/head";
import { useTheme } from "next-themes";
import Hero from "../sections/Hero";
import About from "../sections/About";
import ProjectsSection from "../sections/ProjectsSection";
import BlogSection from "../sections/BlogSection";
import MetaTags from "../components/MetaTags";
export default function Home() {
    const { theme, setTheme } = useTheme();

    return (
        <>
            <MetaTags 
                title="Home | AhmedMannai" 
                description="Personal Website for sharing my software engineering journey "
            />
            <Hero />
            <About />
            <ProjectsSection />
            <BlogSection />
        </>
    );
}
