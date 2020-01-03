var streamSearch = new URLSearchParams(window.location.search);
var streamer = streamSearch.get('s');

if(streamerList.indexOf(streamer) !== -1) {
    new Twitch.Embed('streamContainer', {
        channel: streamer,
        allowfullscreen: true,
        layout: 'video-with-chat',
        width: '100%',
        height: 480,
        theme: 'dark',
        autoplay: true
    })
} else {
    window.location.href = window.location.origin;
}