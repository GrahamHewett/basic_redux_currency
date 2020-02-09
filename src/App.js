import React from 'react';
import LogRocket from 'logrocket';
import debounce from "lodash.debounce";
import axios from "axios"
import store from "./store/configureStore";
import CurrencyConversion from "./components/currencyconversion"

LogRocket.init('f0e3q8/redux-test');
LogRocket.identify('hewettgraham@gmail.com');

export default function App() {
	// const [refreshReduxState, triggerRerender] = React.useState(true)
	// React.useEffect(
	// 	store.subscribe(() => {
	// 		console.log("redux state changed, page is re-rendered")
	// 		triggerRerender(!refreshReduxState)
	// 	})
	//   )
	return (
	  <div>
		<p>Hello Redux and react-redux</p>
		<CurrencyConversion 
			baseAmount={store.getState().baseAmount}
			counter={store.getState().counter} />
	  </div>
	);
  }

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.
store.subscribe(() => console.log(store.getState()))
// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch({ type: 'INCREMENT' })
// 1
store.dispatch({ type: 'DECREMENT' })
// 0
store.dispatch({ type: 'CHANGE_BASE_AMOUNT', data: '310.40'})
