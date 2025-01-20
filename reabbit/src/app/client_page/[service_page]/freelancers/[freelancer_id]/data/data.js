export const listOfServices = {
  House: 1,
  Technical: 2,
  "Car Services": 3,
  Education: 4,
  Hobby: 5,
  Expert: 6,
  "Know-How": 7,
};

export const listOfUpcomingAppts = [9, 11, 15];

export const apptsDetails = {
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

export const serviceDetails = {
    1: "House: moving company, cleaning company, repairment company etc..",
    2: "Technical: computer coding, PPT designer, UI/UX designer, video editor etc..",
    3: "Car Services: mechanic, car detailer, etc..",
    4: "Education: online video editor, online private lesson, Off-line private lesson, Certificate-related training etc..",
    5: "Hobby: origami, game, piano, dance, music, Exercise(PT), sport, art, magic etc..",
    6: "Expert: developer, designer, marketing expert, project manager, product manager, finance expert etc..",
    7: "Know-How: stock, bit coin etc..",
  };
  
  export const freelancers = [
    { id: 1, name: "Gerald", about: "1 year of experience", rating: 3, reviews: 120, ratePerHour: "$50" },
    { id: 2, name: "Hugh", about: "3 years of experience", rating: 4.8, reviews: 17, ratePerHour: "$70" },
    { id: 3, name: "Katarina", about: "20 years of experience", rating: 4.5, reviews: 59, ratePerHour: "$100" },
    { id: 4, name: "Garen", about: "12 years of experience", rating: 3.5, reviews: 82, ratePerHour: "$60" },
    { id: 5, name: "Jax", about: "17 years of experience", rating: 3.9, reviews: 34, ratePerHour: "$50" },
    { id: 6, name: "Joseph", about: "11 years of experience", rating: 4.1, reviews: 158, ratePerHour: "$200" },
    { id: 7, name: "Minnie", about: "10 years of experience", rating: 2.5, reviews: 61, ratePerHour: "$50" },
    { id: 8, name: "Sara", about: "7 years of experience", rating: 2.8, reviews: 43, ratePerHour: "$80" },
    { id: 9, name: "Jamil", about: "5 years of experience", rating: 5, reviews: 206, ratePerHour: "$20" },
  ];
  
  export const freelancerByService = {
    1: [1, 8],
    2: [2],
    3: [3],
    4: [],
    5: [5],
    6: [6],
    7: [4, 7, 9],
  };
  