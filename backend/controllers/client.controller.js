import Product from "../models/product.model.js";
import ProductStat from "../models/productStat.model.js";
import User from "../models/user.model.js";
import Transaction from "../models/transaction.model.js";
import getCountryIso3 from "country-iso-2-to-3";

export const getProducts = async (req, res) => {
    try {
        console.log("Controlador de productos");
        const products = await Product.find();
        const productsWithStats = await Promise.all(
            products.map(async (product) => {
                const stat = await ProductStat.find({
                    productId: product._id,
                })
                return {
                    ...product._doc,
                    stat,
                }
            })
        )

        const stat = await ProductStat.find();
        console.log("Datos: ", productsWithStats);
        return res.status(200).json({productsWithStats, stat});
    } catch (error) {
        return res.status(404).json({ message: error.message});
    }
}

export const getCustomers = async (req, res) => {
    try {
        const customers = await User.find({ role: "user"}).select("-password");
        return res.status(200).json(customers);
    } catch (error) {
        return res.status(404).json({ message: error.message});
    }
}

export const getTransactions = async (req, res) => {
    try {
        const { page = 1, pageSize = 20, sort = null, search = ""} = req.query;

        const generatSort = () => {
            const sortParsed = JSON.parse(sort);
            const sortFormatted = {
                [sortParsed.field]: sortParsed.sort === "asc" ? 1 : -1
            }

            return sortFormatted;
        }

        const sortFormatted = Boolean(sort) ? generatSort() : {};

        const transactions = await Transaction.find({
            $or: [
                {cost: {$regex: new RegExp(search, 'i')}},
                {userId: {$regex: new RegExp(search, "i")}},
            ],
        })
        .sort(sortFormatted)
        .skip(page * pageSize)
        .limit(pageSize);

        const total = await Transaction.countDocuments({
            name: { $regex: search, $options: "i"}
        });

        return res.status(200).json({
            transactions,
            total
        });

    } catch (error) {
        return res.status(404).json({ message: error.message});
    }
}

export const getGeography = async (req, res) => {
    try {
        const users = await User.find();
        const mappedLocations = users.reduce((acc, { country }) => {

            const countryISO3 = getCountryIso3(country);
            if(!acc[countryISO3]){
                acc[countryISO3] = 0;
            }
            acc[countryISO3]++;
            return acc;

        }, {});

        const formattedLocations = Object.entries(mappedLocations).map(([country, count]) => {
            return {id: country, value: count}
        });

        return res.status(200).json(formattedLocations)
    } catch (error) {
        return res.status(404).json({messege: error.message})
    }
}