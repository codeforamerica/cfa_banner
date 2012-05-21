if(window.onload){
    var other_onloads = window.onloads;
}

window.onload = function(){

    var url = document.getElementById("cfa_banner_script").getAttribute("src");
    var opts = {}

    if(url.split("?").length > 1){
        var pairs = url.split("?")[1].split("&");
        for(p in pairs){
            opts[pairs[p].split("=")[0]] = pairs[p].split("=")[1];
        }
    }

    opts.type = opts.type || "corner";

    var banner_forkme_link = document.createElement('a');
    banner_forkme_link.setAttribute("href", opts.forkUrl);
    banner_forkme_link.setAttribute("onclick", "window.open(this.href); return false;");

    if(opts.type == "corner"){
        var banner_div = document.createElement('div');
        banner_div.setAttribute("id", "cfa_corner_ribbon");
        banner_div.setAttribute("style", "position:absolute; width:150px; "+
                                "height:150px; top:0px; left:0px; "+
                                "background:url(http://localhost:8000/images/cfa_ribbon.png); z-index:100000 ");
        banner_forkme_link.setAttribute("style", banner_div.getAttribute("style"));
        banner_div.appendChild(banner_forkme_link);
        document.getElementsByTagName("body")[0].appendChild(banner_div);
    }else if(opts.type == "corner-right"){
        var banner_div = document.createElement('div');
        banner_div.setAttribute("id", "cfa_corner_ribbon");
        banner_div.setAttribute("style", "position:absolute; width:150px; "+
                                "height:150px; top:0px; right:0px; "+
                                "background:url(http://localhost:8000/images/cfa_ribbon_right.png); z-index:100000 ");
        banner_forkme_link.setAttribute("style", banner_div.getAttribute("style"));
        banner_div.appendChild(banner_forkme_link);
        document.getElementsByTagName("body")[0].appendChild(banner_div);
    }else if(opts.type == "flag"){
        var banner_div = document.createElement('div');
        banner_div.setAttribute("id", "cfa_flag");
        banner_div.setAttribute("style", "position:absolute; width:238px; "+
                                "height:321px; top:-200px; right:200px; "+
                                "background:url(images/cfa_flag.png); z-index:100000;cursor:pointer; ");
        document.getElementsByTagName("body")[0].appendChild(banner_div);

        banner_div.addEventListener("mouseover", function(event){
            banner_div.style.top = "-180px";
        });
        banner_div.addEventListener("mouseout", function(event){
            banner_div.style.top = "-200px";
        });
        banner_div.addEventListener("click", function(event){
            var top = parseInt(banner_div.style.top);
            var direction = "down";
            if(top == 0)
                direction = "up"

            var movebanner = function(){
                var top = parseInt(banner_div.style.top);
                if(direction == "down"){
                    if(top < 0){
                        top +=5;
                        banner_div.style.top = top+"px";
                        setTimeout(movebanner, 10);
                    }
                }else{
                    if(top > -180){
                        top -=5;
                        banner_div.style.top = top+"px";
                        setTimeout(movebanner, 10);
                    }
                }
            };
            setTimeout(movebanner, 10);
        });
    }else if(opts.type == "ribbon"){

    }

    if(other_onloads)other_onloads();
}
