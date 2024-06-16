// dashboardController.js
const Form = require('../Models/Form.Model');
const User = require('../Models/User.Model');
const Session = require('../Models/Session.Model');

// Function to get total views (count of all users)
async function getTotalViews() {
    return User.countDocuments();
}

// Function to get unique visitors (count of users with role 'user')
async function getUniqueVisitors() {
    return User.countDocuments({ role: 'user' });
}

// Function to get average session time
async function getAverageSessionTime() {
    const sessions = await Session.find({});
    const totalSessionTime = sessions.reduce((total, session) => total + session.duration, 0);
    const avgSessionTime = sessions.length ? totalSessionTime / sessions.length : 0;
    return avgSessionTime;
}

const getDashboardStats = async (req, res) => {
    try {
        const totalViews = await getTotalViews();
        const totalSubmissions = await Form.countDocuments();
        const uniqueVisitors = await getUniqueVisitors();
        const avgSessionTime = await getAverageSessionTime();

        const forms = await Form.aggregate([
            {
                $group: {
                    _id: "$formTitle",
                    responseCount: { $sum: 1 },
                    todayResponses: {
                        $sum: {
                            $cond: [
                                { $gte: ["$submittedAt", new Date(new Date().setHours(0, 0, 0, 0))] },
                                1,
                                0
                            ]
                        }
                    },
                    updatedAt: { $max: "$submittedAt" }
                }
            }
        ]);

        res.status(200).json({
            totalViews,
            totalSubmissions,
            uniqueVisitors,
            avgSessionTime,
            forms
        });
    } catch (error) {
        console.error('Error fetching dashboard stats:', error);
        res.status(500).json({ message: 'Failed to fetch dashboard stats' });
    }
};

module.exports = {
    getDashboardStats
};
