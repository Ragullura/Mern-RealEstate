import Listing from '../models/listing.model.js';
import { errorHandler } from '../utils/error.js';

/* --------Create Listing Properties----------------- */
export const createListing = async (req, res, next) => {
    try {
        const listing = await Listing.create(req.body);
        return res.status(201).json(listing);

    } catch (error) {
        next(error);
    }

};

/* ------------------deleteListing----------------------- */

export const deleteListing = async (req, res, next) => {
    const listing = await Listing.findById(req.params.id);

    if(!listing){
        return next(errorHandler(404, "No listing found with that id"));
    }

    if(req.user.id !== listing.userRef){
        return  next(errorHandler(401, "You can only delete your own listings!"))
    }
    try {
        await Listing.findByIdAndDelete(req.params.id);
        res.status(200).json('Listing has been deleted')
    } catch (error) {
        next(error)
    }
};

/* ----------UpdateListing or Edit Listing------------------- */
export const updateListing = async (req, res, next) => {
    const listing =await Listing.findById(req.params.id);

    if(!listing){
        return next(errorHandler(404, 'Listing not found!'));
    }

    if(req.user.id !== listing.userRef){
        return next(errorHandler(401,'Unauthorized You can only update your own listings!'));
    }

    try {
        const updatedListing = await Listing.findByIdAndUpdate(
            req.params.id, 
            req.body ,
            {new:true}
        );
        res.status(200).json(updatedListing);
    } catch (error) {
        next(error)
    }
};


/* -------Get listing ------------- */

export const getListing = async (req,res,next) =>{
    try {
        const listing = await Listing.findById(req.params.id);
        if(!listing){
            return next(errorHandler(404,'Listing not found!'))
        }
        res.status(200).json(listing);
    } catch (error) {
        next(error)
    }
}
