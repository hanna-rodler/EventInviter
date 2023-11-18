import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { EventsPage } from './pages/EventsPage';
import { ContactsPage } from "./pages/ContactsPage";
import { EventDetailPage } from "./pages/EventDetailPage";


function App() {

  return (
      <>
          <BrowserRouter>
              <menu>
                  <Link to="/">Events</Link>
                  <Link to="/contacts">Contacts</Link>
              </menu>
              <Routes>
                  <Route path="/" element={<EventsPage />} />
                  <Route path="/contacts" element={<ContactsPage />} />
                  <Route path="/events/:id" element={<EventDetailPage />} />
              </Routes>
          </BrowserRouter>
      </>
  )
}

export default App
