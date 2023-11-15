import React, { useState, useEffect } from 'react';
import './Task.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Select from 'react-select';
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';
const CreateTask = () => {
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
  const [designationNames, setDesignationNames] = useState([]);
  const [employeeNames, setEmployeeNames] = useState([]);
  const [employeeEmail, setEmployeeEmail] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedDesignation, setSelectedDesignation] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [selectedEmail, setSelectedEmail] = useState('');
  const Employees = [
    { id: 1, companyname: 'Company A',departmentname: 'Department A',designationname: 'Designation A',employeename: 'Employee A' , email:"123@gmail.com",  taskallocated:"Task1"},
  ]
  useEffect(() => {
    // Fetch company names and department names from the API
    fetchDropdownData('your-company-api-endpoint-here', setCompanyNames);
    fetchDropdownData('your-department-api-endpoint-here', setDepartmentNames);
    fetchDropdownData('your-designation-api-endpoint-here', setDesignationNames);
    fetchDropdownData('your-employee-api-endpoint-here', setEmployeeNames);
    fetchDropdownData('your-employee-mail-api-endpoint-here', setEmployeeEmail);
  }, []);

  const openPopup = () => {
    setIsFormOpen(true);
  };

  const closePopup = () => {
    setIsFormOpen(false);
  };

  const submitEmployeeForm = (event) => {
    event.preventDefault();
    // Handle form submission or API integration here
    // You can use form data from event.target
  };

  return (
    <div className="DashboardContainer">
      <div className="Data">
        <div className="Admin">
          <b>Tasks</b>
        </div>
        <div className="search">
        <span className="plus-icon search" onClick={openPopup} title="Create your task">

            <i className="fa fa-plus"></i>
          </span>
        </div>
      </div>

      <div className="tableContent">
        <div className="table-responsive">
        <Table striped bordered hover>
            <thead>
              <tr>
                <th>S No.</th>
                <th>Company Name</th>
                <th>Department Name</th>
                <th>Designation Name</th>
                <th>Employee Name</th>
                {/* <th>Date Of Birth</th> */}
                <th>Email</th>
                <th>Task Allocated</th>
                
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Employees.map((Employee, index) => (
                <tr key={Employee.id}>
                  <td>{index + 1}</td>
                  <td>{Employee.companyname}</td>
                  <td>{Employee.departmentname}</td>
                  <td>{Employee.designationname}</td>
                  <td>{Employee.employeename}</td>
                  {/* <td>{Employee.dateofbirth}</td> */}
                  <td>{Employee.email}</td>
                  <td>{Employee.taskallocated}</td>
               

                  {/* <td>{Employee.pan}</td> */}
                  <td>
                  <a href={`view/${Employee.id}`} className="action-link">
                      <i className="fas fa-eye" title="View"></i> 
                    </a>
                    <a href={`edit/${Employee.id}`} className="action-link">
                      <i className="fas fa-edit"title="Edit"></i> 
                    </a>
                    <a href={`delete/${Employee.id}`} className="action-link">
                      <i className="fas fa-trash" title="Delete"></i> 
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
            </Table >
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
        <form id="EmployeeForm" onSubmit={submitEmployeeForm}>
          <div className="popup-container">
            <div className="popup">
              <div className="m-3" style={{ maxWidth: '800px' }}>
                <div className="px-5">
                  <button className="btn btn-link close-button" onClick={closePopup}>
                    <i className="fa fa-times" style={{ color: 'red' }}></i>
                  </button>

                  <h2 className="text-uppercase text-center mb-5">Create task</h2>
                  <MDBRow className='mb-4'>
                  <MDBCol>
        

        <SelectField
                    label="Company Name"
                    id="companyName"
                    name="companyName"
                    value={selectedCompany}
                    options={companyNames}
                    onChange={setSelectedCompany}
                    isSearchable
                  />
        
      </MDBCol>
      <MDBCol>
      {/* <div className="mb-2"> */}
       
        <SelectField
                    label="Department Name"
                    id="departmentName"
                    name="departmentName"
                    value={selectedDepartment}
                    options={departmentNames}
                    onChange={setSelectedDepartment}
                    isSearchable
                  />
        </MDBCol>
        </MDBRow>
      <div className="mb-2">
      <SelectField
                    label="Designation Name"
                    id="designationNames"
                    name="designationNames"
                    value={selectedDesignation}
                    options={designationNames}
                    onChange={setDesignationNames}
                    isSearchable
                  />
      </div>
                  {/* <div className="mb-2"> */}
                  <MDBRow>
                  <MDBCol>
                    {/* <label htmlFor="EmployeeName">Employee Name</label>
                    <input type="text" id="EmployeeName" name="EmployeeName" className="form-control form-control-lg" /> */}
                     <div className="mb-2">
        
        <SelectField
                    label="Employee Name"
                    id="employeeNames"
                    name="employeeNames"
                    value={selectedEmployee}
                    options={employeeNames}
                    onChange={setEmployeeNames}
                    isSearchable
                  />
      </div>
                    </MDBCol>
                    <MDBCol>
                    <SelectField
                    label="Employee Mail"
                    id="employeemail"
                    name="employeeMail"
                    value={selectedEmail}
                    options={employeeEmail}
                    onChange={setEmployeeEmail}
                    isSearchable
                  />
          </MDBCol>
          </MDBRow>

      
        {/* Input for Email */}

        {/* <div className="mb-2">
          <label htmlFor="Email">Email</label>
          <input type="text" id="Email" name="Email" className="form-control form-control-lg" />
        </div> */}
      
        {/* Input for Adhaar No. */}
        <MDBRow>
        
          <label htmlFor="TaskDes">Task Description</label>
          <input type="text" id="TaskDes" name="TaskDes" className="form-control form-control-lg"  />
        
       
     
        
        </MDBRow>
                  
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

export default CreateTask;
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
