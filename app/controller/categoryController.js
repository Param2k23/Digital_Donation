const categoryModel = require("../model/categoryModel")

module.exports.addCategory = function(req,res)
{
    let category = new categoryModel(
        {
            categoryName : req.body.categoryName
        }
    )

    category.save().then((data) => {
        res.json({"msg":"category added","data":data,"rcode":200})
    }).catch((err=>{
        res.json({"msg":"SMW","data":err,"rcode":-9})
    }))
}

module.exports.getAllCategory = function(req,res){
    categoryModel.find().then((data)=>{
        res.json({"msg":"categories retrived ..","data":data,"rcode":200})
    }).catch((err)=>{
        res.json({"msg":"SMW","data":err,"rcode":-9})
    })
}

module.exports.deleteCategoryById = function (req, res) {
    let categoryId = req.params.categoryId

    categoryModel.findByIdAndDelete({ _id: categoryId}).then((data) => {
        res.json({ "msg": "Category Deleted", "data": data, "rcode": 200 })
    }).catch((err) => {
        res.json({ "msg": "SMW", "rcode": -9, "data": err })
    })
}


module.exports.updateCategory = function(req,res){
    let categoryId = req.body.categoryId 
    let categoryName = req.body.categoryName

    categoryModel.updateOne({_id:categoryId},{"categoryName":categoryName}).then((data)=>{
        res.json({"msg":"product updated","data":data,"rcode":200})
    }).catch((err)=>{
        res.json({"msg":"product updation fails","data":data,"rcode":200})      
    })
}