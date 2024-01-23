exports.getProductLanding= (req, res, next)=>{
    res.json({message:"Get Product"})
}

exports.getProducts = (req, res, next)=>{
    const {search, promotion, brand, category} = req.query
    res.json({message:"Get Filter Products"})
}

exports.getProductByID = (req, res, next) => {
    res.json({message:"Get Product BY ID"})
}