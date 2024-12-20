// This is a class for capturing video frames and user input
class SimpleCapture {
    constructor() {
        // Get all important elements from HTML
        this.video = document.getElementById("video"); // This is the video element for webcam
        this.captureButton = document.getElementById("captureButton"); // The big button to click
        this.textInput = document.getElementById("textInput"); // Input box where user types text
        this.capturesContainer = document.getElementById("capturesContainer"); // Area where captured stuff goes

        // Start the camera and setup button clicks
        this.initializeCamera();
        this.addEventListeners();
    }

    // Start the webcam and connect it to the video element
    initializeCamera() {
        navigator.mediaDevices.getUserMedia({ video: true }) // Ask for camera access
            .then((stream) => {
                this.video.srcObject = stream; // Put the live video in the <video> tag
                this.video.play(); // Start playing the video
            })
            .catch((err) => {
                console.error("Error accessing webcam: ", err); // Show error if no camera or blocked
            });
    }

    // Add a click listener to the capture button
    addEventListeners() {
        this.captureButton.addEventListener("click", () => this.captureImageAndText()); // When button is clicked, call the function
    }

    // This function captures an image from the video and adds user text
    captureImageAndText() {
        const canvas = document.createElement("canvas"); // Create a canvas to draw the image
        canvas.width = this.video.videoWidth; // Set canvas size same as video width
        canvas.height = this.video.videoHeight; // Set canvas size same as video height
        const context = canvas.getContext("2d"); // Get the 2D drawing area of the canvas

        // Copy the current video frame onto the canvas
        context.drawImage(this.video, 0, 0, canvas.width, canvas.height);

        // Get the text typed by the user
        const text = this.textInput.value.trim(); // Remove extra spaces from text
        if (!text) { // If text box is empty
            alert("Please enter a text label for the image."); // Show an alert
            return; // Stop running this function
        }

        // Create a container (div) to show the captured image and text
        const captureDiv = document.createElement("div");
        captureDiv.className = "capture"; // Give it a class for styling

        const img = document.createElement("img"); // Make an image element
        img.src = canvas.toDataURL("image/png"); // Convert the canvas drawing into an image source
        img.alt = text; // Add the text as alt text for accessibility
        captureDiv.appendChild(img); // Add the image inside the div

        const caption = document.createElement("p"); // Make a paragraph for the text
        caption.innerText = text; // Set the text inside it
        captureDiv.appendChild(caption); // Add the text under the image

        this.capturesContainer.appendChild(captureDiv); // Add this div to the main container

        // Clear the input box for next time
        this.textInput.value = "";
    }
}

// Start the class when the page loads
window.addEventListener("load", () => {
    new SimpleCapture(); // Create a new instance of SimpleCapture
});
