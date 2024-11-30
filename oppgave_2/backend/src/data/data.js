export const templates = [
  {
    id: "template1",
    name: "Mal for Bedriftstrening",
    description: "Denne malen brukes til å organisere bedriftstreninger.",
    weekdays: ["Mandag", "Onsdag", "Fredag"],
    notSameDay: true,
    private: true,
    lim_attend: true,
    fixed_price: false,
    free: false,
    waitinglist: true,
  },
  {
    id: "template2",
    name: "Helse- og Velværearrangementer",
    description: "En mal designet for velvære- og treningssesjoner.",
    weekdays: ["Tirsdag", "Torsdag"],
    notSameDay: false,
    private: false,
    lim_attend: false,
    fixed_price: true,
    free: false,
    waitinglist: false,
  },
  {
    id: "template3",
    name: "Helgeverksteder",
    description: "Ideell for praktiske læringsarrangementer i helgene.",
    weekdays: ["Lørdag", "Søndag"],
    notSameDay: false,
    private: false,
    lim_attend: true,
    fixed_price: true,
    free: false,
    waitinglist: true,
  },
  {
    id: "template4",
    name: "Eksklusive Medlemsarrangementer",
    description: "Spesielle arrangementer eksklusivt for medlemmer.",
    weekdays: ["Fredag", "Lørdag"],
    notSameDay: true,
    private: true,
    lim_attend: true,
    fixed_price: false,
    free: true,
    waitinglist: true,
  },
];

export const events = [
  {
    id: "event1",
    title: "Lederskapstreningsprogram",
    createdAt: "2024-01-15T09:00:00Z",
    capacity: 18,
    currentCapacity: 18,
    location: "Oslo",
    category: "Bedrift",
    price: 1500,
    description: "Et program designet for å forbedre lederegenskaper.",
    private: true,
    waitinglist: true,
    template_id: "template1",
  },
  {
    id: "event2",
    title: "Yoga- og Meditasjonsretreat",
    createdAt: "2021-04-10T07:00:00Z",
    capacity: 14,
    currentCapacity: 14,
    location: "Bergen",
    category: "Velvære",
    price: 200,
    description: "En foryngende retreat for kropp og sinn.",
    private: false,
    waitinglist: false,
    template_id: "template2",
  },
  {
    id: "event3",
    title: "Avansert Fotograferingsverksted",
    createdAt: "2021-04-05T10:00:00Z",
    capacity: 20,
    currentCapacity: 5,
    location: "Trondheim",
    category: "Kreativ",
    price: 500,
    description: "Lær avanserte fotograferingsteknikker.",
    private: false,
    waitinglist: true,
    template_id: "template3",
  },
  {
    id: "event4",
    title: "Eksklusiv Vinsmakingaften",
    createdAt: "2021-04-20T19:00:00Z",
    capacity: 25,
    currentCapacity: 5,
    location: "Stavanger",
    category: "Livsstil",
    price: 100,
    description: "En eksklusiv vinsmaking for medlemmer.",
    private: true,
    waitinglist: true,
    template_id: "template4",
  },
  {
    id: "event5",
    title: "Seminar om Personlig Utvikling",
    createdAt: "2024-05-12T14:00:00Z",
    capacity: 100,
    currentCapacity: 5,
    location: "Oslo",
    category: "Bedrift",
    price: 800,
    description: "Et seminar om personlig vekst og utvikling.",
    private: false,
    waitinglist: true,
    template_id: "template1",
  },
  {
    id: "event6",
    title: "Helge Fitness Bootcamp",
    createdAt: "2024-06-01T08:00:00Z",
    capacity: 40,
    currentCapacity: 7,
    location: "Kristiansand",
    category: "Fitness",
    price: 300,
    description: "En helge fitness bootcamp for alle nivåer.",
    private: false,
    waitinglist: false,
    template_id: "template2",
  },
  {
    id: "event7",
    title: "Kunst- og Kreativitetsverksted",
    createdAt: "2024-07-08T11:00:00Z",
    capacity: 30,
    currentCapacity: 7,
    location: "Bergen",
    category: "Kreativ",
    price: 400,
    description: "Utforsk kreativiteten din med praktiske kunstsesjoner.",
    private: false,
    waitinglist: true,
    template_id: "template3",
  },
  {
    id: "event8",
    title: "Eksklusiv Nettverksmiddag",
    createdAt: "2024-08-15T18:00:00Z",
    capacity: 50,
    currentCapacity: 7,
    location: "Trondheim",
    category: "Nettverking",
    price: 0,
    description: "En nettverksarrangement kun for medlemmer.",
    private: true,
    waitinglist: true,
    template_id: "template4",
  },
];

export const registrations = [
  {
    id: "registration1",
    event_id: "event1",
    name: "Alice Brown",
    email: "alice.brown@example.com",
    phoneNumber: "1234567890",
    status: "bekreftet",
    createdAt: "2024-01-15T10:30:00Z",
    participants: [
      "Astrid",
      "Bjørn",
      "Cecilia",
      "David",
      "Elise",
      "Fredrik",
      "Gunnhild",
      "Henrik",
    ],
  },
  {
    id: "registration2",
    event_id: "event1",
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    phoneNumber: "9876543210",
    status: "ventende",
    createdAt: "2024-01-15T11:45:00Z",
    participants: [
      "Ingrid",
      "Jonas",
      "Kari",
      "Lars",
      "Maria",
      "Nikolai",
      "Olivia",
      "Petter",
    ],
  },
  {
    id: "registration3",
    event_id: "event2",
    name: "Cathy Lee",
    email: "cathy.lee@example.com",
    phoneNumber: "2345678901",
    status: "bekreftet",
    createdAt: "2024-02-10T08:20:00Z",
    participants: [
      "Sara",
      "Thomas",
      "Unn",
      "Victor",
      "Wenche",
      "Xander",
      "Ylva",
      "Zackarias",
    ],
  },
  {
    id: "registration4",
    event_id: "event2",
    name: "Daniel Green",
    email: "daniel.green@example.com",
    phoneNumber: "8765432190",
    status: "ventende",
    createdAt: "2024-02-10T09:10:00Z",
    participants: ["Aurora", "Felix", "Hannah", "Isak"],
  },
  {
    id: "registration5",
    event_id: "event3",
    name: "Ella White",
    email: "ella.white@example.com",
    phoneNumber: "3456789012",
    status: "bekreftet",
    createdAt: "2024-03-05T11:30:00Z",
    participants: ["Filip", "Ida", "Ludvig", "Thea"],
  },
  {
    id: "registration6",
    event_id: "event4",
    name: "Frank Harris",
    email: "frank.harris@example.com",
    phoneNumber: "7654321098",
    status: "bekreftet",
    createdAt: "2024-04-20T20:00:00Z",
    participants: ["Elias", "Ella", "Jonathan", "Stella"],
  },
  {
    id: "registration7",
    event_id: "event5",
    name: "Grace Kim",
    email: "grace.kim@example.com",
    phoneNumber: "4567890123",
    status: "ventende",
    createdAt: "2024-05-12T15:45:00Z",
    participants: ["Adam", "Leah", "Oskar", "Pia"],
  },
  {
    id: "registration8",
    event_id: "event6",
    name: "Henry Moore",
    email: "henry.moore@example.com",
    phoneNumber: "6543210987",
    status: "bekreftet",
    createdAt: "2024-06-01T09:00:00Z",
    participants: ["Amalie", "Magnus", "Nora", "Sander", "Tiril", "Vetle"],
  },
  {
    id: "registration9",
    event_id: "event7",
    name: "Ivy Scott",
    email: "ivy.scott@example.com",
    phoneNumber: "5678901234",
    status: "bekreftet",
    createdAt: "2024-07-08T12:15:00Z",
    participants: ["David", "Emma", "Fredrik", "Julie", "Kristoffer", "Lisa"],
  },
  {
    id: "registration10",
    event_id: "event8",
    name: "Jack Taylor",
    email: "jack.taylor@example.com",
    phoneNumber: "5432109876",
    status: "ventende",
    createdAt: "2024-08-15T19:30:00Z",
    participants: ["Henrik", "Ingrid", "Jonas", "Karianne", "Lars", "Mia"],
  },
];