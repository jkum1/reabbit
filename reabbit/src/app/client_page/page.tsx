"use client";
import { EventHandler, useState } from "react";
import "./client.css";
import Link from "next/link";
import { redirect } from 'next/navigation';

const listOfServices: Service<string, string[]> = {
  "House": ["Cleaning","Dishwasher","Gutter","Yardwork","Pet Sitter","Baby Sitter","Movers"],
  "Technical": ["A","B","C","D","E","F","G"],
  "Car Services": ["Oil Change","Tow","Mod","Tire Change","Wrap","Paint","Wide Body Kit"],
  "Education": ["Math","Chemistry","Physics","Literature","History","Biology","Finance"],
  "Hobby": ["Model Painting","Legos","TCG","RC","A","B","C"],
  "Expert": ["A","B","C","D","E","F","G"],
  "Know-How": ["A","B","C","D","E","F","G"],
};

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
    "Service Type": "Oil Change",
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

export default function ClientPage() {
  const [selectedService, setSelectedService] = useState<Array<String>>(Object.keys(listOfServices));
  const [inService, setInService] = useState(false);
  
  const listOfUpcomingAppts = [9, 11, 15];

  function changeService(service: String) {
    setSelectedService(listOfServices[service]);
    setInService(true);
  }

  function navigate(service: Number) {
    redirect(`/client_page/${service}`)
  }

  function goBack() {
    setSelectedService(Object.keys(listOfServices));
    setInService(false);
  }

  function Service({serviceType, keyID} : {serviceType: String, keyID: Number}) {
    if (inService) {
      return (
        <button key={keyID} onClick={() => navigate(keyID)}>{serviceType}</button>
      )
    } else {
      return (
        <button key={keyID} onClick={() => changeService(serviceType)}>{serviceType}</button>
      )
    }
  }

  return (
    <div id="clientPage">
      <h1>Beezy</h1>
        <div className="serviceContainer">
          <h2>Services</h2>
          <div id="servicesOptions">
            <button onClick={() => goBack()}>{'<<'}</button>
            {selectedService.map((service, i) => ( 
              <Service serviceType={service} keyID={i+1}/>
            ))}
          </div>
        </div>
        <div className="appointmentContainer">
          <h2>Upcoming Appointments</h2>
          <div className="appts">
            {listOfUpcomingAppts.map((apptId, count) => {
              const details = apptsDetails[apptId];
              return (
                <div key={apptId} className="apptIndiv">
                  <h3>Appt: {count + 1}</h3>
                  <p className="deets">{details["Service Type"]}</p>
                  <p className="deets">{details.Date}</p>
                  <p className="deets">{details.Time}</p>
                  <p className="deets">Freelancers: {details.Freelancers.join(", ")}</p>
                </div>
              );
            })}
          </div>
        </div>
    </div>
  );
}
