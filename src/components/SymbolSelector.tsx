import React from 'react';

interface SymbolSelectorProps {
  symbol: string;
  setSymbol: (symbol: string) => void;
}

const SymbolSelector: React.FC<SymbolSelectorProps> = ({ symbol, setSymbol }) => {
  const symbols = ['bitcoin', 'ethereum', 'litecoin', 'ripple', 'bitcoin-cash'];

  return (
    <div>
      <select value={symbol} onChange={(e) => setSymbol(e.target.value || 'bitcoin')}>
        {symbols.map((sym) => (
          <option key={sym} value={sym}>
            {sym}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SymbolSelector;
