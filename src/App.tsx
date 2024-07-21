import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CryptoTable from './components/CryptoTable.tsx';
import SymbolSelector from './components/SymbolSelector.tsx';
import { fetchDataRequest } from './actions/dataActions.ts';
import { RootState } from './store/store.ts';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.data.data);
  const [symbol, setSymbol] = useState<string>('bitcoin');

  useEffect(() => {
    dispatch(fetchDataRequest(symbol));
    const interval = setInterval(() => {
      dispatch(fetchDataRequest(symbol));
    }, 5000);

    return () => clearInterval(interval);
  }, [dispatch, symbol]);

  return (
    <div className="App">
      <h1>Crypto Tracker</h1>
      <SymbolSelector symbol={symbol} setSymbol={setSymbol} />
      <CryptoTable data={data} />
    </div>
  );
}

export default App;
