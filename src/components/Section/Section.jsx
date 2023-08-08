import css from './Section.module.css';
import PropTypes from 'prop-types';

export function Section({ title, children }) {
  return (
    <section>
      <div className="container">
        <h2 className={css.sectionTitle}>{title}</h2>
        {children}
      </div>
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
