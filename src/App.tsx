import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CryptoTable from './components/CryptoTable.tsx';
import SymbolSelector from './components/SymbolSelector.tsx';
import { fetchDataRequest, setSymbol } from './actions/dataActions.ts';
import { RootState } from './store/store.ts';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.data.data);
  const symbol = useSelector((state: RootState) => state.data.symbol);

  useEffect(() => {
    dispatch(fetchDataRequest(symbol));
    const interval = setInterval(() => {
      dispatch(fetchDataRequest(symbol));
    }, 5000);

    return () => clearInterval(interval);
  }, [dispatch, symbol]);

  const handleSymbolChange = (newSymbol: string) => {
    dispatch(setSymbol(newSymbol));
    dispatch(fetchDataRequest(newSymbol)); // Make sure to fetch data for the new symbol
  };

  return (
    <div className="App">
      <h1>Crypto Price Tracker</h1>
      <SymbolSelector symbol={symbol} setSymbol={handleSymbolChange} />
      <CryptoTable data={data} />
    </div>
  );
}

export default App;
