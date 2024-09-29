const gyms = [
  {
    id: "gym1",
    name: "FitLife",
    image: "/temporary/gym-pics/gym1.jpg",
    location: "mombasa",
  },
  {
    id: "gym2",
    name: "Urban fitness",
    image: "/temporary/gym-pics/gym2.jpg",
    location: "nairobi",
  },
  {
    id: "gym3",
    name: "Greek gods",
    image: "/temporary/gym-pics/gym3.jpg",
    location: "kisumu",
  },
  {
    id: "gym4",
    name: "Gladiators Gym",
    image: "/temporary/gym-pics/gym4.jpg",
    location: "nakuru",
  },
  {
    id: "gym5",
    name: "Men of steel",
    image: "/temporary/gym-pics/gym5.jpg",
    location: "malindi",
  },
];
const location=[
  { "id": "1", "name": "mombasa" },
  { "id": "2", "name": "kisumu" },
  { "id": "3", "name": "nakuru" },
  { "id": "4", "name": "nairobi" },
  { "id": "5", "name": "malindi" }
]

const users = [
  {
    "id": "user1",
    "name": "Alice Johnson",
    "image": "/temporary/users/user1.jpg",
    "interests": ["cardio", "yoga", "zumba"],
    "age": 23,
    "gym": {
      "name": "Men of steel",
      "id": "gym5",
      "image": "/temporary/gym-pics/gym5.jpg",
      "location": "malindi"
    }
  },
  {
    "id": "user2",
    "name": "Bob Smith",
    "image": "/temporary/users/user2.jpg",
    "interests": ["weightlifting", "crossfit", "boxing/martial arts"],
    "age": 20,
    "gym": {
      "name": "Men of steel",
      "id": "gym5",
      "image": "/temporary/gym-pics/gym5.jpg",
      "location": "malindi"
    }
  },
  {
    "id": "user3",
    "name": "Charlie Brown",
    "image": "/temporary/users/user3.jpg",
    "interests": ["calisthenics", "social interaction", "yoga"],
    "age": 45,
    "gym": {
      "name": "Gladiators Gym",
      "id": "gym4",
      "image": "/temporary/gym-pics/gym4.jpg",
      "location": "nakuru"
    }
  },
  {
    "id": "user4",
    "name": "Diana Prince",
    "image": "/temporary/users/user4.jpg",
    "interests": ["zumba", "bodybuilding", "cardio"],
    "age": 19,
    "gym": {
      "name": "Greek gods",
      "id": "gym3",
      "image": "/temporary/gym-pics/gym3.jpg",
      "location": "kisumu"
    }
  },
  {
    "id": "user5",
    "name": "Eve Adams",
    "image": "/temporary/users/user5.jpg",
    "interests": ["social interaction", "yoga", "crossfit"],
    "age": 31,
    "gym": {
      "name": "Gladiators Gym",
      "id": "gym4",
      "image": "/temporary/gym-pics/gym4.jpg",
      "location": "nakuru"
    }
  },
  {
    "id": "user6",
    "name": "Frank Williams",
    "image": "/temporary/users/user6.jpg",
    "interests": ["boxing/martial arts", "weightlifting", "cardio"],
    "age": 37,
    "gym": {
      "name": "Men of steel",
      "id": "gym5",
      "image": "/temporary/gym-pics/gym5.jpg",
      "location": "malindi"
    }
  },
  {
    "id": "user7",
    "name": "Grace Lewis",
    "image": "/temporary/users/user7.jpg",
    "interests": ["zumba", "bodybuilding", "social interaction"],
    "age": 50,
    "gym": {
      "name": "Urban fitness",
      "id": "gym2",
      "image": "/temporary/gym-pics/gym2.jpg",
      "location": "nairobi"
    }
  },
  {
    "id": "user8",
    "name": "Henry Clark",
    "image": "/temporary/users/user8.jpg",
    "interests": ["yoga", "crossfit", "calisthenics"],
    "age": 37,
    "gym": {
      "name": "Urban fitness",
      "id": "gym2",
      "image": "/temporary/gym-pics/gym2.jpg",
      "location": "nairobi"
    }
  },
  {
    "id": "user9",
    "name": "Ivy Scott",
    "image": "/temporary/users/user9.jpg",
    "interests": ["cardio", "yoga", "zumba"],
    "age": 21,
    "gym": {
      "name": "Urban fitness",
      "id": "gym2",
      "image": "/temporary/gym-pics/gym2.jpg",
      "location": "nairobi"
    }
  },
  {
    "id": "user10",
    "name": "Jack Evans",
    "image": "/temporary/users/user10.jpg",
    "interests": ["fitness", "social interaction", "bodybuilding"],
    "age": 26,
    "gym": {
      "name": "Gladiators Gym",
      "id": "gym4",
      "image": "/temporary/gym-pics/gym4.jpg",
      "location": "nakuru"
    }
  },
  {
    "id": "user11",
    "name": "Karen Davis",
    "image": "/temporary/users/user11.jpg",
    "interests": ["yoga", "dancing", "bodybuilding"],
    "age": 49,
    "gym": {
      "name": "Greek gods",
      "id": "gym3",
      "image": "/temporary/gym-pics/gym3.jpg",
      "location": "kisumu"
    }
  },
  {
    "id": "user12",
    "name": "Liam Thompson",
    "image": "/temporary/users/user12.jpg",
    "interests": ["calisthenics", "cardio", "weightlifting"],
    "age": 46,
    "gym": {
      "name": "Men of steel",
      "id": "gym5",
      "image": "/temporary/gym-pics/gym5.jpg",
      "location": "malindi"
    }
  },
  {
    "id": "user13",
    "name": "Mia Hernandez",
    "image": "/temporary/users/user13.jpg",
    "interests": ["fitness", "calisthenics", "cardio"],
    "age": 37,
    "gym": {
      "name": "Urban fitness",
      "id": "gym2",
      "image": "/temporary/gym-pics/gym2.jpg",
      "location": "nairobi"
    }
  },
  {
    "id": "user14",
    "name": "Noah Martinez",
    "image": "/temporary/users/user14.jpg",
    "interests": ["cardio", "cycling", "bodybuilding"],
    "age": 24,
    "gym": {
      "name": "Greek gods",
      "id": "gym3",
      "image": "/temporary/gym-pics/gym3.jpg",
      "location": "kisumu"
    }
  },
  {
    "id": "user15",
    "name": "Olivia Wilson",
    "image": "/temporary/users/user15.jpg",
    "interests": ["yoga", "bodybuilding", "cardio"],
    "age": 28,
    "gym": {
      "name": "Urban fitness",
      "id": "gym2",
      "image": "/temporary/gym-pics/gym2.jpg",
      "location": "nairobi"
    }
  },
  {
    "id": "user16",
    "name": "Paul White",
    "image": "/temporary/users/user16.jpg",
    "interests": ["yoga", "cardio", "bodybuilding"],
    "age": 35,
    "gym": {
      "name": "Greek gods",
      "id": "gym3",
      "image": "/temporary/gym-pics/gym3.jpg",
      "location": "kisumu"
    }
  },
  {
    "id": "user17",
    "name": "Quinn Ramirez",
    "image": "/temporary/users/user17.jpg",
    "interests": ["cardio", "social interaction", "weightlifting"],
    "age": 41,
    "gym": {
      "name": "FitLife",
      "id": "gym1",
      "image": "/temporary/gym-pics/gym1.jpg",
      "location": "mombasa"
    }
  },
  {
    "id": "user18",
    "name": "Ruby King",
    "image": "/temporary/users/user18.jpg",
    "interests": ["cardio", "bodybuilding", "social interaction"],
    "age": 39,
    "gym": {
      "name": "FitLife",
      "id": "gym1",
      "image": "/temporary/gym-pics/gym1.jpg",
      "location": "mombasa"
    }
  },
  {
    "id": "user19",
    "name": "Sam Green",
    "image": "/temporary/users/user19.jpg",
    "interests": ["dancing", "social interaction", "bodybuilding"],
    "age": 34,
    "gym": {
      "name": "Gladiators Gym",
      "id": "gym4",
      "image": "/temporary/gym-pics/gym4.jpg",
      "location": "nakuru"
    }
  },
  {
    "id": "user20",
    "name": "Tina Lee",
    "image": "/temporary/users/user20.jpg",
    "interests": ["fitness", "calisthenics", "yoga"],
    "age": 29,
    "gym": {
      "name": "FitLife",
      "id": "gym1",
      "image": "/temporary/gym-pics/gym1.jpg",
      "location": "mombasa"
    }
  },
  {
    "id": "user21",
    "name": "Uma Patel",
    "image": "/temporary/users/user21.jpg",
    "interests": ["yoga", "zumba", "bodybuilding"],
    "age": 38,
    "gym": {
      "name": "FitLife",
      "id": "gym1",
      "image": "/temporary/gym-pics/gym1.jpg",
      "location": "mombasa"
    }
  },
  {
    "id": "user22",
    "name": "Victor Torres",
    "image": "/temporary/users/user22.jpg",
    "interests": ["fitness", "calisthenics", "social interaction"],
    "age": 27,
    "gym": {
      "name": "Greek gods",
      "id": "gym3",
      "image": "/temporary/gym-pics/gym3.jpg",
      "location": "kisumu"
    }
  },
  {
    "id": "user23",
    "name": "Wendy Harris",
    "image": "/temporary/users/user23.jpg",
    "interests": ["cardio", "zumba", "bodybuilding"],
    "age": 30,
    "gym": {
      "name": "Urban fitness",
      "id": "gym2",
      "image": "/temporary/gym-pics/gym2.jpg",
      "location": "nairobi"
    }
  },
  {
    "id": "user24",
    "name": "Xander Perez",
    "image": "/temporary/users/user24.jpg",
    "interests": ["crossfit", "weightlifting", "social interaction"],
    "age": 33,
    "gym": {
      "name": "FitLife",
      "id": "gym1",
      "image": "/temporary/gym-pics/gym1.jpg",
      "location": "mombasa"
    }
  },
  {
    "id": "user25",
    "name": "Yara Wright",
    "image": "/temporary/users/user25.jpg",
    "interests": ["yoga", "zumba", "fitness"],
    "age": 22,
    "gym": {
      "name": "Gladiators Gym",
      "id": "gym4",
      "image": "/temporary/gym-pics/gym4.jpg",
      "location": "nakuru"
    }
  },
  {
    "id": "user26",
    "name": "Zoe Cooper",
    "image": "/temporary/users/user26.jpg",
    "interests": ["cardio", "weightlifting", "crossfit"],
    "age": 25,
    "gym": {
      "name": "Greek gods",
      "id": "gym3",
      "image": "/temporary/gym-pics/gym3.jpg",
      "location": "kisumu"
    }
  },
  {
    "id": "user27",
    "name": "Aaron Bell",
    "image": "/temporary/users/user27.jpg",
    "interests": ["bodybuilding", "yoga", "social interaction"],
    "age": 32,
    "gym": {
      "name": "Urban fitness",
      "id": "gym2",
      "image": "/temporary/gym-pics/gym2.jpg",
      "location": "nairobi"
    }
  },
  {
    "id": "user28",
    "name": "Bianca Rivera",
    "image": "/temporary/users/user28.jpg",
    "interests": ["yoga", "cardio", "fitness"],
    "age": 40,
    "gym": {
      "name": "Greek gods",
      "id": "gym3",
      "image": "/temporary/gym-pics/gym3.jpg",
      "location": "kisumu"
    }
  },
  {
    "id": "user29",
    "name": "Caleb Morris",
    "image": "/temporary/users/user29.jpg",
    "interests": ["weightlifting", "boxing/martial arts", "calisthenics"],
    "age": 36,
    "gym": {
      "name": "FitLife",
      "id": "gym1",
      "image": "/temporary/gym-pics/gym1.jpg",
      "location": "mombasa"
    }
  },
  {
    "id": "user30",
    "name": "Daisy Brooks",
    "image": "/temporary/users/user30.jpg",
    "interests": ["zumba", "bodybuilding", "fitness"],
    "age": 27,
    "gym": {
      "name": "Urban fitness",
      "id": "gym2",
      "image": "/temporary/gym-pics/gym2.jpg",
      "location": "nairobi"
    }
  }
];



export { gyms,location,users};
