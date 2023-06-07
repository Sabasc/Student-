import React, { useState } from 'react';

const Details = () => {
  const [inputs, setInputs] = useState({
    name1: '',
    email1: '',
    rollnumber: '',
  });

  const [tableData, setTableData] = useState([]);

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTableData([...tableData, inputs]);
    setInputs({
      name1: '',
      email1: '',
      rollnumber: '',
    });
  };

  const handleDelete = (index) => {
    const filterData = tableData.filter((item, i) => i !== index);
    setTableData(filterData);
  };

  const handleEdit = (index) => {
    const tempData = tableData [index];

    setInputs({name1:tempData.name, rollnumber:tempData.rollnumber, email:tempData.email1})
  }

  return (
    <>
      <article className='article-header mt-4'>
        <header>
          <h1>Student Records</h1>
        </header>
      </article>

      <section className='section-content'>
        <form className='container1 mt-5' onSubmit={handleSubmit}>
          <div>
            <input
            
              className='mt-5 in' type='text' placeholder='Enter name'
              name='name1' value={inputs.name1} onChange={handleChange}
            />
          </div>

          <div>
            <input
             className='in' type='text' placeholder='Enter roll number' name='rollnumber'value={inputs.rollnumber} onChange={handleChange}
            />
          </div>

          <div>
            <input
             className='in' type='text' placeholder='Enter email' name='email1' value={inputs.email1} onChange={handleChange}
            />
          </div>

          <div>
            <button type='submit' className='mt-3 mb-3'>
              Add
            </button>
          </div>
        </form>
      </section>


 <div className='center'>
        <table className='table table-sm table-dark mt-5 ' style={{ textAlign: 'center' }}>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Name</th>
              <th scope='col'>Roll Number</th>
              <th scope='col'>Email</th>
              <th scope='col'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index}>
                <th scope='row'>{index + 1}</th>
                <td>{item.name1}</td>
                <td>{item.rollnumber}</td>
                <td>{item.email1}</td>
                <td>
                  <button className='btn1' onClick={() =>handleEdit()}>Edit</button> 
                  <button className='btn2' onClick={() => handleDelete(index)}>Delete</button>
</td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>

    </>
  );
};

export default Details;
