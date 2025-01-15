"use client";
import { useState } from "react";

export default function ClientPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const listOfServices = {
    Cleaning: 1,
    "Car Detail": 2,
    Tutor: 3,
    Chef: 4,
    DishWasher: 5,
    Mover: 6,
  };

  const serviceDetails = {
    Cleaning: "Cleaning Service",
    "Car Detail": "Car detailing",
    Tutor: "Tutoring",
    Chef: "Professional cooks",
    DishWasher: "Dishwasher",
    Mover: "Moving Service",
  };

  const listOfUpcomingAppts = [9, 11, 15];

  type AppointmentDetails = {
    "Service Type"?: string;
    Date: string;
    Time: string;
    Freelancers: string[];
  };

  const apptsDetails: Record<number, AppointmentDetails> = {
    4: {
      "Service Type": "Cleaning",
      Date: "11/05/2025",
      Time: "2:00 PM",
      Freelancers: ["Gerald", "Hugh", "Katarina"],
    },
    9: {
      Date: "12/06/2025",
      Time: "6:00 PM",
      Freelancers: ["Garen", "Jax", "Joseph"],
    },
    11: {
      "Service Type": "Mover",
      Date: "01/06/2025",
      Time: "4:00 PM",
      Freelancers: ["Minnie", "Sara"],
    },
    15: {
      "Service Type": "Chef",
      Date: "04/06/2025",
      Time: "11:00 AM",
      Freelancers: ["Jamil"],
    },
  };

  return (
    <div>
      <h1>Services</h1>
      <div>
        {Object.entries(listOfServices).map(([service, id]) => (
          <div
            key={id}
            className="service-icon"
            onClick={() => setSelectedService(service)}
          >
            <p>{service}</p>
          </div>
        ))}
      </div>
      <div>
        {selectedService ? (
          <div>
            <h2>{selectedService}</h2>
            <p>{selectedService[selectedService]}</p>
          </div>
        ) : (
          <p>Please select a service for more details.</p>
        )}
      </div>
      <h2>Upcoming Appointments</h2>
      <div>
        {listOfUpcomingAppts.map((apptId, count) => {
          const details = apptsDetails[apptId];
          return (
            <div key={apptId}>
              <h3>Appointment: {count + 1}</h3>
              <p>Service Type: {details["Service Type"] || "N/A"}</p>
              <p>Date: {details.Date}</p>
              <p>Time: {details.Time}</p>
              <p>Freelancers: {details.Freelancers.join(", ")}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
