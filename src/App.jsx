import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Cart from './components/Cart'
import { CartProvider } from './context/CartContext'
import { FavoritesProvider } from './context/FavoritesContext'
import { SearchProvider } from './context/SearchContext'
import Banner from './components/Banner'
import TshirtPage from './components/pages/TshirtPage'
import RoundNeckTshirtPage from './components/pages/RoundNeckTshirtPage'
import CollarTshirtPage from './components/pages/CollarTshirtPage'
import OversizedTshirtPage from './components/pages/OversizedTshirtPage'
import HoodiesPage from './components/pages/HoodiesPage'
import ZipHoodiePage from './components/pages/ZipHoodiePage'
import WithoutZipHoodiePage from './components/pages/WithoutZipHoodiePage'
import MugsPage from './components/pages/MugsPage'
import PlainMugPage from './components/pages/PlainMugPage'
import ThreeToneMugPage from './components/pages/ThreeToneMugPage'
import MagicMugPage from './components/pages/MagicMugPage'
import TransparentMugPage from './components/pages/TransparentMugPage'
import BottlesPage from './components/pages/BottlesPage'
import SublimationBottlesPage from './components/pages/SublimationBottlesPage'
import TemperatureBottlesPage from './components/pages/TemperatureBottlesPage'
import KidsPage from './components/pages/KidsPage'
import CorporatePage from './components/pages/CorporatePage'
import FavoritesPage from './components/pages/FavoritesPage'
import HoodieDetails from './components/ProductDetails/HoodieDetails'
import TshirtDetails from './components/ProductDetails/TshirtDetails'
import MugDetails from './components/ProductDetails/MugDeatils'
import BottleDetails from './components/ProductDetails/BottleDetails'
import CorporateDetails from './components/ProductDetails/CorporateDetails'
import SearchResults from './components/pages/SearchResults'
import SignIn from './components/pages/SignIn'
import BabyRomperPage from './components/pages/BabyRomperPage'
import KidsTshirtPage from './components/pages/KidsTshirtPage'
import KidsDetails from './components/pages/KidsPage'
import IDCard from './components/pages/IDCard'
import VisitingCardPage from './components/pages/VisitingCardPage'
import CorporatePensPage from './components/pages/CorporatePensPage'
import WelcomeKitPage from './components/pages/WelcomeKitPage'
import DiaryPage from './components/pages/DiaryPage'
import BabyRomperDetails from './components/ProductDetails/BabyRomperDetails'
import KidsTshirtDetails from './components/ProductDetails/KidsTshirtDetails'
import ScrollTop from './ScrollTop'

const AppContent = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === '/signin';
  const isHome = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen   overflow-hidden">
      <ScrollTop/>
      {!hideNavbar && <Navbar />}
      {isHome && <Banner />}
      <main className={`flex-grow ${hideNavbar ? 'bg-gray-50' : ''}`}>
        <Routes>
        
          <Route path="/" element={<Hero />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/tshirts" element={<TshirtPage />} />
          <Route path="/tshirts/round-neck" element={<RoundNeckTshirtPage />} />
          <Route path="/tshirts/collar" element={<CollarTshirtPage />} />
          <Route path="/tshirts/oversized" element={<OversizedTshirtPage />} />
          <Route path="/tshirts/:id" element={<TshirtDetails />} />
          <Route path="/hoodies" element={<HoodiesPage />} />
          <Route path="/hoodies/zip" element={<ZipHoodiePage />} />
          <Route path="/hoodies/without-zip" element={<WithoutZipHoodiePage />} />
          <Route path="/hoodies/:id" element={<HoodieDetails />} />
          <Route path="/mugs" element={<MugsPage />} />
          <Route path="/mugs/plain" element={<PlainMugPage />} />
          <Route path="/mugs/three-tone" element={<ThreeToneMugPage />} />
          <Route path="/mugs/magic" element={<MagicMugPage />} />
          <Route path="/mugs/transparent" element={<TransparentMugPage />} />
          <Route path="/mugs/:id" element={<MugDetails />} />
          <Route path="/bottles" element={<BottlesPage />} />
          <Route path="/bottles/sublimation" element={<SublimationBottlesPage />} />
          <Route path="/bottles/temperature" element={<TemperatureBottlesPage />} />
          <Route path="/bottles/:id" element={<BottleDetails />} />
          <Route path="/kids" element={<KidsPage />} />
          <Route path="/kids/romper" element={<BabyRomperPage />} />
          <Route path="/kids/tshirts" element={<KidsTshirtPage />} />
          <Route path="/kids/tshirt/:id" element={<KidsTshirtDetails />} />
          <Route path="/kids/:id" element={<KidsDetails />} />
          <Route path="/baby-romper/:id" element={<BabyRomperDetails />} />
          <Route path="/corporate" element={<CorporatePage />} />
          <Route path="/corporate/idcard" element={<IDCard />} />
          <Route path="/corporate/visiting-card" element={<VisitingCardPage />} />
          <Route path="/corporate/pens" element={<CorporatePensPage />} />
          <Route path="/corporate/welcome-kit" element={<WelcomeKitPage />} />
          <Route path="/corporate/diary" element={<DiaryPage />} />
          <Route path="/corporate/:id" element={<CorporateDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <CartProvider>
        <FavoritesProvider>
          <SearchProvider>
            <AppContent />
          </SearchProvider>
        </FavoritesProvider>
      </CartProvider>
    </Router>
  )
}

export default App