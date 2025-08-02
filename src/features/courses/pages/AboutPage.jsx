import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div className="p-6 md:p-12 flex flex-col md:flex-row items-center gap-8">
      <div className="md:w-1/2">
        <img
          src="/about-image.png"
          alt="About Us"
          className="w-full rounded-lg shadow-md"
        />
      </div>
      <div className="md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">{t('about.title')}</h2>
        <p className="text-gray-700">{t('about.content')}</p>
      </div>
    </div>
  );
};

export default AboutPage;
