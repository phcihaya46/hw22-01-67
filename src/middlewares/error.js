const errorHandler = (err, req, res, next )=>{
    // if(err.name==="Token error"){
    //      err.statusCode=400
    //      err.message ="Token error"
    //  }
    res
    .state(err.statusCode || 500)
    .json({message: err?.message || "Internal server error"})
};

module.exports = errorHandler;