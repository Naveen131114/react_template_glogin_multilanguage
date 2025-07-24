import React from 'react';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
    const { t } = useTranslation();

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">{t('home.welcome')}</h1>
            <p>{t('home.description')}</p>
        </div>
    );
};

export default HomePage;
