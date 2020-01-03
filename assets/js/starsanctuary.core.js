var streamerList = [
    'OrionTheStarhog','TorchofIrony','GardenWolf'
];

$(document).ready(function() {
    streamerList.forEach(function(streamer, i) {
        $('#streamersList').append(`
            <a class="dropdown-item" href="/live?s=${streamer}">
                <span>${streamer}</span>
            </a>
        `)
    })
})