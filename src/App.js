import React from 'react';
import CurrencyConversion from "./components/currencyconversion";

// import debounce from "lodash.debounce";
// import axios from "axios";
// import LogRocket from 'logrocket';
// LogRocket.init('f0e3q8/redux-test');
// LogRocket.identify('hewettgraham@gmail.com');

export default function App() {
	return (
	  <div>
		<p>Hello Redux and react-redux</p>
		<CurrencyConversion />
	  </div>
	);
}