
# Brain Tumour Detection Model 🧠

Welcome to our Brain Tumour Detection Model developed during the AI Unite Hackathon by team nvAI! Our project utilizes Machine Learning, Computer Vision, and Segmentation techniques to detect brain tumors from MRI images.

## Project Overview

### Client
🖥️ Our client-side application is built using React, offering an intuitive interface for interacting with our brain tumor detection system. It seamlessly communicates with the server-side Flask API.

### Server
🖥️ The server component is powered by Flask, hosted on a Linode instance. This API accepts MRI images of brain tumors and returns detailed JSON responses, including detection status, confidence scores, and image links.

```json
{
  "inference_id": "b20e9d99-8a77-4484-a30d-130aedfe49be",
  "time": 0.03575260299976435,
  "image": { "width": 319, "height": 360 },
  "predictions": [
    {
      "x": 217.0,
      "y": 185.5,
      "width": 90.0,
      "height": 85.0,
      "confidence": 0.8729356527328491,
      "class": "yes",
      "class_id": 0,
      "detection_id": "33c0f948-a90d-4039-83bc-a42386d5daec"
    }
  ]
}
```

## Technologies Used

### Frontend
<div style="display: flex; gap: 20px;">
    <img src="https://skillicons.dev/icons?i=html" alt="HTML" width="50"/>
    <img src="https://skillicons.dev/icons?i=tailwind" alt="Tailwind CSS" width="50"/>
    <img src="https://skillicons.dev/icons?i=javascript" alt="JavaScript" width="50"/>
    <img src="https://skillicons.dev/icons?i=react" alt="React.js" width="50"/>
</div>

### Backend
<div style="display: flex; gap: 20px;">
    <img src="https://skillicons.dev/icons?i=python" alt="Python" width="50"/>
    <img src="https://skillicons.dev/icons?i=flask" alt="Flask" width="50"/>
</div>

### Machine Learning
<div style="display: flex; gap: 20px;">
    <img src="https://skillicons.dev/icons?i=tensorflow" alt="TensorFlow" width="50"/>
</div>

### Database
<div style="display: flex; gap: 20px;">
    <img src="https://skillicons.dev/icons?i=mongodb" alt="MongoDB" width="50"/>
</div>

## Installation

+ Clone the repository:
   ```bash
   git clone https://github.com/arnab-4/BrainScan-AI.git
   ```

+ Install dependencies:
   - [Client Side Dependencies](https://github.com/arnab-4/BrainScan-AI/tree/main/client#readme)
   - [Server Side Dependencies](https://github.com/arnab-4/BrainScan-AI/tree/main/server#readme)

## Model Overview

ℹ️ Our model is based on convolutional neural networks (CNNs) trained on a dataset of MRI images labeled with tumor presence or absence. We achieved an accuracy of 89% on our test dataset. The model utilizes segmentation techniques to identify and classify brain tumors from MRI scans.

## Video Overview

📹 Watch our project in action! Here's a brief video demonstrating how our Brain Tumour Detection Model works:

[![Watch the video](./Screenshot 2024-07-21 233731.png)](https://www.youtube.com/watch?v=zPXvp4Q6L2o&t=61s&ab_channel=Curiosity)

## License

📝 This project is licensed under the [MIT License](https://github.com/arnab-4/BrainScan-AI/blob/main/LICENSE) - see the LICENSE file for details.

---

Created by Arnab Manna
