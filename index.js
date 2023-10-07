const path = require("path")

const filePath = "C:/Users/Natarajan/Desktop/Node2/files/samples.txt"
// directory name  (C:/Users/Natarajan/Desktop/Node2/files)
console.log(path.dirname(filePath))
// to get project directory 
console.log(__dirname)
// base name (file name)
console.log(path.basename(filePath))
// current file name 
console.log(__filename)
// exrension ( like => .txt)
console.log(path.extname(filePath))


console.log(path.join(path.dirname(filePath), "/samples.txt"))



const fs = require("fs")
// console.log(fs)

// reading from a file 
fs.readFile(filePath, (err, data)=>{
    if (err) throw new Error("Something went wrong")
    console.log(data.toString())
})

// ( or )
// fs.readFile(filePath, "utf-8",  (err, data)=>{
//     if (err) throw new Error("Something went wrong")
//     console.log(data)
// })

// (or) 
const data = fs.readFileSync(path.join(__dirname, "files"))
console.log(data)