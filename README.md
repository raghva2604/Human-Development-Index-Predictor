# HDI-Predictor

**AI-Powered Human Development Index Prediction Dashboard**

HDI-Predictor is a premium dashboard application that combines machine learning and modern web UI to estimate Human Development Index scores from development indicators.

---

## Project Overview

This project provides:

- A **Flask backend** for HDI prediction and validation
- A **React + Vite + Tailwind frontend** for interactive analytics
- A trained **Gradient Boosting Regressor** model
- A polished dashboard with prediction history, insights, gauge charts, and export options

The goal is to create a professional portfolio-ready product, not only an internship project.

---

## Features

- **Live HDI prediction** using user-provided indicators
- **Robust backend validation** for all inputs
- **Model metadata** returned with each prediction
- **Premium dashboard UI** with dark theme and analytics cards
- **Gauge chart** with centered HDI score and category
- **Dynamic AI insights** based on predicted HDI category
- **Prediction history** saved locally
- **Export options** for CSV and PDF

---

## Repository Structure

```
HDI-Predictor/
├── backend/
├── frontend/
├── dataset/
├── models/
├── reports/
├── screenshots/
├── README.md
├── requirements.txt
├── LICENSE
└── .gitignore
```

---

## Architecture

### Current Local Architecture

```
User
  │
  ▼
React Dashboard
  │
  ▼
Axios API
  │
  ▼
Flask Backend
  │
  ▼
Validation Layer
  │
  ▼
Gradient Boosting Model
  │
  ▼
Prediction Response
  │
  ▼
Dashboard + Charts
```

### Deployment Architecture (Future)

```
User
  │
  ▼
React (Vercel)
  │
  ▼
AWS EC2 (Nginx + Gunicorn)
  │
  ▼
Flask Backend
  │
  ▼
Gradient Boosting Model
```

---

## ML Pipeline

1. **Dataset loading** from the `dataset/` folder
2. **Data cleaning** and preprocessing with backend scripts
3. **Feature selection** using development indicators
4. **Model training** with Gradient Boosting Regressor
5. **Model evaluation** using R² and error metrics
6. **Model serialization** to `models/hdi_model.pkl`
7. **API inference** via `backend/app.py`

---

## Installation

### Backend

```bash
cd d:\projects\HDI-Predictor
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r backend\requirements.txt
```

### Frontend

```bash
cd frontend
npm install
```

---

## Running the Project

### Start Backend

```bash
cd backend
..\.venv\Scripts\python.exe app.py
```

### Start Frontend

```bash
cd frontend
npm run dev
```

Open the frontend at `http://127.0.0.1:5173`.

---

## API

### `GET /`

Returns basic backend health status.

### `POST /predict`

Predict HDI using JSON input:

```json
{
  "Life_Expectancy": 82.5,
  "Expected_Schooling": 18,
  "Mean_Schooling": 13,
  "GNI": 60000
}
```

### Response Example

```json
{
  "Predicted_HDI": 0.956,
  "Category": "Very High",
  "Confidence": "98.56%",
  "Model": "Gradient Boosting Regressor",
  "Prediction_Time": "0.00"
}
```

### Validation

The API validates:

- required fields
- numeric values
- positive ranges
- clear error messages for invalid input

---

## Results

- **Model:** Gradient Boosting Regressor
- **Validation R²:** 0.9856
- **Predicted HDI example:** 0.956
- **Confidence:** 98.56%

---

## Screenshots

Screenshots are stored in the `screenshots/` folder and should include:

- Home screen
- Prediction section
- AI Insights section
- Gauge view
- Prediction history
- Export panel

---

## Future Scope

- Deploy the frontend on **Vercel** and backend on **AWS EC2**
- Add **country comparison** and **trend analytics**
- Add **interactive choropleth map** for global HDI
- Add **historical HDI trends** if time series data is available
- Add **recommendations** based on AI insights
- Add **authentication** and user-specific prediction history

---

## Team

- DVL Raghava
- D. Niharika Tejaswi

---

## Notes

This README is designed for a polished, production-ready project. Update it with actual screenshots, exact deployment URLs, and any additional dataset or model details as the project evolves.
