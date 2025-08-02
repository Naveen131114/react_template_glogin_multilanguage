import React from 'react';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* Banner Section */}
      <div className="relative h-64 md:h-96">
        <img
          src="/banner.png"
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold">{t('home.welcome')}</h1>
          <p className="mt-2 md:mt-4 text-lg md:text-xl">{t('home.description')}</p>
        </div>
      </div>

      {/* Info Section */}
      <div className="p-2 md:p-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">{t('home.subheading')}</h2>
        <p className="text-gray-700">{t('home.additional_info')}</p>
      </div>
    </div>
  );
};

export default HomePage;
