function playAudio(audioId, imageName) {
    const audio = document.getElementById(audioId);
    audio.play();

    // You can do something with the image name, like displaying it somewhere
    console.log('Clicked on:', imageName);
}
