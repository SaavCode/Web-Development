// fadeout effect
$("button").on("click", function(){
 $('div').fadeout(1000, function(){
 	$(this).remove();
 });
});

// fade in ***set display  to none in html

$("button").on("click", function(){
 $('div').fadein(1000, function(){
 	$(this).remove();
 });
});

// decides if needed to fadein or out
$("button").on("click", function(){
 $('div').fadeToggle(1000, function(){
 	$(this).remove();
 });
});

// slide down effect, or slideUp
$("button").on("click", function(){
 $('div').slideDown()
});

// decides what to do
$("button").on("click", function(){
 $('div').slideToggle(1000, function(){
 	console.log("slide is done");
 });
});
