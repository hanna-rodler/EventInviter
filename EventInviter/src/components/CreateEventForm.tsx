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
            time: '20:00',
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
                                {...register("date", {required: true})}
                            />
                            {errors.date && <Typography style={{ color: 'red', marginTop: 3 }}>This field is required</Typography>}
                        </div>
                        <div style={{ display: "flex", flexDirection: "column"}}>
                            <TextField
                                size="small"
                                id="time"
                                label="Time"
                                {...register("time", {required: true})}
                            />
                            {errors.time && <Typography style={{ color: 'red', marginTop: 3 }}>This field is required</Typography>}
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
                    >
                        Save
                    </Paper>
                </div>
            </Box>
    );
}
