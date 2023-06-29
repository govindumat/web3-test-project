const Txhistory = require("../models/Txhistory");
exports.createtx = async(req, res) => {
    try {
        const {address, txdata} = req.body;
        console.log("req.body : ",req.body);
        const txhistory = await Txhistory.create({
            address,
            txdata
        }).then(() => {
            res.status(200).json({
                success: true,
                message: `Transaction save for ${req.body.address} successfully`,
            });
        }).catch((error) => {
            console.error(error);
        });
        
    } catch (error) {
        res.json(error)
    }
}

exports.findtx = async(req, res) => {
    const {address} = req.body;
    const txdata = await User.findOne({address: address});
    res.json(`Transaction details of address ${address} is : `,txdata);
}