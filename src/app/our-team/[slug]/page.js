'use client'

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function TeamMember() {

  const slug = useParams().slug;

  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:1337/api/team-members");
      const members = await response.json();
      setTeamMembers(members.data);
    };
    fetchData();
  }, []);

  const member = teamMembers.find((member) => member.slug === slug)


  return (
    <div className="container mx-auto p-4 text-center">
      {member && (<>
        <h1 className="text-3xl mb-4">{member.name}</h1>
        <p>{member.description}</p>
      </>
      )}

    </div>
  )

}