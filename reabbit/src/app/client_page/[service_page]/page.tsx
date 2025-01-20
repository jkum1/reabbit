"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import {
  freelancers,
  serviceDetails,
  freelancerByService,
} from "./freelancers/[freelancer_id]/data/data";

export default function ServicePage({
  params,
}: {
  params: Promise<{ service_page: string }>;
}) {
  const unwrappedParams = use(params);

  const [serviceDetail, setServiceDetail] = useState<string>("");
  const [availableFreelancers, setAvailableFreelancers] = useState<any[]>([]);
  const [servicePage, setServicePage] = useState<string>("");

  useEffect(() => {
    if (unwrappedParams) {
      async function fetchServiceData() {
        try {
          const servicePageId = unwrappedParams.service_page;
          setServicePage(servicePageId);

          const serviceId = parseInt(servicePageId, 10);
          const detail = serviceDetails[serviceId];
          setServiceDetail(detail || "Service not found.");

          const freelancerIds = freelancerByService[serviceId] || [];
          const filteredFreelancers = freelancerIds.map((id) =>
            freelancers.find((freelancer) => freelancer.id === id)
          );
          setAvailableFreelancers(filteredFreelancers);
        } catch (error) {
          setServiceDetail("Failed to load service details.");
        }
      }

      fetchServiceData();
    }
  }, [unwrappedParams]);

  return (
    <>
      <h1>Beezy</h1>
      <div>
        <button onClick={() => window.history.back()}>{"<<"}</button>
        <div>
          <p>{serviceDetail}</p>
        </div>
      </div>
      <h2>Available Freelancers</h2>
      <div>
        {availableFreelancers.length > 0 ? (
          availableFreelancers.map((freelancer) => (
            <div key={freelancer.id}>
              <Link
                href={`/client_page/${servicePage}/freelancers/${freelancer.id}`}
              >
                <h3>{freelancer?.name}</h3>
              </Link>
              <p>
                Rating: {freelancer?.rating} ⭐ ({freelancer?.reviews} reviews)
              </p>
              <p>About me: {freelancer?.about}</p>
              <p>Rate: {freelancer?.ratePerHour}/hour</p>
            </div>
          ))
        ) : (
          <p>No freelancers available for this service.</p>
        )}
      </div>
    </>
  );
}
