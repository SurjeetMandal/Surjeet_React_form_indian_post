import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPincodeData, setPincode } from '../Redux/PincodeSlice';
import { useNavigate } from 'react-router-dom';
import './BeforeClick.css';

const BeforeClick = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    if (input.length === 6 && !isNaN(input)) {
      dispatch(setPincode(input));
      dispatch(fetchPincodeData(input)).then(() => {
        navigate('/pincode');  // Navigate to results page
      });
    } else {
      alert('Please enter a valid 6-digit pincode.');
    }
  };

  return (
    <div className='main_container'>
      <p className='heading'>Enter Pincode</p>
      <input
        type="text"
        placeholder="Pincode"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleClick}>Lookup</button>
    </div>
  );
};

export default BeforeClick;
