import internationalTour from '../models/internationalTour.js';


//create new internationalTour
export const createinternationalTour = async(req, res) =>{
    const newinternationalTour = new internationalTour(req.body)
    try{
        const savedinternationalTour = await newinternationalTour.save();
        res.status(200).json({
            success: true,
            message: "Successfully Created",
            data: savedinternationalTour,
        });
    }catch(err){
        res.status(500).json({
            success: false,
            message: "Failed to create. Try again"
        });
    }
};


//update internationalTour
export const updateinternationalTour = async (req, res) => {
  const id = req.params.id; 
  try {
    const updatedinternationalTour = await internationalTour.findByIdAndUpdate(id,
      { $set:req.body },
      { new:true }
    );

    res.status(200).json({
      success: true,
      message: "Successfully Updated",
      data: updatedinternationalTour,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to update",
    });
  }
}

//delete internationalTour
export const deleteinternationalTour = async(req,res)=>{
  const id = req.params.id; 
  try {
    await internationalTour.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Successfully Deleted",
      
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to Delete",
    });
  }
}

//getSingle internationalTour
export const getSingleinternationalTour = async(req,res)=>{
  const id = req.params.id; 
  try {
    const internationalTours = await internationalTour.findById(id);

    res.status(200).json({
      success: true,
      message: "Successfully Found",
      data:internationalTours,
    });
  } catch (err) {
    
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
}


//getAll internationalTour
export const getAllinternationalTour = async(req,res)=>{
    //for pagination
    const page = parseInt(req.query.page);
    

    try{
      const internationalTours = await internationalTour.find({});
      res.status(200).json({
        success: true,
        count:internationalTours.length,
        message: "Successfull",
        data:internationalTours
      });
    }
    catch(err){
      res.status(404).json({
        success: false,
        message: "not found",
      }); 
    }
}


//get internationalTour by search
export const getinternationalTourBySearch = async (req, res) => {
  const city = new RegExp(req.query.city, 'i');

  try {
    const internationalTours = await internationalTour.find({
      city  
    })

    res.status(200).json({
      success: true,
      message: "Successfully retrieved internationalTours",
      data: internationalTours
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};


//get featured internationalTour
export const getFeaturedinternationalTour = async (req, res) => {
  try {
    const internationalTours = await internationalTour.find({ featured: true });

    res.status(200).json({
      success: true,
      message: "Successfully retrieved featured internationalTours",
      data: internationalTours
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};


//get internationalTour counts
export const getinternationalTourCount = async (req, res) => {
  try {
    const internationalTourCount = await internationalTour.estimatedDocumentCount();

    res.status(200).json({
      success: true,
      
      data: internationalTourCount
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};