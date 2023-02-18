import PropTypes from 'prop-types';
import { TableTitle, Table, TableHead, TableMain } from './transactions.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableTitle>
        <tr>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Currency</TableHead>
        </tr>
      </TableTitle>
      <tbody>
        {items.map(item => {
          return (
            <tr key={item.id}>
              <TableMain>{item.type}</TableMain>
              <TableMain>{item.amount}</TableMain>
              <TableMain>{item.currency}</TableMain>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
