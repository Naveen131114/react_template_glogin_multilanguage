import React from 'react';
import { useTranslation } from 'react-i18next';

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <div className="p-6 md:p-12">
      <h2 className="text-3xl font-bold mb-6 text-center">{t('contact.title')}</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">{t('contact.name')}</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium">{t('contact.email')}</label>
            <input type="email" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium">{t('contact.message')}</label>
            <textarea className="w-full p-2 border rounded" rows="4"></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded">
            {t('contact.submit')}
          </button>
        </form>

        {/* Address Section */}
        <div className="bg-gray-100 p-6 rounded shadow-md">
          <h3 className="text-xl font-semibold mb-4">{t('contact.address_title')}</h3>
          <p>{t('contact.address_line1')}</p>
          <p>{t('contact.address_line2')}</p>
          <p>{t('contact.phone')}</p>
          <p>{t('contact.email_label')}: info@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
