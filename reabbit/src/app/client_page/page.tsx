"use client";
import { useState } from "react";
import "./client.css";

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

  const serviceDetails = {
    House: "moving company, cleaning company, repairment company etc..",
    Technical:
      "computer coding, PPT designer, UI/UX designer, video editor etc..",
    "Car Services": "mechanic, car detailer, etc..",
    Education:
      "online video editor, online private lesson, Off-line private lesson, Certificate-related training etc..",
    Hobby:
      "origami, game, piano, dance, music, Exercise(PT), sport, art, magic etc..",
    Expert:
      "developer, designer, marketing expert, project manager, product manager, finance expert etc..",
    "Know-How": "stock, bit coin etc..",
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
        <div className="serviceContainer">
          <h1>Services</h1>
          <div>
            {Object.entries(listOfServices).map(([service, id]) => (
              <div
                key={id}
                className="serviceIcon"
                onClick={() => setSelectedService(service)}
              >
                <p>{service}</p>
              </div>
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
          <button onClick={() => setSelectedService(null)}>Back</button>
        </div>
        <div className="appointmentContainer">
          {!selectedService && (
            <>
              <h1>Upcoming Appointments</h1>
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
