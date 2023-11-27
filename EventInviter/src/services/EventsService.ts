import { Event } from "../types/events";

const EVENTS: Event[] = [
    {
        id: 1,
        name: "Christmas party",
        date: "28.12.2023",
        time: "18:00",
        location: "Linz",
        description: "Cozy Christmas party with punch and cookies",
        isInvitesSent: false,
        invitees: [
            {
                id: 1,
                firstName: "Hanna",
                lastName: "Rodler",
                telNumber: "+43 677 62675165",
                email: "hannah@example.com",
            },
        ],
    },
    {
        id: 2,
        name: "Eventcalender Festival",
        date: "02.12.2023",
        time: "20:00",
        location: "Hagenberg",
        description: "Super duper party to celebrate the success of the EventInviter App!",
        isInvitesSent: true,
        invitees: [
            {
                id: 2,
                firstName: "Tobias",
                lastName: "Kothbauer",
                telNumber: "+43 650 2109448",
                email: "tobias@example.com",
            },
            {
                id: 3,
                firstName: "Elena",
                lastName: "Ebetshuber",
                telNumber: "+43 664 88440326",
                email: "elena@example.com",
            },
        ],
    },
    {
        id: 3,
        name: "Neon Nirwana",
        date: "26.04.2024",
        time: "20:00",
        location: "Hagenberg",
        description: "Dress in Neon to dance hard",
        isInvitesSent: false,
        invitees: [
        ],
    },
]

export const initializeEvents = (): Event[] => {
    return EVENTS;
}