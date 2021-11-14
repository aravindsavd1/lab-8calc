var http = require('http');
var calcmodule = require('./calmodule');
var querystring=require('querystring');
var qs;
var result;
var num1;
var num2;
 http.createServer(function(req, res) {  
        var data1= '';
        
    req.on('data', function(chunk) {   
                    data1 += chunk;  
                    console.log("Data in String format: "+data1);
                    });
    req.on('end', function() {
                console.log("Data: "+data1);
                
                qs=querystring.parse(data1);
                console.log(qs);
               
                var a= qs["num1"];
                var b= qs["num2"];
                var operand=qs["operand"];
                
                 num1=parseInt(a); 
                 num2=parseInt(b); 
                if(operand=="+")
                {
                   
                   result=calcmodule.add(num1,num2);
                   
                }
                else if(operand=="-")
                {
                    result=calcmodule.subtract(num1,num2);
                   
                }
                else if(operand=="*")
                {
                    result=calcmodule.multiply(num1,num2);
                   
                }
                else if(operand=="/")
                {
                    result=calcmodule.divide(num1,num2);
                }
                else if(operand=="%")
                {
                    result=calcmodule.modulus(num1,num2);
                }
                else if(operand=="^")
                {
                    result=calcmodule.power(num1,num2);
                }
                res.write("<html><body><style>button{width:140px;margin:5%;height:60px;background-color:white;color:black} body{background-color: aqua;} h1{font-size:2rem;} .inline{margin-left:17%; display: flex;flex-flow: row wrap;align-items: center;}</style><center><br><br><br><div class='inline'><button>"+num1+"</button><h1>"+operand+"</h1><button>"+num2+"</button><h1>=</h1><button>"+result+"</button></div><h1>The Answer is  :   "+result+"</h1><center></body><html>");
                res.end(); 
                console.log(num1+" "+operand+" "+num2+" = "+result);
                console.log("The Answer is "+result);
                });
          
    }).listen(9000);

console.log("Server started on 9000");