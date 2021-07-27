//streams: start using data before it has finished loading
const fs = require('fs');
//To read huge file use createReadStream method
const readStream = fs.createReadStream('./files/blogFive.txt', {encoding: 'utf-8'});
//To write a huge file that came from a server or harddisk
const writeStream = fs.createWriteStream('./files/blogSix.txt'); 

// readStream.on('data',(chunksOfFiles)=>{
//     console.log("\n Reading Buffered Files!!!")
//     console.log(chunksOfFiles);
//     //To write this file to blogsix
//     writeStream.write("\n Chunk of Files \n")
//     writeStream.write(chunksOfFiles);
    
// });
//piping - short version to stream huge file
readStream.pipe(writeStream);