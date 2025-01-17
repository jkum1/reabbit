"use client";

import { use, useEffect, useState } from "react";

const freelancers = [
  {
    id: 1,
    name: "Gerald",
    about: "1 year of experience",
    rating: 3,
    reviews: 120,
    ratePerHour: "$50",
  },
  {
    id: 2,
    name: "Hugh",
    about: "3 years of experience",
    rating: 4.8,
    reviews: 17,
    ratePerHour: "$70",
  },
  {
    id: 3,
    name: "Katarina",
    about: "20 years of experience",
    rating: 4.5,
    reviews: 59,
    ratePerHour: "$100",
  },
  {
    id: 4,
    name: "Garen",
    about: "12 years of experience",
    rating: 3.5,
    reviews: 82,
    ratePerHour: "$60",
  },
  {
    id: 5,
    name: "Jax",
    about: "17 years of experience",
    rating: 3.9,
    reviews: 34,
    ratePerHour: "$50",
  },
  {
    id: 6,
    name: "Joseph",
    about: "11 years of experience",
    rating: 4.1,
    reviews: 158,
    ratePerHour: "$200",
  },
  {
    id: 7,
    name: "Minnie",
    about: "10 years of experience",
    rating: 2.5,
    reviews: 61,
    ratePerHour: "$50",
  },
  {
    id: 8,
    name: "Sara",
    about: "7 years of experience",
    rating: 2.8,
    reviews: 43,
    ratePerHour: "$80",
  },
  {
    id: 9,
    name: "Jamil",
    about: "5 years of experience",
    rating: 5,
    reviews: 206,
    ratePerHour: "$20",
  },
];

export default function FreelancerProfile({
  params,
}: {
  params: Promise<{ freelancer_id: string; service_page: string }>;
}) {
  const unwrappedParams = use(params);
  const freelancerId = parseInt(unwrappedParams.freelancer_id, 10);
  const servicePage = parseInt(unwrappedParams.service_page, 10);

  const [freelancer, setFreelancer] = useState<any>(null);

  useEffect(() => {
    const freelancerData = freelancers.find((f) => f.id === freelancerId);
    if (freelancerData) {
      setFreelancer(freelancerData);
    }
  }, [freelancerId]);

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
    </div>
  );
}
