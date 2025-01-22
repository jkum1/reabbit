"use client";

import { use, useEffect, useState } from "react";
import "./id.css";
import { redirect } from 'next/navigation';

const serviceDetails = {
  1: "House: moving company, cleaning company, repairment company etc..",
  2: "Technical: computer coding, PPT designer, UI/UX designer, video editor etc..",
  3: "Car Services: mechanic, car detailer, etc..",
  4: "Education: online video editor, online private lesson, Off-line private lesson, Certificate-related training etc..",
  5: "Hobby: origami, game, piano, dance, music, Exercise(PT), sport, art, magic etc..",
  6: "Expert: developer, designer, marketing expert, project manager, product manager, finance expert etc..",
  7: "Know-How: stock, bit coin etc..",
};

const freelancers = [
  {
    id: 1,
    name: "Gerald",
    about: "1 years of experience",
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

const freelancerByService = {
  1: [1, 8],
  2: [2],
  3: [3],
  4: [],
  5: [5],
  6: [6],
  7: [4, 7, 9],
};

export default function ServicePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const unwrappedParams = use(params);
  const [serviceDetail, setServiceDetail] = useState("");
  const [availableFreelancers, setAvailableFreelancers] = useState<any[]>([]);

  useEffect(() => {
    const id = unwrappedParams.id;
    if (id) {
      const detail = serviceDetails[parseInt(id, 10)];
      setServiceDetail(detail || "Service not found.");

      const freelancerIds = freelancerByService[parseInt(id, 10)] || [];
      const filteredFreelancers = freelancerIds.map((id) =>
        freelancers.find((freelancer) => freelancer.id === id)
      );
      setAvailableFreelancers(filteredFreelancers);
    }
  }, [unwrappedParams.id]);

  return (
    <div id="idPage">
      <h1>Beezy</h1>
      <div id="info">
        <button onClick={() => redirect('/client_page')}>{"<<"}</button>
        <div id="infoVal">{serviceDetail}</div>
      </div>
      <h2>Available Freelancers</h2>
      <div id="freelanceInfoDiv">
        {availableFreelancers.length > 0 ? (
          availableFreelancers.map((freelancer) => (
            <div key={freelancer.id} className="freelanceInfoIndiv">
              <h3>{freelancer?.name}</h3>
              <p className="deets">Rating: {freelancer?.rating} ⭐ ({freelancer?.reviews} reviews)</p>
              <p className="deets">About me: {freelancer?.about}</p>
              <p className="deets">Rate: {freelancer?.ratePerHour}/hour</p>
            </div>
          ))
        ) : (
          <p>No freelancers available for this service.</p>
        )}
      </div>
    </div>
  );
}
