# HDI-Predictor

A machine learning project for predicting the Human Development Index (HDI) from socioeconomic and demographic data.

## Project Structure

- `backend/` - API server, model training, inference scripts, and data processing utilities.
- `frontend/` - Web application or dashboard for interacting with the model and visualizing predictions.
- `dataset/` - Raw and processed data files used for training and evaluation.
- `models/` - Saved trained model artifacts, checkpoints, and versioned model files.
- `reports/` - Analysis reports, evaluation summaries, and documentation of experiments.
- `screenshots/` - UI screenshots, results snapshots, and visual examples of the application.

## 1. Getting Started

### Prerequisites

- Python 3.10+ (or as required by the backend implementation)
- Node.js 18+ and npm/yarn (if `frontend/` is a web app)
- Git (optional)

### Recommended Setup

1. Open a terminal in `HDI-Predictor`.
2. Create a Python virtual environment:

```bash
python -m venv .venv
```

3. Activate the environment:

- Windows PowerShell:
  ```powershell
  .\.venv\Scripts\Activate.ps1
  ```
- Windows CMD:
  ```cmd
  .\.venv\Scripts\activate.bat
  ```

4. Install backend dependencies after they are defined in `backend/requirements.txt`.

```bash
pip install -r backend/requirements.txt
```

## 2. Backend

The `backend/` folder contains the logic for:

- loading and preprocessing data
- training HDI prediction models
- saving trained model artifacts
- serving predictions through an API

### Typical Backend Workflow

1. Place raw datasets in `dataset/raw/`.
2. Run preprocessing and feature engineering.
3. Train the model and save artifacts to `models/`.
4. Start the API server for inference.

### Example Commands

```bash
cd backend
python preprocess.py
python train.py
python serve.py
```

> Note: Exact script names may vary depending on implementation.

## 3. Frontend

The `frontend/` folder contains the application for users to interact with the prediction service.

### Typical Frontend Workflow

1. Install dependencies:

```bash
cd frontend
npm install
```

2. Start the frontend development server:

```bash
npm start
```
```

3. Open the browser at the displayed local URL.

## 4. Dataset

The `dataset/` folder should contain:

- raw data files used for training and validation
- cleaned datasets generated during preprocessing
- metadata or data dictionaries

Example layout:

- `dataset/raw/`
- `dataset/processed/`

## 5. Models

The `models/` folder stores:

- trained model weights
- serialized model files (`.pkl`, `.joblib`, `.h5`, etc.)
- model version metadata

Use this folder to track and reuse model artifacts.

## 6. Reports

The `reports/` folder is for:

- experiment summaries
- evaluation metrics
- charts and tables
- project documentation and research notes

## 7. Screenshots

The `screenshots/` folder is for capturing:

- UI screens from the frontend
- visual result examples
- model performance plots

## 8. Running the Project

1. Prepare the dataset and place it into `dataset/raw/`.
2. Run backend preprocessing and training.
3. Launch the backend inference server.
4. Start the frontend client and use it to submit prediction requests.

## 9. Suggested Project Enhancements

- Add `backend/requirements.txt` for Python dependencies.
- Add `frontend/package.json` for frontend package management.
- Add example data files or a sample dataset.
- Add model training and evaluation scripts.
- Add documentation for the API endpoints.

## 10. Notes

This README is a starting point. As project code is added, update this file with:

- exact installation commands
- real script names
- API usage examples
- frontend screenshots and navigation tips
- dataset schema and feature descriptions
