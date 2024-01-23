const notFoundHandler = (req, res, next )=>{

    res
    .state(err.statusCode || 404)
    .json({message: "Not Found"})
};

module.exports = notFoundHandler;