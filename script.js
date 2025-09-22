
  const camera = document.getElementById('camera');
  const snapshot = document.getElementById('snapshot');
  const ctx = snapshot.getContext('2d');

  // Try rear (environment) camera first
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: { facingMode: { exact: "environment" } } })
      .then(stream => { 
        camera.srcObject = stream; 
      })
      .catch(err => {
        console.warn("Rear camera not available, switching to default", err);
        // Fallback to default camera (front)
        navigator.mediaDevices.getUserMedia({ video: true })
          .then(stream => { camera.srcObject = stream; })
          .catch(err => console.error("Camera access denied", err));
      });
  }

  // Capture photo
  function capturePhoto() {
    snapshot.width = camera.videoWidth;
    snapshot.height = camera.videoHeight;
    ctx.drawImage(camera, 0, 0);
    addItem(snapshot.toDataURL("image/png"), "safe");
  }

  // Handle file upload
  function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    if (fileInput.files.length > 0) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const category = Math.random() > 0.5 ? "safe" : "unsafe"; // demo logic
        addItem(e.target.result, category);
      };
      reader.readAsDataURL(fileInput.files[0]);
    } else {
      alert("Please select a file first!");
    }
  }

  // Add item to UI
  function addItem(imageSrc, category) {
    const itemCard = document.createElement("div");
    itemCard.className = "item-card " + (category === "safe" ? "safe" : "unsafe");

    const img = document.createElement("img");
    img.src = imageSrc;

    const label = document.createElement("p");
    label.textContent = category === "safe" ? "Safety" : "Not Safety";

    itemCard.appendChild(img);
    itemCard.appendChild(label);

    if (category === "safe") {
      document.getElementById("safeItems").appendChild(itemCard);
    } else {
      document.getElementById("unsafeItems").appendChild(itemCard);
    }
  }

