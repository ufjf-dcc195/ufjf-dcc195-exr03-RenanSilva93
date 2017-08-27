var exec = require("child_process").exec;
var qs = require("querystring");

function intervalo(req, res) {

  if(req.method == "GET"){
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("Intervalo de numeros inteiros: ");
    res.write("<form method=post>");
    res.write("<input type=text name=numero1>");
    res.write('<br>');
    res.write("<input type=text name=numero2>");
    res.write("<input type=submit />");
    res.write("</form>");
    res.end();
  } else {
    var body = '';
    req.on('data', function(data){
      body+= data;
    });
    req.on('end', function(data) {
      var numero = qs.parse(body);
      var n1 = parseInt(numero.numero1);
      var n2 = parseInt(numero.numero2);
      res.writeHead(200, {"Content-Type": "text/html"});
      if (n1 < n2 ) {
        for(var i = n1; n1 <= n2; i++){
          res.write('<li>'+i);
        }
      } else {
        res.write('Invalido');
      }
      res.end();
    });
  }
}

exports.intervalo = intervalo;
