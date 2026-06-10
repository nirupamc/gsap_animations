import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import { Toaster } from 'sonner';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-white selection:bg-accent selection:text-black">
      {/* Toast notifications */}
      <Toaster position="bottom-right" theme="dark" closeButton />
      
      {/* Navigation header */}
      <Navbar />

      {/* Main page layout */}
      <main className="flex-grow flex flex-col">
        <Home />
      </main>

      {/* Global footer */}
      <Footer />
    </div>
  );
}

export default App;
