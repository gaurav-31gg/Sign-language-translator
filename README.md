

## **Dynamic Sign Language Translator**
### **Documentation**

---

### **1. Project Overview**
This project is a simple real-time system that allows users to **capture webcam images** and label them with user-provided text. It serves as a foundation for more advanced features like gesture recognition for sign language.

---

### **2. Technologies Used**
- **HTML**: Structure for the project.
- **CSS**: Styling for UI components like video, buttons, and captured images.
- **JavaScript**: Core logic for webcam integration, image capturing, and UI updates.
- **Web APIs**:
   - **getUserMedia API**: Access webcam input.
   - **Canvas API**: Capture frames from the webcam and display them as images.

---

### **3. Features Implemented**
1. **Webcam Integration**:
   - Accesses the user's webcam feed using the `getUserMedia` API.
   - Displays the live video stream.

2. **Image Capture with Labels**:
   - Captures the current video frame and converts it to an image using the **Canvas API**.
   - Allows users to add text labels via an input field.

3. **Dynamic UI Updates**:
   - Displays captured images and corresponding text labels in a gallery format dynamically on the webpage.

---

### **4. Code Breakdown**
#### **HTML** (`index.html`)
- Defines the structure of the project:
   - `<video>` tag for webcam display.
   - `<input>` field to accept user text.
   - `<button>` to trigger the capture action.
   - `<div>` container for displaying captured images with labels.

---

#### **CSS** (`style.css`)
- Styles the project for a clean and user-friendly interface:
   - Responsive video display.
   - Styled buttons, inputs, and image containers.
   - Flexible layout for captured images using **Flexbox**.

---

#### **JavaScript** (`script.js`)
The core functionality is encapsulated in the `SimpleCapture` class:
1. **Webcam Initialization**:
   - Uses `navigator.mediaDevices.getUserMedia` to access the webcam.
   - Displays the webcam stream in a `<video>` tag.

2. **Image Capture**:
   - Captures the current video frame using the **Canvas API**.
   - Generates a PNG image and appends it dynamically to the webpage.

3. **Label Association**:
   - Retrieves text from the input field and associates it with the captured image.

4. **Dynamic Gallery**:
   - Captured images and labels are displayed in a gallery format inside the `capturesContainer` element.

---

### **5. How It Works**
1. **Open the Project**:
   - Load the `index.html` file in any modern browser.

2. **Start Webcam**:
   - The webcam feed will automatically initialize and display.

3. **Capture Image**:
   - Enter a label in the input box.
   - Click the "Capture Image" button to save the current frame with the provided label.

4. **View Captures**:
   - Captured images with labels will appear in a gallery below the video feed.

---

### **6. Progress Made So Far**
- **Webcam Feed**: Successfully integrated using `getUserMedia`.
- **Image Capture**: Working functionality to capture frames as images.
- **Dynamic Labeling**: User can add labels that appear below captured images.
- **UI Design**: Simple, clean, and responsive user interface for video, input, and gallery.

---

### **7. Next Steps**
- **Machine Learning Integration**:
   - Use TensorFlow.js for gesture recognition.
   - Train the system to recognize hand gestures and associate them with labels.
- **Speech Synthesis**:
   - Convert recognized gestures or labels into speech output.
- **Real-Time Predictions**:
   - Enable dynamic predictions of gestures while viewing the live webcam feed.


