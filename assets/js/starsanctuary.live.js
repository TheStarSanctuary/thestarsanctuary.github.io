var streamSearch = new URLSearchParams(window.location.search);
var streamer = streamSearch.get('s');
var sorted = streamerList.map(s => s.toLowerCase());

function createColumns(streamers, columns) {
    for(var i = 0; i < streamers; i++) {
        $('#streamColumns').append(`<div id="stream${i}" class="col-md-${columns}" style="height: 100vh; padding: 0;"></div>`);
    }
}

if(streamer.indexOf(' ') !== -1) {
    var streamers = streamer.split(' ');
    var valid = [];

    for(var i = 0; i < streamers.length; i++) {
        if(sorted.indexOf(streamers[i].toLowerCase()) !== -1) {
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
    $('#streamColumns').append('<div id="soloStream" class="col-md-12" style="height: 100vh; padding: 0;"></div>');
    if(sorted.indexOf(streamer.toLowerCase()) !== -1) {
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