from flask import Flask, request, jsonify
from flask_cors import CORS
from predict import predict_hdi

app = Flask(__name__)
CORS(app)

REQUIRED_FIELDS = [
    "Life_Expectancy",
    "Expected_Schooling",
    "Mean_Schooling",
    "GNI",
]

@app.route("/")
def home():
    return jsonify({
        "Project": "HDI Predictor",
        "Status": "Running"
    })

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json(silent=True)
    if not data:
        return jsonify({"error": "Request body must be valid JSON."}), 400

    missing = [field for field in REQUIRED_FIELDS if field not in data]
    if missing:
        return jsonify({"error": f"Missing required fields: {', '.join(missing)}."}), 400

    try:
        life_expectancy = float(data["Life_Expectancy"])
        expected_schooling = float(data["Expected_Schooling"])
        mean_schooling = float(data["Mean_Schooling"])
        gni = float(data["GNI"])
    except (ValueError, TypeError):
        return jsonify({"error": "All fields must be numeric values."}), 400

    if life_expectancy <= 0:
        return jsonify({"error": "Life Expectancy must be a positive number."}), 400
    if expected_schooling < 0:
        return jsonify({"error": "Expected Schooling cannot be negative."}), 400
    if mean_schooling < 0:
        return jsonify({"error": "Mean Schooling cannot be negative."}), 400
    if gni <= 0:
        return jsonify({"error": "GNI must be a positive number."}), 400

    result = predict_hdi(
        life_expectancy,
        expected_schooling,
        mean_schooling,
        gni,
    )
    return jsonify(result)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
