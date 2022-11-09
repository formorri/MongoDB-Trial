const mongoose= require("mongoose");
const User= require("./User");
 

mongoose.connect("mongodb://localhost/testdb");

 run()
async function run(){
  try{
    // const user =await User.findById("6310743cc5bc8173a76c3407")
    const user =await User.where("age").gt("12").where("name").equals("Kyle").limit(1).populate("bestFriend")
    user[0].bestFriend= "6310743cc5bc8173a76c3407"
    await user[0].save()
    // const user= await User.create({
    //   name: "Kyle", 
    //   age: 26,
    //   email: "ggg@gmail", 
    //   hobbies: ["Weighlifting", "Bowling"],
    //   address: {
    //     street: "Main Str"
    //   }
    // })
    console.log(user)
  }catch(e){
    console.log(e.message)
  }

  // const user= new User ({
  //   name: "Kyel",
  //   age: 26
  // })
  // await user.save()
}

