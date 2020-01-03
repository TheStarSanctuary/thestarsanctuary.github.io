var streamSearch = new URLSearchParams(window.location.search);
var streamer = streamSearch.get('s');

function createColumns(streamers, columns) {
    for(var i = 0; i < streamers; i++) {
        $('#streamContainer').append(`<div id="stream${i}" class="col-md-${columns}"></div>`);
    }
}

if(streamer.indexOf('+') !== -1) {
    var streamers = streamer.split('+');
    var valid = [];

    for(var i = 0; i < streamers.length; i++) {
        if(streamerList.indexOf(streamers[i]) !== -1) {
            valid.push(streamers[i]);
        }
    }

    var colCount = parseInt(12 / valid.length);
    
    createColumns(valid.length, colCount);
    
    for(var i = 0; i < valid.length; i++) {
        new Twitch.Embed(`stream${i}`, {
            channel: valid[i],
            allowfullscreen: true,
            layout: 'video-with-chat',
            width: '100%',
            height: '100%',
            theme: 'dark',
            autoplay: true
        })
    }
} else {
    $('#streamContainer').append('<div id="soloStream" class="col-md-12"></div>');
    if(streamerList.indexOf(streamer) !== -1) {
        new Twitch.Embed('soloStream', {
            channel: streamer,
            allowfullscreen: true,
            layout: 'video-with-chat',
            width: '100%',
            height: '100%',
            theme: 'dark',
            autoplay: true
        })
    } else {
        console.log(streamer);
    }
}