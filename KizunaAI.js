function sound()
{
	// 対象となるID名
	var id = 'sound-file' ;

	// 初回以外だったら音声ファイルを巻き戻す
	if( typeof( document.getElementById( id ).currentTime ) != 'undefined' )
	{
		document.getElementById( id ).currentTime = 0;
	}

	// [ID:sound-file]の音声ファイルを再生[play()]する
	document.getElementById( id ).play() ;
}

/ダブルタップの挙動制御/ 
(function(win, doc) {

    "use strict";

    var tapFlag = false,
        timer;

    doc.body.addEventListener("touchstart", function(evt) {
        if (tapFlag) {
            evt.preventDefault();
        }
    }, true);

    doc.body.addEventListener("touchend", function(evt) {
        tapFlag = true;
        clearTimeout(timer);
        timer = setTimeout(function() {
            tapFlag = false;
        }, 200);
    }, true);

})(window, document);
