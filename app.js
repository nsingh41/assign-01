const fs=require('fs')

let build='./build'

let posts='./posts'



fs.readdir(posts,(err,files)=>{
    if(err) console.log('error occured')
    
    let body=`<html>
    <body>`
    
    fs.writeFile("build/index.html",body.trim(),'utf8',(err)=>{
        if (err) console.log(err);
        
        
    })
    
        
        
        
    files.forEach((file)=>{
        


        fs.readFile(`${posts}/${file}`,'utf8',(err,data)=>{
            
            if(err) console.log(err)
          
            
             let result=file.split(".")
                    let data1=`<html>
                    <body>
                    <h1>${data}</h1>
                    <body>
                     </html>`


            fs.writeFile("build/"+`${result[0]}`+".html",data1.trim(),'utf8',(err)=>{
                
                if(err) console.log(err)
                console.log("file "+ result[0]+".html created");
                
            })
            
            let file1=`
                    <a href='${result[0]}.html'>${result[0]}.html</a><br>`
                   
                     
            fs.appendFileSync("build/index.html",file1,'utf8',(err)=>{
                
                
                
                if(err) console.log(err)
                
                
                
            
            let body2=`</Body>
    </html>`
    
    fs.appendFileSync("build/index.html",body2.trim(),'utf8',(err)=>{
        if (err) console.log(err);})
    
            
        })
        
  
        
    })
    })
})