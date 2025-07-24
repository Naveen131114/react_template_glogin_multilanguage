import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-gray-800 text-white text-center py-4 mt-auto">
            <p className="text-sm">
                &copy; {new Date().getFullYear()} YourApp. {t("footer.copyright")}
            </p>
        </footer>
    );
};

export default Footer;
