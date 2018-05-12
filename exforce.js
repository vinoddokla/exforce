var getTab = function(tab){
    var url = tab.url;
    console.log(url);
    var lightning = "lightning";
    var classic   = "my";

    if(url.indexOf(lightning) != -1){
        url = "https://resourceful-raccoon-200210-dev-ed.lightning.force.com/ltng/switcher?destination=classic";
        window.open(url);
    }else if(url.indexOf(classic) != -1){
        url = "https://resourceful-raccoon-200210-dev-ed.lightning.force.com/one/one.app?source=alohaHeader#/home";
        window.open(url);
    }

};

chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    getTab(tabs[0]);
});
