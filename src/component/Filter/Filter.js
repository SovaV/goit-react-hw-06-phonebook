import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../redux/contacts/add-actions';
import { getFilter } from '../redux/contacts/selector';
import React from 'react';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={e => dispatch(actions.changeFilter(e.target.value))}
      />
    </label>
  );
};

export default Filter;

// import PropTypes from 'prop-types';

// import React from 'react';

// const Filter = ({ value, onChange }) => (
//   <label>
//     Find contacts by name
//     <input type="text" value={value} onChange={onChange} />
//   </label>
// );
// Filter.propTypes = {
//   onChange: PropTypes.func.isRequired,
//   value: PropTypes.oneOfType([PropTypes.string]),
// };
// export default Filter;
