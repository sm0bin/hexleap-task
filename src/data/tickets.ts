interface TicketData {
  thumbnail: string;
  teamName: string;
  time: {
    date: string;
    day: string;
    time: string;
  };
  place: string;
}

const ticketsData: TicketData[] = [
  {
    thumbnail: "/images/ticket-1.png",
    teamName: "Las Vegas Aviators",
    time: {
      date: "OCT 10",
      day: "TUE",
      time: "4:30 PM",
    },
    place: "Las Vegas Ballpark, Las Vegas, Nevada",
  },
  {
    thumbnail: "/images/ticket-2.png", // Assuming the same thumbnail for Sacramento River Cats
    teamName: "Sacramento River Cats",
    time: {
      date: "OCT 11",
      day: "SUN",
      time: "4:30 PM",
    },
    place: "Sutter Health Park, Sacramento, California",
  },
  {
    thumbnail: "/images/ticket-1.png",
    teamName: "Las Vegas Aviators",
    time: {
      date: "OCT 12",
      day: "MON",
      time: "4:30 PM",
    },
    place: "Las Vegas Ballpark, Las Vegas, Nevada",
  },
  {
    thumbnail: "/images/ticket-2.png",
    teamName: "Las Vegas Aviators",
    time: {
      date: "OCT 13",
      day: "MON",
      time: "4:30 PM",
    },
    place: "Las Vegas Ballpark, Las Vegas, Nevada",
  },
  {
    thumbnail: "/images/ticket-1.png",
    teamName: "Las Vegas Aviators",
    time: {
      date: "OCT 14",
      day: "SUN",
      time: "4:30 PM",
    },
    place: "Las Vegas Ballpark, Las Vegas, Nevada",
  },
];

export default ticketsData;
