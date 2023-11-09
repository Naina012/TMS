import React, { useState,useEffect } from 'react';
import  "./Department.css" 
import 'bootstrap/dist/css/bootstrap.min.css';

const ManageDepartment = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [companyNames, setCompanyNames] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState('');
  const openPopup = () => {
    setIsFormOpen(true);
  };

  const closePopup = () => {
    setIsFormOpen(false);
  };

  const submitdepartmentForm = (event) => {
    event.preventDefault();
    // Handle form submission or API integration here
    // You can use form data from event.target
  };

  // Your list of departments
  const departments = [
    { id: 1, companyname: 'Company A',departmentname: 'Department A' },
    // Add more department data as needed
  ];
  useEffect(() => {
    // Fetch company names from the API and set them in the state
    fetchCompanyNamesFromAPI()
      .then((data) => {
        setCompanyNames(data);
      })
      .catch((error) => {
        console.error('Error fetching company names from API:', error);
      });
  }, []);

  const fetchCompanyNamesFromAPI = async () => {
    try {
      const response = await fetch('your-company-api-endpoint-here');
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <div className="DashboardContainer">
      <div className="Data">
        <div className="Admin">
          <b>Deparments</b>
        </div>
        <div className="search">
        <span className="plus-icon search" onClick={openPopup} title="Add your Depatment">

            <i className="fa fa-plus"></i>
          </span>
        </div>
      </div>

      <div className="tableContent">
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>S No.</th>
                <th>Company Name</th>
                <th>Department Name</th>
                {/* <th>PAN No.</th> */}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {departments.map((department, index) => (
                <tr key={department.id}>
                  <td>{index + 1}</td>
                  <td>{department.companyname}</td>
                  <td>{department.departmentname}</td>
                  {/* <td>{department.pan}</td> */}
                  <td>
                  <a href={`view/${department.id}`} className="action-link">
                      <i className="fas fa-eye" title="View"></i> 
                    </a>
                    <a href={`edit/${department.id}`} className="action-link">
                      <i className="fas fa-edit"title="Edit"></i> 
                    </a>
                    <a href={`delete/${department.id}`} className="action-link">
                      <i className="fas fa-trash" title="Delete"></i> 
                    
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="pagination d-flex justify-content-end">
        <a href="#" className="btn btn-link">
          «
        </a>
        <a href="#" className="btn btn-link">
          1
        </a>
        <a href="#" className="btn btn-link">
          2
        </a>
        <a href="#" className="btn btn-link">
          »
        </a>
      </div>

      {isFormOpen && (
        <form id="departmentForm" onSubmit={submitdepartmentForm}>
          <div className="popup-container">
            <div className="popup">
              <div className="m-3" style={{ maxWidth: '800px' }}>
                <div className="px-5">
                  <button className="btn btn-link close-button" onClick={closePopup}>
                    <i className="fa fa-times" style={{ color: 'red' }}></i>
                  </button>

                  <h2 className="text-uppercase text-center mb-5">Add  Your department</h2>
                  <div className="mb-2">
        <label htmlFor="companyName">Company Name</label>
        <select
          id="companyName"
          name="companyName"
          className="form-control form-control-lg"
          value={selectedCompany}
          onChange={(e) => setSelectedCompany(e.target.value)}
        >
          <option value="">Select a company</option>
          {companyNames.map((name, index) => (
            <option key={index} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>
                  <div className="mb-2">
                    <label htmlFor="departmentName">Department Name</label>
                    <input type="text" id="departmentName" name="departmentName" className="form-control form-control-lg" />
                  </div>
                  
                  <div className="d-flex flex-row justify-content-center mb-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckDefault"
                        name="termsAgreed"
                      />
                      <label className="form-check-label" htmlFor="flexCheckDefault">
                        I agree to all statements in the Terms of Service
                      </label>
                    </div>
                  </div>
                  <button className="btn btn-lg mb-4 w-100 gradient-custom-4" type="submit" id="submit">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default ManageDepartment;
