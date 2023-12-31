import {Contact} from "./contact";

export type Event = {
    id: number;
    name: string;
    date: string;
    time: string;
    location: string;
    description: string;
    isInvitesSent: boolean;
    invitees: Contact[];
}