import React from 'react'
import "./Dashboard.css"
import { FormTypes } from "../../FormTypesData.js"

const Dashboard = () => {

    return (
        <>
            <div className="dashboard-container">
                <div className="dashboard-content">
                    <div className="dashboard-content-top">
                        <div className="total-views">
                            <span>587</span>
                            <span>Total Views</span>
                        </div>
                        <div className="total-submission">
                            <span>475</span>
                            <span>Total Submissions</span>
                        </div>
                        <div className="total-visitors">
                            <span>385</span>
                            <span>Unique Visitors</span>
                        </div>
                        <div className="total-session-time">
                            <span>01m 22sec</span>
                            <span>Avg.Session Time</span>
                        </div>
                    </div>
                    <div className="dashboard-content-bottom">
                        {
                            FormTypes.map((item) => {
                                return (
                                    <>
                                        <div className="dashboard-card">
                                            <div className="dashboard-card-img">
                                                <img src="/admin-card-img.svg" alt="" />
                                            </div>
                                            <div className="dashboard-card-bottom">
                                                <div className="dashboard-card-title">
                                                    {item.formTitle}
                                                </div>
                                                <div className="dashboard-card-info">
                                                    <img src="/Ellipse.svg" alt="" />
                                                    <span>7878 responses</span>
                                                    <span>8 today</span>
                                                </div>
                                                <div className="dashboard-card-footer">
                                                    you edited 5 days ago
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;