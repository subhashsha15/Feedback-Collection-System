import React, { useState,useEffect } from 'react'
import './Admin.css'
import Dashboard from '../../components/adminDashboard/Dashboard';
import Analysis from '../../components/analysis/Analysis';
import FeedbackResponse from '../../components/feedbackResponse/FeedbackResponse'
import { useDispatch, useSelector } from 'react-redux';
import { fetchForms } from '../../ReduxStore/formSlice';
const Admin = () => {
  const [selectedItem, setSelectedItem] = useState("dashboard");
  const dispatch = useDispatch();
  const forms = useSelector((state) => state.forms.forms.data);
  console.log("admin", forms);
  const status = useSelector((state) => state.forms.status);
  const error = useSelector((state) => state.forms.error);

  useEffect(() => {
    dispatch(fetchForms());
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  return (
    <>
      <div className="admin-container">
        <div className="admin-content">
          <div className="admin-content-sidebar">
            <div className="admin-sidebar-list">
              <div
                className={`admin-sidebar-listItem ${selectedItem === 'dashboard' ? 'active' : ''}`}
                onClick={() => handleItemClick('dashboard')}
              >
                <img src={`/${selectedItem === 'dashboard' ? 'dashboard_white_icon.svg' : 'dashboard_Green_icon.svg'}`} alt="" />
                Dashboard
              </div>

              <div
                className={`admin-sidebar-listItem ${selectedItem === 'feedback' ? 'active' : ''}`}
                onClick={() => handleItemClick('feedback')}
              >
                <img src={`/${selectedItem === 'feedback' ? 'feedback_white_icon.svg' : 'feedback_green_icon.svg'}`} alt="" />
                Feedback Response
              </div>

              <div
                className={`admin-sidebar-listItem ${selectedItem === 'analysis' ? 'active' : ''}`}
                onClick={() => handleItemClick('analysis')}
              >
                <img src={`/${selectedItem === 'analysis' ? 'analysis_white_icon.svg' : 'analysis_green_icon.svg'}`} alt="" />
                Analysis
              </div>

              <div className="admin-sidebar-listItem admin-logout">
                <img src='/logout_icon.svg' alt="" />
                Log Out
              </div>
            </div>
          </div>
          <div className="vertical-line"></div>
          <div className="admin-content-main">
            {selectedItem === "dashboard" ? <Dashboard /> : selectedItem === "feedback" ? <FeedbackResponse forms={forms} /> : <Analysis />}
          </div>
        </div>
      </div>
    </>
  )
}

export default Admin;