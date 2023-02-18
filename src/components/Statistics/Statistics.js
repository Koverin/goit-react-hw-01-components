import PropTypes from 'prop-types';
import { List, Title, ListItem } from './Statistics.styled';
import { getRandomHexColor } from 'utils/getRandomHexColor';

export const Statistics = ({ title, stats }) => {
  return (
    <section>
      {title !== null && <Title>{title}</Title>}
      <List>
        {stats.map(data => (
          <ListItem
            key={data.id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className="#">{data.label}</span>
            <span className="#">{data.percentage}%</span>
          </ListItem>
        ))}
      </List>
    </section>
  );
};

Statistics.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
  title: PropTypes.string,
};
