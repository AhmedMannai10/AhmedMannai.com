import React from "react";
import Image from "next/image";
import TagCard from "../components/TagCard";
import Link from "next/link";

export default function ProjectCard({ img, title, desc, tags, link }) {
    const tagItems = String(tags).split(" ");
    const stringLink = String(link);
    return (
        <Link href={"/projects/" + stringLink}>
            <a>
                <div
                    className="flex flex-col bg-secondary 
              dark:bg-dark_secondary overflow-hidden max-w-sm md:min-w-[300px]
                rounded-md shadow-lg hover:-translate-y-[4px] duration-300 ease-out "
                >
                    <div
                        className="relative min-h-[250px] "
                    >

                        <Image
                            loading="lazy"
                            src={img}
                            alt={title + "project image"}
                            layout='fill'
                            objectFit="cover"
                        />
                    </div>
                    <div className="p-4 ">
                        <h4
                            className="dark:text-dark_h_color 
                    text-h_color font-semibold
                    text-xl my-2 uppercase"
                        >
                            {title}
                        </h4>
                        <p className=" text-lg my-2">{desc}</p>
                        <div className="flex mt-2 flex-wrap">
                            {tags &&
                                tagItems.map((item) => {
                                    return <TagCard value={item} />;
                                })}
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    );
}
