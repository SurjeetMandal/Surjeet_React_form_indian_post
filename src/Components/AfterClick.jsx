import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../Redux/PincodeSlice';

const AfterClick = () => {
  const { pincode, data, filter, loading, error } = useSelector((state) => state.pincode);
  const dispatch = useDispatch();
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (data) {
      setFilteredData(data.filter((postOffice) =>
        postOffice.Name.toLowerCase().includes(filter.toLowerCase())
      ));
    }
  }, [data, filter]);

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className='main_container'>
      <p className="heading">Pincode : {pincode}</p>
      <p className="heading">Message :  Number of pincode(s) found : {data.length}</p>
      <input
        type="text"
        placeholder="Filter By Name"
        value={filter}
        onChange={handleFilterChange}
      />

      <div className="box_container">
        {filteredData.length > 0 ? (
          filteredData.map((postOffice) => (
            <div className="box" key={postOffice.Name}>
              <p className="normal_txt">Name : {postOffice.Name}</p>
              <p className="normal_txt">Branch Type : {postOffice.BranchType}</p>
              <p className="normal_txt">Delivery Status : {postOffice.DeliveryStatus}</p>
              <p className="normal_txt">District : {postOffice.District}</p>
              <p className="normal_txt">Division : {postOffice.Division}</p>
            </div>
          ))
        ) : (
          <p>Could not find the postal data your looking for...</p>
        )}
      </div>
    </div>
  );
};

export default AfterClick;
