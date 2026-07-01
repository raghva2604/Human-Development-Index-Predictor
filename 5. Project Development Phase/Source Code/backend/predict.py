import joblib
import pandas as pd

# Load trained model
model = joblib.load("../models/hdi_model.pkl")

MODEL_NAME = "Gradient Boosting Regressor"
MODEL_CONFIDENCE = 98.56


def predict_hdi(life_expectancy,
                expected_schooling,
                mean_schooling,
                gni):
    data = pd.DataFrame({
        "Life_Expectancy": [life_expectancy],
        "Expected_Schooling": [expected_schooling],
        "Mean_Schooling": [mean_schooling],
        "GNI": [gni]
    })
    start_time = pd.Timestamp.now()
    prediction = model.predict(data)[0]
    end_time = pd.Timestamp.now()
    duration = (end_time - start_time).total_seconds()

    if prediction >= 0.800:
        category = "Very High"
    elif prediction >= 0.700:
        category = "High"
    elif prediction >= 0.550:
        category = "Medium"
    else:
        category = "Low"
    return {
        "Predicted_HDI": round(float(prediction), 3),
        "Category": category,
        "Confidence": f"{MODEL_CONFIDENCE:.2f}%",
        "Model": MODEL_NAME,
        "Prediction_Time": f"{duration:.2f}",
    }
