# EventInviter

## Project Idea
Have you ever had the problem that you were creating multiple WhatsApp Groups or copying over the same message to each chat again and again while possibly forgetting to change the name of the recipient?

This is no more a problem with EventInviter.
EventInviter lets you create events, create your contacts and drag and drop Invitees to a specific Event.
Upon clicking  "send invites", WhatsApp will open in the browser and send the automatically rendered message. 


## Team Members
* Ebetshuber Elena
* Kothbauer Tobias
* Rodler Hanna


## Run Instructions
* `cd EventInviter`
* `npm install`
* `npm run dev`

## Project Notes
_WhatsApp Integration / Popup Windows_:
* If the browser disallows multiple popup windows, the window for sending invitations will only open once.

_Date- / TimePicker_:
We tried to implement a DatePicker for the Create Events Form.
We wrapped it in a Controller like recommended in the docs, added the LocalizationProvider with the dateAdapter, etc.
We tried the later with date-fns and dayjs - both should be fine according to the docs. All the dependencies were installed and all the necessary attributes set for the DatePicker.
What didn't work was registering the DatePicker wrapped in the LocalizationProvider and the Controller in connection with react-hook-form. For whatever reason, when we tried to use the MUI DatePicker with react-hook-form and redux, the DatePicker only output dd/EEEE/yyyy.
After 2 hours of trying to debug this peculiar behavior, we removed the DatePicker and all the dependencies again and added a TextField with a proper pattern. We know this could be improved, but since it exceeded the approximate time that was set by the professor, we decided to change this.    

_Drag&Drop Contact to Event_:
We implemented a Drag&Drop feature at the beginning of the project and it work's fine. The Contact is added to the event and you havv the possibility to delete it again. Additionaly there is the feature, that you can not add the same Contact twice.
At this time, we didn't use Redux yet. Some time after we implemented Redux we found out, that if we switch pages after the drag&drop action, the Contact is not saved. After some time trying to fix this we decided to leave it as it is, because we showed that we can use Redux for example after creating an Event or an Contact.
