import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { EventsPage } from "./pages/EventsPage";
import { AppBar, Button, Container, Toolbar } from "@mui/material";
import { ContactsPage } from "./pages/ContactsPage";
import { EventDetailPage } from "./pages/EventDetailPage";

function App() {
  return (
      <>
          <BrowserRouter>
              <AppBar position="static">
                  <Toolbar>
                      <Button color="inherit" component={NavLink} to="/">
                          Events
                      </Button>
                      <Button color="inherit" component={NavLink} to="/contacts">
                          Contacts
                      </Button>
                  </Toolbar>
              </AppBar>
              <Container>
                  <Routes>
                      <Route path="/" element={<EventsPage />} />
                      <Route path="/contacts" element={<ContactsPage contacts={[]} />} />
                      <Route path="/events/:id" element={<EventDetailPage />} />
                  </Routes>
              </Container>
          </BrowserRouter>
      </>
  )
}

export default App;
