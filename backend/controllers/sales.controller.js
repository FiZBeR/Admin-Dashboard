import OverallStat from "../models/overallStat.model.js"

export const getSales = async (req, res) => {
    try {
        console.log("Controlador Sales");
        const overallStats = await OverallStat.find();

        return res.status(200).json(overallStats[0]);
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}