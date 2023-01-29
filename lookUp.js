db.authors.aggregate([

    // Join with authorInfo table
    {
        $lookup:{
            from: "authorInfo",       // connecting authorInfo collection
            localField: "authorId",   // name of field in the authors collection
            foreignField: "authorId", // name of field in the authorInfo collection
            as: "authorInfoAlias"     // any alias
        }
    },
    {   $unwind:"$authorInfoAlias" }, // use the alias here

    // Join with userRole collection
    {
        $lookup:{
            from: "userRole", 
            localField: "authorId", 
            foreignField: "userId",
            as: "authorRoleAlias"
        }
    },
    {   $unwind:"$authorRoleAlias" },
    {   
        $project: {                                          // Just projecting our data.
            _id : 1,
            address : 1,
            description : "$authorInfoAlias.description",
            role : "$authorRoleAlias.role",
        } 
    }])