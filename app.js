
//Generate Random ID Of Delete Button and Media

/*function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

console.log(makeid());

//Add Random ID To Each Media & Delete Button
$("button .delete").
$("article .media").
*/

$(".tweet-button").click(function() {
	var value = $(".textarea").val();
	var str1 = "<article class='media' id='first'><figure class='media-left'><p class='image is-64x64'><img src='images/myselfie.jpeg' style='border-radius: 50%'></p></figure><div class='media-content'><div class='content'><p><strong>Hafidz Permana</strong><small>@hafidzzpermana</small> <small>31m</small><br>";
	var str2 = "</p></div><nav class='level is-mobile'><div class='level-left'><a class='level-item'><span class='icon is-small'><i class='fa fa-reply'></i></span></a><a class='level-item'><span class='icon is-small'><i class='fa fa-retweet'></i></span></a><a class='level-item'><span class='icon is-small'><i class='fa fa-heart'></i></span></a></div</nav></div><div class='media-right'><button class='delete btn-delete-first'></button></div></article>"
	$("")
	$(".empty").append(str1 + value + str2);
});

$(".btn-delete-first").click(function() {
	$("article").remove("#first");
});


//value = $(".textarea").val();






