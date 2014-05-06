//Match CSS Media Queries
var mql = window.matchMedia("(max-width:768px)");

//Add a listener to the MediaQueryList
mql.addListener(function(e){
        if(e.matches){
                console.log('enter mobile');
        }
});


//https://github.com/ten1seven/jRespond





//On Resize
var resizeMethod = function(){
    if (document.body.clientWidth < 768) {
        console.log('mobile');
    }
};

//Attach event for resizing
window.addEventListener("resize", resizeMethod, true);