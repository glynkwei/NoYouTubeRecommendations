const sheet = window.document.styleSheets[0];
let is_visible = true;
chrome.runtime.onMessage.addListener(function(request, sender) 
{  
    is_visible = (request.data.url !== "https://www.youtube.com/");
});
window.addEventListener("yt-navigate-finish", function(event) {
    if (is_visible)
    {
        sheet.insertRule('[role = "main"] { display : inherit }', sheet.cssRules.length);
    }
    else
    {
        sheet.insertRule('[role = "main"] { display : none }', sheet.cssRules.length);
    }
});
