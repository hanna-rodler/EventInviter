import { Event } from "../types/events";
import { useForm, SubmitHandler } from "react-hook-form";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { add } from "../store/eventsSlice";
import {useAppDispatch} from "../store/hooks";

type CreateEventFormProps = {
    onClose: () => void;
};

export const CreateEventForm = ({onClose}: CreateEventFormProps) => {
    const dispatch = useAppDispatch();

    type FormData = {
        name: string;
        date: string;
        time: string;
        location: string;
        description: string;
    };

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        const newEvent: Event = {
            id: Math.floor((Math.random())*10),
            name: data.name,
            date: data.date,
            time: data.time,
            location: data.location,
            description: data.description,
            isInvitesSent: false,
            invitees: [],
        };
        console.log('new event', newEvent);

        dispatch(add(newEvent));
        onClose();
    };

    const style = {
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    };
    // TODO: date and time fields. Make description field a multiline text field.

    return (
        <Box sx={style} component="form" noValidate autoComplete="on">
                <div
                    style={{
                        flexDirection: "column",
                        gap: "12px",
                        alignItems: "flex-start",
                    }}
                >
                    <h3>Create new event</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                        <div style={{ display: "flex", flexDirection: "column"}}>
                            <TextField
                                size="small"
                                id="name"
                                label="Name"
                                {...register("name", {required: true})}
                            />
                            {errors.name && <Typography style={{ color: 'red', marginTop: 3 }}>This field is required</Typography>}
                        </div>
                        <div style={{ display: "flex", flexDirection: "column"}}>
                            <TextField
                                size="small"
                                id="location"
                                label="Location"
                                {...register("location", {required: true})}
                            />
                            {errors.location && <Typography style={{ color: 'red', marginTop: 3 }}>This field is required</Typography>}
                        </div>
                        <div style={{ display: "flex", flexDirection: "column"}}>
                            <TextField
                                size="small"
                                id="description"
                                label="Description"
                                multiline
                                rows={3}
                                {...register("description", {required: false})}
                            />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column"}}>
                            <TextField
                                size="small"
                                id="date"
                                label="Date"
                                placeholder="dd.mm.yyyy"
                                {...register("date", {required: true, pattern: /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}(?:\s*-\s*(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4})?$/})}
                            />
                            {errors.date?.type === 'required' && <Typography style={{ color: 'red', marginTop: 3 }}>This field is required</Typography>}
                            {errors.date?.type === 'pattern' && <Typography style={{ color: 'red', marginTop: 3 }}>Please provide the date in the format dd.mm.yyyy or dd.mm.yyyy - dd.mm.yyyy</Typography>}
                        </div>
                        <div style={{ display: "flex", flexDirection: "column"}}>
                            <TextField
                                size="small"
                                id="time"
                                label="Time"
                                placeholder="hh:mm or hh:mm-hh:mm"
                                {...register("time", {required: true, pattern: /^(?:\d{1,2}:\d{2}(?:\s*-\s*\d{1,2}:\d{2})?)$/ })}
                            />
                            {errors.time?.type === 'required' && <Typography style={{ color: 'red', marginTop: 3 }}>This field is required</Typography>}
                            {errors.time?.type === 'pattern' && <Typography style={{ color: 'red', marginTop: 3 }}>Please provide the time in the pattern hh:mm or hh:mm-hh:mm</Typography>}
                        </div>
                    </div>
                    <Paper
                        onClick={handleSubmit(onSubmit)}
                        sx={{ cursor: "pointer" }}
                        elevation={3}
                        style={{
                            padding: "6px 16px",
                            textAlign: "center",
                            width: "fit-content",
                            alignSelf: "flex-end",
                            margin: "24px 0px 16px 200px",
                            background: "#9e9e9e",
                        }}
                        id="save-event"
                    >
                        Save
                    </Paper>
                </div>
            </Box>
    );
}
