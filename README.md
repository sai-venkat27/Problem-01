# 🚀 Safety Object Detection in the space station

This project is a **web-based dashboard** that allows users to:
- Upload images or capture photos using the camera
- Classify detected objects into **Safety ✅** and **Not Safety ❌** categories
- Maintain a visual record of previously detected items

Currently, the classification is **simulated** for demonstration purposes.  
The real detection pipeline will be added in the backend.

---

## 🌐 Features
- **Navigation bar** with sections for quick access  
- **File upload** to test detection with images  
- **Camera integration** (supports rear camera on mobile)  
- **Dynamic UI** that separates detected items into *safe* and *not safe* grids  
- **Footer section** with branding  

---

## 🛠️ Future Scope – Backend with Machine Learning
In the next phase, we will add a **backend server** powered by **Machine Learning algorithms** to perform real object detection.

### Planned Workflow:
1. **Frontend (this web app)**  
   - Capture/upload an image  
   - Send it to the backend for analysis  

2. **Backend (Python, FastAPI/Flask)**  
   - Receive the uploaded image  
   - Run **object detection models** (e.g., YOLO, SSD, Faster R-CNN)  
   - Classify detected items as **Safety** or **Not Safety**  

3. **Response to Frontend**  
   - Return structured results (JSON) with labels and bounding boxes  
   - Display results in the UI with images placed in the correct section  

---

## 📂 Project Structure
