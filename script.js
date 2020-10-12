const videoElement = document.getElementById('video');
const button = document.getElementById('button');


// Prompt user to select media stream, then will pass that to video element, then play 
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (err) {
        console.log('Error: ', err);
    }
}

button.addEventListener('click', async () => {
    // Disable button
    button.disabled = true;
    // Start PIP
    await videoElement.requestPictureInPicture();
    // Reset Button 
    button.disabled = false;
    
});

// On Load
selectMediaStream();
