import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FcGoogle } from 'react-icons/fc';
const LoginPage = () => {
	const { t, i18n } = useTranslation();
	const [formData, setFormData] = useState({ username: "", password: "" });
	const [lang, setLang] = useState(i18n.language);

	const handleGoogleLogin = () => {
		window.location.href = "http://localhost:5000/login";
	};

	const handleInputChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const changeLang = (e) => {
		const selectedLang = e.target.value;
		i18n.changeLanguage(selectedLang);
		setLang(selectedLang);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		router.push('././')
		console.log("Form submitted:", formData);
		// Add your form login logic here
	};

	return (
		<div className="min-h-screen flex">
			{/* Left side image */}
			<div className="hidden md:flex items-center justify-center w-1/2 ">
				<img
					src={`/adminlogin.svg`}
					alt="Login Illustration"
					className="max-w-md"
				/>
			</div>

			{/* Right side form */}
			<div className="w-full md:w-1/2 flex items-center justify-center ">

				<div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
					<div className="flex justify-end mb-4">
						<select
							value={lang}
							onChange={changeLang}
							className="border border-gray-300 px-3 py-1 rounded-md"
						>
							<option value="en">🇺🇸 English</option>
							<option value="ta">🇮🇳 தமிழ்</option>
							<option value="hi">🇮🇳 हिंदी</option>
						</select>
					</div>

					<h1 className="text-2xl text-center font-bold mb-6">{t("login.title")}</h1>

					<form onSubmit={handleSubmit} className="space-y-4">
						<input
							type="text"
							name="username"
							placeholder={t("username")}
							value={formData.username}
							onChange={handleInputChange}
							className="w-full px-4 py-2 border rounded-lg"
						/>
						<input
							type="password"
							name="password"
							placeholder={t("password")}
							value={formData.password}
							onChange={handleInputChange}
							className="w-full px-4 py-2 border rounded-lg"
						/>

						<button
							type="submit"
							className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
						>
							{t("login.title")}
						</button>
					</form>

					<div className="my-4 text-center text-gray-500">{t("or")}</div>

					<button
						onClick={handleGoogleLogin}
						className="w-full bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2"
					>
						<FcGoogle className="text-xl" />
						<span>{t("login.google_button")}</span>
					</button>

					{/* Language Switcher
					<div className="mt-6 flex justify-center gap-4">
						<button onClick={() => i18n.changeLanguage('en')}>🇺🇸 EN</button>
						<button onClick={() => i18n.changeLanguage('ta')}>🇮🇳 TA</button>
						<button onClick={() => i18n.changeLanguage('hi')}>🇮🇳 HI</button>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
