import PropTypes from 'prop-types';
import css from './statistics.module.css';

function generateRandomColor() {
  let color = '#';
  for (let i = 0; i < 3; i++)
    color += (
      '0' + Math.floor((Math.random() * Math.pow(16, 2)) / 2).toString(16)
    ).slice(-2);
  return color;
}


 function Statistics({title, stats}){
return (
<section className={css.statistics}>
{title &&  <h2 className={css.title}>{title}</h2> }
<ul className={css['stat-list']}>
{stats.map(stat => (
          <li
            key={stat.id}
            className={css.item}
            style={{backgroundColor: generateRandomColor(),
            }}
          >
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );

}




Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics
