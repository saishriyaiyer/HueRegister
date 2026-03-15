import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { PrivacyModal } from './components/PrivacyModal';
import { HomePage } from './components/pages/HomePage';
import { ColorPredictionsPage } from './components/pages/ColorPredictionsPage';
import { AshenIronPage } from './components/pages/AshenIronPage';
import { ForgeGreyPage } from './components/pages/ForgeGreyPage';
import { SmokySteelPage } from './components/pages/SmokySteelPage';
import { MethodologyPage } from './components/pages/MethodologyPage';
import { ApplicationsPage } from './components/pages/ApplicationsPage';
import { PsychologyPage } from './components/pages/PsychologyPage';
import { TrendIntelligencePage } from './components/pages/TrendIntelligencePage';
import { AboutPage } from './components/pages/AboutPage';
import { TrendAnalyzerPage } from './components/pages/TrendAnalyzerPage';
import { IndustriesIndexPage } from './components/pages/IndustriesIndexPage';
import { IndustryDetailPage } from './components/pages/IndustryDetailPage';
import { CMFDirectionPage } from './components/pages/CMFDirectionPage';
import { MaterialIntelligencePage } from './components/pages/MaterialIntelligencePage';
import { AdminDashboardPage } from './components/pages/AdminDashboardPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentIndustryId, setCurrentIndustryId] = useState<string | null>(null);
  const [privacyAccepted, setPrivacyAccepted] = useState(() => {
    return localStorage.getItem('hue-register-privacy-accepted') === 'true';
  });

  const handleNavigate = (page: string, industryId?: string) => {
    setCurrentPage(page);
    if (industryId) {
      setCurrentIndustryId(industryId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrivacyAccept = () => {
    setPrivacyAccepted(true);
    localStorage.setItem('hue-register-privacy-accepted', 'true');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case '2027-predictions':
        return <ColorPredictionsPage onNavigate={handleNavigate} />;
      case 'ashen-iron':
        return <AshenIronPage />;
      case 'forge-grey':
        return <ForgeGreyPage />;
      case 'smoky-steel':
        return <SmokySteelPage />;
      case 'methodology':
        return <MethodologyPage />;
      case 'applications':
        return <ApplicationsPage />;
      case 'psychology':
        return <PsychologyPage />;
      case 'trend-intelligence':
        return <TrendIntelligencePage />;
      case 'trend-analyzer':
        return <TrendAnalyzerPage />;
      case 'about':
        return <AboutPage />;
      case 'industries-index':
        return <IndustriesIndexPage onNavigate={handleNavigate} />;
      case 'industry-detail':
        return <IndustryDetailPage industryId={currentIndustryId || ''} onNavigate={handleNavigate} />;
      case 'cmf-direction':
        return <CMFDirectionPage />;
      case 'material-intelligence':
        return <MaterialIntelligencePage />;
      case 'admin-dashboard':
        return <AdminDashboardPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <PrivacyModal onAccept={handlePrivacyAccept} />
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      {renderPage()}
    </div>
  );
}