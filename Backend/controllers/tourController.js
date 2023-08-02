import Tour from '../models/Tour.js';


//create new tour
export const createTour = async(req, res) =>{
    const newTour = new Tour(req.body)
    try{
        const savedTour = await newTour.save();
        res.status(200).json({
            success: true,
            message: "Successfully Created",
            data: savedTour,
        });
    }catch(err){
        res.status(500).json({
            success: false,
            message: "Failed to create. Try again"
        });
    }
};


//update tour
export const updateTour = async (req, res) => {
  const id = req.params.id; 
  try {
    const updatedTour = await Tour.findByIdAndUpdate(id,
      { $set:req.body },
      { new:true }
    );

    res.status(200).json({
      success: true,
      message: "Successfully Updated",
      data: updatedTour,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to update",
    });
  }
}

//delete tour
export const deleteTour = async(req,res)=>{
  const id = req.params.id; 
  try {
    await Tour.findByIdAndDelete(id);

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

//getSingle tour
export const getSingleTour = async(req,res)=>{
  const id = req.params.id; 
  try {
    const tour = await Tour.findById(id);

    res.status(200).json({
      success: true,
      message: "Successfully Found",
      data:tour
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
}


//getAll tour
export const getAllTour = async(req,res)=>{
    //for pagination
    const page = parseInt(req.query.page);
    

    try{
      const tours = await Tour.find({});
      res.status(200).json({
        success: true,
        count:tours.length,
        message: "Successfull",
        data:tours
      });
    }
    catch(err){
      res.status(404).json({
        success: false,
        message: "not found",
      }); 
    }
}


//get tour by search
export const getTourBySearch = async (req, res) => {
  const city = new RegExp(req.query.city, 'i');

  try {
    const tours = await Tour.find({ city });

    res.status(200).json({
      success: true,
      message: "Successfully retrieved tours",
      data: tours
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};


//get featured tour
export const getFeaturedTour = async (req, res) => {
  try {
    const tours = await Tour.find({ featured: true });

    res.status(200).json({
      success: true,
      message: "Successfully retrieved featured tours",
      data: tours
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};


// Assuming you have already imported the necessary dependencies and the Tour model

export const getAllToursExceptFeatured = async (req, res) => {
  try {
    const tours = await Tour.find({ featured: false });

    res.status(200).json({
      success: true,
      message: "Successfully retrieved all tours except featured tours",
      data: tours
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};


// get backpack tour
export const getBagpackTour = async (req, res) => {
  try {
    const backpackTours = await Tour.find({ isBackpackTour: true });

    res.status(200).json({
      success: true,
      message: "Successfully retrieved backpack tours",
      data: backpackTours
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

//get tour counts
export const getTourCount = async (req, res) => {
  try {
    const tourCount = await Tour.estimatedDocumentCount();

    res.status(200).json({
      success: true,
      
      data: tourCount
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};


//get tour count except featured
// Get tour counts including non-featured tours
export const getTourCounts = async (req, res) => {
  try {
   

    // Query non-featured tours
    const nonFeaturedTours = await Tour.find({ featured: false }).countDocuments();

    res.status(200).json({
      success: true,
      data:nonFeaturedTours
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
