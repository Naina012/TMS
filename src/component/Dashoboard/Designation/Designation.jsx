import React, { useState, useEffect } from 'react';
import './Designation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';
const ManageDesignation = () => {
  const SelectField = ({ label, id, name, value, options, onChange, isSearchable }) => (
    <div className="mb-2">
      <label htmlFor={id}>{label}</label>
      <Select
        id={id}
        name={name}
        options={options.map((option) => ({ value: option, label: option }))}
        value={{ value, label: value }}
        onChange={(selectedOption) => onChange(selectedOption.value)}
        isSearchable={isSearchable}
      />
    </div>
  );
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [companyNames, setCompanyNames] = useState([]);
  const [departmentNames, setDepartmentNames] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [designationName, setDesignationName] = useState('');

  const Designations = [
    { id: 1, companyname: 'Company A',departmentname: 'Company A',designationname: 'Designation A' },
  ]
  useEffect(() => {
    // Fetch company names and department names from the API
    fetchDropdownData('your-company-api-endpoint-here', setCompanyNames);
    fetchDropdownData('your-department-api-endpoint-here', setDepartmentNames);
  }, []);

  const openPopup = () => {
    setIsFormOpen(true);
  };

  const closePopup = () => {
    setIsFormOpen(false);
  };

  const submitDesignationForm = (event) => {
    event.preventDefault();
    // Handle form submission or API integration here
    // You can use form data from event.target
  };

  return (
    <div className="DashboardContainer">
      <div className="Data">
        <div className="Admin">
          <b>Designations</b>
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
                <th>Designation Name</th>
                {/* <th>PAN No.</th> */}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Designations.map((Designation, index) => (
                <tr key={Designation.id}>
                  <td>{index + 1}</td>
                  <td>{Designation.companyname}</td>
                  <td>{Designation.departmentname}</td>
                  <td>{Designation.designationname}</td>
                  {/* <td>{Designation.pan}</td> */}
                  <td>
                  <a href={`view/${Designation.id}`} className="action-link">
                      <i className="fas fa-eye" title="View"></i> 
                    </a>
                    <a href={`edit/${Designation.id}`} className="action-link">
                      <i className="fas fa-edit"title="Edit"></i> 
                    </a>
                    <a href={`delete/${Designation.id}`} className="action-link">
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
        <form id="DesignationForm" onSubmit={submitDesignationForm}>
          <div className="popup-container">
            <div className="popup">
              <div className="m-3" style={{ maxWidth: '800px' }}>
                <div className="px-5">
                  <button className="btn btn-link close-button" onClick={closePopup}>
                    <i className="fa fa-times" style={{ color: 'red' }}></i>
                  </button>

                  <h2 className="text-uppercase text-center mb-5">Add Your Designation</h2>

                  <SelectField
                    label="Company Name"
                    id="companyName"
                    name="companyName"
                    value={selectedCompany}
                    options={companyNames}
                    onChange={setSelectedCompany}
                    isSearchable
                  />

                  <SelectField
                    label="Department Name"
                    id="departmentName"
                    name="departmentName"
                    value={selectedDepartment}
                    options={departmentNames}
                    onChange={setSelectedDepartment}
                    isSearchable
                  />

                  <div className="mb-2">
                    <label htmlFor="DesignationName">Designation Name</label>
                    <input
                      type="text"
                      id="DesignationName"
                      name="DesignationName"
                      className="form-control form-control-lg"
                      value={designationName}
                      onChange={(e) => setDesignationName(e.target.value)}
                    />
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

export default ManageDesignation;

function fetchDropdownData(apiEndpoint, setData) {
  fetch(apiEndpoint)
    .then((response) => response.json())
    .then((data) => {
      setData(data);
    })
    .catch((error) => {
      console.error(`Error fetching data from API: ${apiEndpoint}`, error);
    });
}
