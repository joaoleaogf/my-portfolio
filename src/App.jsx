import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Header = lazy(() => import('./components/layout/Header/Header'));
const Footer = lazy(() => import('./components/layout/Footer/Footer'));
const Home = lazy(() => import('./pages/Home'));
const Blog = lazy(() => import('./pages/Blog'));

import SEO from './components/common/SEO';

const LoadingFallback = () => (
    <div style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'var(--bg-dark)'
    }}>
        <div className="loading-spinner" style={{
            width: '50px',
            height: '50px',
            border: '3px solid var(--text-secondary)',
            borderTop: '3px solid var(--primary)',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
        }}></div>
        <style>{`
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `}</style>
    </div>
);

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <SEO />
                <Suspense fallback={<LoadingFallback />}>
                    <Header />
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/blog" element={<Blog />} />
                        </Routes>
                    </main>
                    <Footer />
                </Suspense>
            </div>
        </BrowserRouter>
    );
}

export default App;
