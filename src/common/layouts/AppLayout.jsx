import React from 'react';
import Header from './header';
import Footer from './footer';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
    return (
        <>
            <Header />
            <main className="min-h-[80vh] px-2 py-2">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default AppLayout;
