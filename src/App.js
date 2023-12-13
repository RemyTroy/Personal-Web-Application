// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';


// Import pages you have completed:

import TopicsPage from './pages/TopicsPage'; 
import HomePage from './pages/HomePage.js';
import GalleryPage from './pages/GalleryPage.js';
import OrderPage from './pages/OrderPage.js'

import ProductsPage from './data/products.js'
import ContactPage from './pages/ContactPage.js'

import TravelPage from './pages/TravelPage.js';



// If your schema requires SHORT data input, then use the TABLE design. Otherwise use Form
import EditTravelPageForm from './pages/EditTravelPageForm.js';
import AddTravelPageForm from './pages/AddTravelPageForm.js';

// Define the function that renders the content in Routes, using State.
function App() {

  const [travelToEdit, setTravelToEdit] = useState([])

  return (
    <>
      <BrowserRouter>

          <header>
            <h1>Troy Hoffman</h1>
            <p>My Web Application</p>
          </header>

          <Navigation />

          <main>
            <section>
                <Routes> 
                    {/* Add Routes for Home, Topics, Gallery, Contact, and Staff Pages.  */}
                    
                    
                                  {/* Routes for provided pages */}
                     <Route path="/" element={<HomePage />} />
                     <Route path="/topics" element={<TopicsPage />} />
                     <Route path="/TravelList" element={<TravelPage setTravel={setTravelToEdit}/>} />
                     <Route path="/Gallery" element={<GalleryPage />} />
                     <Route path="/Order" element={<OrderPage />} />
                     <Route path="/Products" element={<ProductsPage />} /> 
                     <Route path="/Contact" element={<ContactPage />} /> 
                 

                 
                    {/* Use these if your schema requires LONG data input: */}
                    <Route path="/create" element={<AddTravelPageForm/>} /> 
                    <Route path="/edit" element={<EditTravelPageForm travelToEdit={travelToEdit} />} />

              
                </Routes>
              </section>
          </main>

          <footer>
            <p>2023 Troy Hoffman</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;