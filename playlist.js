<script src="https://code.jquery.com/jquery-1.10.2.js"></script>
<video width="320" height="240" autoplay id="player">
	<source id="video_stream" src="" type="video/mp4">
</video>
<script>
$(document).ready(function() {
    var video = document.getElementById('player');
    var vids = ["https://www.quirksmode.org/html5/videos/big_buck_bunny.mp4",
        "http://jell.yfish.us/media/jellyfish-3-mbps-hd-h264.mkv"
    ];
    var current_vid = 0;
    video.volume = 0.2;
    video.setAttribute("src", vids['0']);
    $('video').on('ended', function() {
        current_vid = +current_vid + 1;
        if (typeof vids[current_vid] == 'undefined') {
            current_vid = 0;
        }
        video.setAttribute("src", vids[current_vid]);
    });
});
</script>
