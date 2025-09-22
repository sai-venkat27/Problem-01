# 🚀 Safety Object Detection Dashboard

This project is a **web-based dashboard** for detecting and classifying objects into:
- **Safety ✅** items  
- **Not Safety ❌** items  

Currently, the detection is simulated for demonstration purposes.  
In the next stages, a **backend with Machine Learning algorithms** will be added to perform real-time object classification.

---

## 🌐 Features
- **File Upload**: Upload an image for detection  
- **Camera Integration**: Capture photos (rear camera supported on mobile)  
- **Dynamic Results**: Items displayed in separate grids (Safe vs Not Safe)  
- **History Section**: Previously detected items are saved in the dashboard  
- **Responsive Layout**: Works across desktop and mobile devices  

---

## 🛠️ Future Scope – Backend with Machine Learning
We plan to integrate a **backend API** powered by **FastAPI** and **Machine Learning models** for real object detection.

### Planned Workflow:
1. **Frontend (Web UI)**  
   - Upload/capture an image  
   - Send the image to the backend via API  

2. **Backend (FastAPI + ML)**  
   - Receive the uploaded image  
   - Run **object detection models** (YOLOv8, SSD, Faster R-CNN, etc.)  
   - Classify detected items into **Safety** and **Not Safety** categories  

3. **Response to Frontend**  
   - Return structured JSON with detection results (labels, confidence, bounding boxes)  
   - Frontend displays the results visually  

---

## 📂 Project Structure
safety_dashboard/
├── index.html # Current frontend (HTML, CSS, JS)
├── README.md # Project documentation
└── (future) backend/ # FastAPI backend with ML


---

## 🚀 Planned Upgrades

### 🔹 Frontend Options
- **React.js** → Modern, component-based frontend with hooks/state management  
- **Angular** → Enterprise-level structured frontend framework  
- Both will replace the current plain HTML/JS implementation for better scalability and UI  

### 🔹 Backend
- **FastAPI** (Python) → High-performance web framework  
- **Machine Learning Models**:  
  - TensorFlow / PyTorch for training  
  - YOLOv8 for real-time object detection  
  - Scikit-learn for classical ML approaches  

### 🔹 Database
- **PostgreSQL / MongoDB** for storing detection history, logs, and user data  

### 🔹 Deployment
- **Dockerized** backend + frontend  
- Deployable on **AWS / GCP / Azure**  

---

## 💡 Next Steps
- [ ] Replace random classification logic with real ML predictions  
- [ ] Implement **FastAPI backend** with REST endpoints  
- [ ] Upgrade frontend to **React** or **Angular**  
- [ ] Connect to a **database** for history tracking  
- [ ] Deploy a full-stack version to the cloud  

---

👨‍💻 *Designed with ❤️ to evolve into a production-ready AI-powered safety detection platform.*
