"use client";
import "./client.css";
import Link from "next/link";
import {
  listOfServices,
  listOfUpcomingAppts,
  apptsDetails,
} from "./[service_page]/freelancers/[freelancer_id]/data/data";

export default function ClientPage() {
  return (
    <div>
      <div className="container">
        <h1>Beezy</h1>
        <div className="serviceContainer">
          <h2>Services</h2>
          <div>
            {Object.entries(listOfServices).map(([service, service_page]) => (
              <Link key={service_page} href={`/client_page/${service_page}`}>
                <button>{service}</button>
              </Link>
            ))}
          </div>
        </div>
        <div className="appointmentContainer">
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
        </div>
      </div>
    </div>
  );
}
