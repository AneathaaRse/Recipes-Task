import mongoose from "mongoose";

const recipesSchema = mongoose.Schema({
    name:String,
    procedure:String,
    ingredients:[],
    duration:String,
})


const recipes = mongoose.model("recipes" , recipesSchema)


export default recipes;