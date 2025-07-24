import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiLogOut } from 'react-icons/fi';

const Header = () => {
    const { t, i18n } = useTranslation();

    const changeLang = (e) => {
        i18n.changeLanguage(e.target.value);
    };

    const handleLogout = () => {
        localStorage.clear();
        window.location.href = '/';
    };

    return (
        <header className="bg-blue-700 text-white px-6 py-4 shadow-md flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
                <img src="/vite.svg" alt="Logo" className="w-10 h-10 object-contain" />
                <span className="text-xl font-bold">YourApp</span>
            </div>

            {/* Navigation */}
            <nav className="space-x-6 text-lg font-medium hidden md:flex">
                <Link to="/home" className="hover:underline">{t('header.home')}</Link>
                <Link to="/about" className="hover:underline">{t('header.about')}</Link>
                <Link to="/contact" className="hover:underline">{t('header.contact')}</Link>
            </nav>

            {/* Language + Logout */}
            <div className="flex items-center gap-4">
                <select
                    onChange={changeLang}
                    value={i18n.language}
                    className="text-black px-2 py-1 rounded-md"
                >
                    <option value="en">🇺🇸 EN</option>
                    <option value="ta">🇮🇳 TA</option>
                    <option value="hi">🇮🇳 HI</option>
                </select>
                <button onClick={handleLogout} title={t("header.logout")}>
                    <FiLogOut className="text-white text-xl hover:text-red-300" />
                </button>
            </div>
        </header>
    );
};

export default Header;
