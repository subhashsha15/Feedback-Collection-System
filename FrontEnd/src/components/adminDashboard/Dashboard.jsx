import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDashboardStats } from '../../ReduxStore/dashboardSlice';
import './Dashboard.css';

const Dashboard = () => {
    const dispatch = useDispatch();
    const {
        totalViews,
        totalSubmissions,
        uniqueVisitors,
        avgSessionTime,
        forms,
        status,
        error
    } = useSelector((state) => state.dashboard);
    console.log("dashboard forms", forms);
    useEffect(() => {
        dispatch(fetchDashboardStats());
    }, [dispatch]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}m ${secs}s`;
    };

    const formatUpdatedAt = (dateString) => {
        const date = new Date(dateString);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        return `${hours}h ${minutes}m`;
    };

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div style={{textTransform:"capitalize"}}>Error: {error}</div>;
    }

    return (
        <div className="dashboard-container">
            <div className="dashboard-content">
                <div className="dashboard-content-top">
                    <div className="total-views">
                        <span>{totalViews}</span>
                        <span>Total Views</span>
                    </div>
                    <div className="total-submission">
                        <span>{totalSubmissions}</span>
                        <span>Total Submissions</span>
                    </div>
                    <div className="total-visitors">
                        <span>{uniqueVisitors}</span>
                        <span>Unique Visitors</span>
                    </div>
                    <div className="total-session-time">
                        <span>{formatTime(avgSessionTime)}</span>
                        <span>Avg. Session Time</span>
                    </div>
                </div>
                <div className="dashboard-content-bottom">
                    {forms.map((item) => (
                        <div className="dashboard-card" key={item._id}>
                            <div className="dashboard-card-img">
                                <img src="/admin-card-img.svg" alt="" />
                            </div>
                            <div className="dashboard-card-bottom">
                                <div className="dashboard-card-title">
                                    {item._id}
                                </div>
                                <div className="dashboard-card-info">
                                    <img src="/Ellipse.svg" alt="" />
                                    <span>{item.responseCount} responses</span>
                                    <span>{item.todayResponses} today</span>
                                </div>
                                <div className="dashboard-card-footer">
                                    you edited {formatUpdatedAt(item.updatedAt)} ago
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
