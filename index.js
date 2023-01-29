const { log } = require("console");
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://localhost/playground", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("The databaes is connected......");
  });


  const courseSchema= new mongoose.Schema({
    name:String,
    author:String
  })
  const Course=mongoose.model('Course', courseSchema)

 const  createCourse=async()=>{
  const course= new Course({
    name:"my book",
    author:"Emmaneule"
  })
  const results= await course.save()
  }
const getCourses=async()=>{
const results=await Course.find({}, {name:1, _id:0})
console.log(results);
}
getCourses()