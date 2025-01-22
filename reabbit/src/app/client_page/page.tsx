"use client";
import { useState } from "react";
import "./client.css";
import Link from "next/link";

export default function ClientPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const listOfServices = {
    House: 1,
    Technical: 2,
    "Car Services": 3,
    Education: 4,
    Hobby: 5,
    Expert: 6,
    "Know-How": 7,
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
      <div className="container">
        <h1>Beezy</h1>
        <div className="serviceContainer">
          <h2>Services</h2>
          <div>
            {Object.entries(listOfServices).map(([service, id]) => (
              <Link key={id} href={`/client_page/${id}`}>
                <button>{service}</button>
              </Link>
            ))}
          </div>
          <div>
            {selectedService ? (
              <>
                <div>
                  <h2>{selectedService}</h2>
                </div>
                <p>{serviceDetails[selectedService]}</p>
              </>
            ) : (
              <p>Please select a service for more details.</p>
            )}
          </div>
        </div>
        <div className="appointmentContainer">
          {!selectedService && (
            <>
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
            </>
          )}
        </div>
      </div>
    </div>
  );
}
