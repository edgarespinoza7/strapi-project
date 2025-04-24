"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function OurTeam() {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:1337/api/team-members");
      const members = await response.json();
      setTeamMembers(members.data);
    };
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl text-center mb-6">Our Team</h1>
      <p className="text-center max-w-xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed non quae
        pariatur iste, beatae officiis maxime eum ut optio voluptates a
        cupiditate amet temporibus, placeat hic, ea ex rem laborum.
      </p>
      <div className="flex space-x-6">
        {teamMembers &&
          teamMembers.map((member, index) => (
            <div key={index} className="mt-6 flex-1/3 bg-white p-4 rounded-2xl">
              <Link href={`/our-team/${member.slug}`}>
                <h1 className="text-2xl text-center mt-4">{member.name}</h1>
              </Link>

              <p className="text-zinc-600 mt-4">{member.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
