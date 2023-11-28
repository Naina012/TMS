import React, { useState } from 'react';
import './Company.css'; // Create a CSS file for your component
import 'bootstrap/dist/css/bootstrap.min.css';

const ManageCompany = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openPopup = () => {
    setIsFormOpen(true);
  };

  const closePopup = () => {
    setIsFormOpen(false);
  };

  const submitCompanyForm = (event) => {
    event.preventDefault();
    // Handle form submission or API integration here
    // You can use form data from event.target
  };

  // Your list of companies
  const companies = [
    { id: 1, name: 'Company A', location: 'Location A', pan: 'PAN123' },
    // Add more company data as needed
  ];

  return (
    <div className="DashboardContainer">
      <div className="Data">
        <div className="Admin">
          <b>Company</b>
        </div>
        <div className="search">
        <span className="plus-icon search" title="Add your company">

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
                <th>Company</th>
                <th>Location</th>
                <th>PAN No.</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {companies.map((company, index) => (
                <tr key={company.id}>
                  <td>{index + 1}</td>
                  <td>{company.name}</td>
                  <td>{company.location}</td>
                  <td>{company.pan}</td>
                  <td>
                    <a href={`view/${company.id}`} className="action-link">
                      <i className="fas fa-eye" title="View"></i> 
                    </a>
                    <a href={`edit/${company.id}`} className="action-link">
                      <i className="fas fa-edit"title="Edit"></i> 
                    </a>
                    <a href={`delete/${company.id}`} className="action-link">
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
        <form id="companyForm" onSubmit={submitCompanyForm}>
          <div className="popup-container">
            <div className="popup">
              <div className="m-3" style={{ maxWidth: '800px' }}>
                <div className="px-5">
                  <button className="btn btn-link close-button" onClick={closePopup}>
                    <i className="fa fa-times" style={{ color: 'red' }}></i>
                  </button>

                  <h2 className="text-uppercase text-center mb-5">Add  Your Company</h2>
                  <div className="mb-2">
                    <label htmlFor="companyName">Company Name</label>
                    <input type="text" id="companyName" name="companyName" className="form-control form-control-lg" />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="location">Location</label>
                    <input type="text" id="location" name="location" className="form-control form-control-lg" />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="company-mail">Company Mail</label>
                    <input type="email" id="company-mail" name="company-mail" className="form-control form-control-lg" />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="pan">Pan</label>
                    <input type="text" id="pan" name="pan" className="form-control form-control-lg" />
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

export default ManageCompany;
