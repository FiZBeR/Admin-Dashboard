import User from "../models/user.model.js";
import OverallStat from "../models/overallStat.model.js"
import Transaction from "../models/transaction.model.js";

export const getUser = async (req, res) => {
    try {
        
        const { id } = req.params;
        const user = await User.findById(id);
        return res.status(200).json(user);

    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
}

export const getDashboardStats = async (req, res) => {
    try {
        
        const currentMonth = "November";
        const currentYear = 2021;
        const currentDay = "2021-11-15";

        const transactions = await Transaction.find().limit(50).sort({ createdOn: -1});

        const overallStat = await OverallStat.find({ year: currentYear });

        const {
            totalCustomers,
            yearlyTotalSoldUnits,
            yearlySalestotal,
            monthlyData,
            salesBycategory
        } = overallStat[0];

        const thisMonthStats = overallStat[0].monthlyData.find(({ month }) => {
            return month === currentMonth;
        });

        const todayStats = overallStat[0].dailyData.find(({ date }) => {
            return date === currentDay;
        });

        return res.status(200).json({
            totalCustomers,
            yearlyTotalSoldUnits,
            yearlySalestotal,
            monthlyData,
            salesBycategory,
            thisMonthStats,
            todayStats,
            transactions
        });
        

    } catch (error) {
        return res.status(400).json({ message: error.message})
    }
}