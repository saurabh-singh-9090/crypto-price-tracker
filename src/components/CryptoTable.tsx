import React from 'react';

interface CryptoTableProps {
  data: any[];
}

const CryptoTable: React.FC<CryptoTableProps> = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Price</th>
          <th>Timestamp</th>
        </tr>
      </thead>
      <tbody>
        {data.map((entry) => (
          <tr key={entry._id}>
            <td>{entry.symbol}</td>
            <td>{entry.price}</td>
            <td>{new Date(entry.timestamp).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CryptoTable;
