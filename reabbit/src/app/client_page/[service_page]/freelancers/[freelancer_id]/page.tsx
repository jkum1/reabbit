"use client";

import { useEffect, useState } from "react";
import { freelancers } from "../[freelancer_id]/data/data";
import { useRouter } from "next/navigation";
import { use } from "react";

export default function FreelancerProfile({
  params,
}: {
  params: Promise<{ freelancer_id: string; service_page: string }>;
}) {
  const unwrappedParams = use(params);
  const [freelancer, setFreelancer] = useState<any | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (unwrappedParams) {
      const freelancerId = parseInt(unwrappedParams.freelancer_id, 10);
      const freelancerData = freelancers.find(
        (freelancer) => freelancer.id === freelancerId
      );

      if (freelancerData) {
        setFreelancer(freelancerData);
      }
    }
  }, [unwrappedParams]);

  if (!freelancer) {
    return <p>Freelancer not found.</p>;
  }

  return (
    <div>
      <button onClick={() => window.history.back()}>{`<< Back`}</button>
      <h1>{freelancer.name}'s Profile</h1>
      <p>About: {freelancer.about}</p>
      <p>Rating: {freelancer.rating} ⭐</p>
      <p>Reviews: {freelancer.reviews}</p>
      <p>Rate: {freelancer.ratePerHour}/hour</p>
      <div></div>
    </div>
  );
}
