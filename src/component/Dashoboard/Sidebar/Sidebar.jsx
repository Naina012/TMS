import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faList } from '@fortawesome/free-solid-svg-icons';
import { faBuffer } from '@fortawesome/free-brands-svg-icons';
import { useAppContext } from '../../../context';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBIcon,
  MDBCollapse,
  MDBRipple,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';

const Sidebar = ({ setTitle }) => {
  const { state: { admin } } = useAppContext();
  const [showShow, setShowShow] = useState(false);
  const [collapse1, setCollapse1] = useState(true);
  const [collapse2, setCollapse2] = useState(false);

  const toggleShow = () => setShowShow(!showShow);

  return (
    <div>
      <div className="sideBrand">
        <div className="sideBrnIcon">
          <FontAwesomeIcon icon={faBuffer} />
        </div>
        <h2>Unity <span className="navHighlight">Workstation</span></h2>
      </div>
      <nav id="sideNavbar">
        <ul>
          <MDBCollapse show={showShow} tag="nav" className="d-sm-block bg-white sidebar">
            <div className="position-sticky">
              <MDBListGroup flush className="mx-3 mt-4">
                <MDBRipple rippleTag='span'>
                  <MDBListGroupItem tag='a' href='#' action
                    className='border-0 border-bottom rounded rounded'
                    onClick={() => setCollapse1(!collapse1)}
                  >
                    <MDBIcon fas icon="tachometer-alt me-3" />
                    Create Profile
                  </MDBListGroupItem>
                </MDBRipple>

                <MDBCollapse show={collapse1}>
                  <MDBListGroup flush>
                  <NavLink
                    onClick={() => setTitle('Manage Company')}
                    activeClassName="activePage"
                    to="/dashboard/manageCompany"
                  >
                    <li className='manage'>Company</li>
                    </NavLink>
                    <NavLink
                    onClick={() => setTitle('Manage Department')}
                    activeClassName="activePage"
                    to="/dashboard/manageDepartment"
                  >
                    <li className='manage'>Department</li>
                    </NavLink>
                    <NavLink
                    onClick={() => setTitle('Manage Designation')}
                    activeClassName="activePage"
                    to="/dashboard/manageDesignation"
                  >
                    <li className='manage'>Designation</li>
                    </NavLink>
                    <NavLink
                    onClick={() => setTitle('Manage Employee')}
                    activeClassName="activePage"
                    to="/dashboard/manageEmployee"
                  >
                    <li className='manage'>Employee</li>
                    </NavLink>
                    {/* <MDBListGroupItem className="py-1" tag='a' action href='#'>Link</MDBListGroupItem> */}
                  </MDBListGroup>
                </MDBCollapse>
              </MDBListGroup>

              <MDBListGroup flush className="mx-3">
                <MDBRipple rippleTag='span'>
                  <MDBListGroupItem tag='a' href='/dashboard/createTask' action className='border-0 border-bottom rounded'  onClick={() => setTitle('Create Task')}
                    to="/dashboard/createTask">
                    <MDBIcon fas icon="chart-area me-3" />
                    Create Task
                  </MDBListGroupItem>
                </MDBRipple>

                {/* <MDBCollapse show={collapse2}>
                  <MDBListGroup flush>
                    <MDBListGroupItem className="py-1" tag='a' action href='#'>Link</MDBListGroupItem>
                    <MDBListGroupItem className= "py-1" tag='a' action href='#'>Link</MDBListGroupItem>
                    <MDBListGroupItem className="py-1" tag='a' action href='#'>Link</MDBListGroupItem>
                    <MDBListGroupItem className="py-1" tag='a' action href='#'>Link</MDBListGroupItem>
                  </MDBListGroup>
                </MDBCollapse> */}
              </MDBListGroup>
            </div>
          </MDBCollapse>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;







{/* <NavLink
                    onClick={() => setTitle('Manage Designations')}
                    activeClassName="activePage"
                    to="/dashboard/manageDesignations"
                  ></NavLink> */}