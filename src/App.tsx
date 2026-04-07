import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { HashRouter, Routes, Route } from "react-router-dom";
import { AIChatWidget } from "./components/AIChatWidget";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import StatePage from "./pages/StatePage";
import MotorcycleShippingPage from "./pages/MotorcycleShippingPage";
import EnclosedTransportPage from "./pages/EnclosedTransportPage";
import OpenTransportPage from "./pages/OpenTransportPage";
import NotFoundPage from "./pages/NotFoundPage";
import ShippingCostPage from "./pages/blog/ShippingCostPage";
import OpenVsEnclosedPage from "./pages/blog/OpenVsEnclosedPage";
import PrepareCarPage from "./pages/blog/PrepareCarPage";

export default function App() {
  return (
    <HelmetProvider>
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/how-much-does-it-cost-to-ship-a-car" element={<ShippingCostPage />} />
        <Route path="/blog/open-vs-enclosed-car-transport" element={<OpenVsEnclosedPage />} />
        <Route path="/blog/5-tips-preparing-car-for-shipping" element={<PrepareCarPage />} />
        <Route path="/motorcycle-shipping" element={<MotorcycleShippingPage />} />
        <Route path="/enclosed-auto-transport" element={<EnclosedTransportPage />} />
        <Route path="/open-auto-transport" element={<OpenTransportPage />} />
        <Route path="/terms-and-conditions" element={<TermsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPage />} />
        <Route path="/:stateSlug" element={<StatePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
    <AIChatWidget />
    </HelmetProvider>
  );
}
