//Core module to read, write, create and delete
const fs = require('fs');
//console.log(fs);
//1) reading Files
fs.readFile('./files/blogOne.txt',(err,data) =>{
  if(err){
      console.log(err);
  }  
 // console.log(data);
  console.log(`01-01) The text in blogOne is: ${data.toString()}`);
});
//2) Writing Files
     //creating and writing
fs.writeFile('./files/blogTwo.txt','Hello Blog 2 File!!!',(err,data) => {
    if(err){
        console.log(err);
    }
        console.log(`02-01) Creating and Writing Files`);
    });
    //overwriting blogOne
fs.writeFile('./files/blogThree.txt','Hello Blog 3 File!!!',(err,data) => {
    if(err){
        console.log(err);
    }
        console.log(`02-02) Writing Files in the existing File. It will be overwritten`);
    });
//Creating Directories
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets',(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("03-01) Folder is Created!!!");
        }

    })
}else{
    fs.rmdir('./assets',(err)=>{
        if(err){
            console.log(err)
        }
        console.log("03-02) Folder is Deleted!!!")

    });
}


//Deleting Directories
if(!fs.existsSync('./files/deletedTxt.txt')){
    console.log("04-01) File Doesn't Exist, create deletedTxt to practice")
}
else
{
fs.unlink('./files/deletedTxt.txt',(err)=>{
if(err){
    console.log(err)
}
console.log("04-02) File is Deleted");
});

}


