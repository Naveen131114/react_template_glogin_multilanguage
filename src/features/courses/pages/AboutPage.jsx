import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation();

    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold">{t('about.title')}</h2>
            <p>{t('about.content')}</p>
        </div>
    );
};

export default AboutPage;
