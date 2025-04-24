"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function OurTeam() {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:1337/api/team-members?populate=*");
      const members = await response.json();
      setTeamMembers(members.data);
    };
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-5xl text-center mb-6">Our Team</h1>
      <p className="text-center max-w-xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed non quae
        pariatur iste, beatae officiis maxime eum ut optio voluptates a
        cupiditate amet temporibus, placeat hic, ea ex rem laborum.
      </p>
      <div className="grid grid-cols-3 gap-4">
        {teamMembers &&
          teamMembers.map((member) => (
            <div key={member.id} className="mt-6 bg-white p-4 rounded-2xl shadow-md">
              <Link href={`/our-team/${member.slug}`} className="group">
                <Image
                  src={`http://localhost:1337${member.photo.formats.medium.url}`}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="p-6 rounded-full mx-auto group-hover:scale-110 transition-transform duration-300"
                />
                <h2 className="text-2xl font-bold text-zinc-500 text-center group-hover:text-zinc-800">{member.name}</h2>
                <p className="text-zinc-600 mt-4 px-2">{member.description}</p>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
