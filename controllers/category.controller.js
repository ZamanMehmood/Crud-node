const Category = require("../models/category");

// get all the Categories
exports.getCategories = async (req, res) => {
  try {
    const category = await Category.find();
    res.json(category);
  } catch (err) {
    res.send("Category Error " + err);
  }
};


//  get categori by ID 
exports.getCategoryById = async (req, res) => {
    try {
      const category = await Category.findById(req.params.id);
      if(!category){
        return res.status(404).send('The category with the given Id was not found');
      }
      res.json(category);
    } catch (err) {
      res.send("Error " + err);
    }
  }

// Create new Category
exports.categories = async (req, res, next) => {
  try {
    console.log("REq.body", req.body);
    //create new user in db
   let category = new Category({
      Name: req.body.Name,
      type: req.body.type
    });

    //save the user in db
    category = await category.save();
    
    return res.json({
      success: true,
      data: category,
      msg: "category created successfully",
    });
  } catch (err) {
    console.log("Error handling =>", err);
    next();
  }
};


//  update category by their Id
exports.updateCategories = async (req, res) => {
    try {
      const category = await Category.findById(req.params.id);
      category.Name = req.body.Name;
      category.type = req.body.type;
      const updateCategory = await category.save();
      res.json(updateCategory);
    } catch (err) {
      res.send("Error handling ===>", err);
    }
  };


  exports.deleteCategories = async (req, res) => {
    try {
      const category = await Category.findByIdAndDelete(req.params.id);
      // const deleteCategory = await category.save();
      res.json(category); 
    } catch (err) {
      res.send("Error handling ===>", err);
    }
  };
  
//name :string 
 