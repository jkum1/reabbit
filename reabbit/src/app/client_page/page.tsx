'use client';
import { useState } from 'react';
export default function ClientPage () {

    const listOfServices = {
        'Cleaning': 1,
        'Car Detail': 2,
        'Tutor': 3,
        'Chef': 4,
        'DishWasher': 5,
        'Mover': 6
    }

    const listOfUpcomingAppts = [9,11,15];
    const apptsDetails = {
        4: {
            'Service Type': 'Cleaning',
            'Date': '11/05/2025',
            'Time': '2:00 PM',
            'Freelancers': ['Gerald', 'Hugh', 'Katarina'],
        },
        9: {
            'Date': '12/06/2025',
            'Time': '6:00 PM',
            'Freelancers': ['Garen', 'Jax', 'Joseph'],
        },
        11: {
            'Service Type': 'Mover',
            'Date': '01/06/2025',
            'Time': '4:00 PM',
            'Freelancers': ['Minnie', 'Sara'],
        },
        15: {
            'Service Type': 'Chef',
            'Date': '04/06/2025',
            'Time': '11:00 AM',
            'Freelancers': ['Jamil'],
        }
    }

    return (
        <div>
            <h1>Services</h1>
            <div>
                {/* This bigger div should cotnain all the Service icons*/}
                <div>{/* One icon*/}</div>
                <div>{/* Another icon*/}</div>
                <div>{/* And Another one icon*/}</div>
                
            </div>
            Here to render all the icons of services in the listOfServices
            Client Page Temp
            List of APPTs
        </div>
    )
}