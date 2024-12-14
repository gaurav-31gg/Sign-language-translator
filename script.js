// A simplified version of your project for capturing images and user text
class SimpleCapture {
    constructor() {
      this.video = document.getElementById("video");
      this.captureButton = document.getElementById("captureButton");
      this.textInput = document.getElementById("textInput");
      this.capturesContainer = document.getElementById("capturesContainer");
  
      this.initializeCamera();
      this.addEventListeners();
    }
  
    // Initialize webcam
    initializeCamera() {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          this.video.srcObject = stream;
          this.video.play();
        })
        .catch((err) => {
          console.error("Error accessing webcam: ", err);
        });
    }
  
    // Add event listeners for capturing image and text
    addEventListeners() {
      this.captureButton.addEventListener("click", () => this.captureImageAndText());
    }
  
    // Capture image and user-provided text
    captureImageAndText() {
      const canvas = document.createElement("canvas");
      canvas.width = this.video.videoWidth;
      canvas.height = this.video.videoHeight;
      const context = canvas.getContext("2d");
  
      // Draw the current frame from the video onto the canvas
      context.drawImage(this.video, 0, 0, canvas.width, canvas.height);
  
      // Get the user-provided text
      const text = this.textInput.value.trim();
      if (!text) {
        alert("Please enter a text label for the image.");
        return;
      }
  
      // Create a container to display the image and text
      const captureDiv = document.createElement("div");
      captureDiv.className = "capture";
  
      const img = document.createElement("img");
      img.src = canvas.toDataURL("image/png");
      img.alt = text;
      captureDiv.appendChild(img);
  
      const caption = document.createElement("p");
      caption.innerText = text;
      captureDiv.appendChild(caption);
  
      this.capturesContainer.appendChild(captureDiv);
  
      // Clear the text input
      this.textInput.value = "";
    }
  }
  
  // Initialize the simplified capture class on window load
  window.addEventListener("load", () => {
    new SimpleCapture();
  });
