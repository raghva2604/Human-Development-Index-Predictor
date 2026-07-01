from flask import Flask, request, jsonify
import pickle

app = Flask(__name__)

MODEL_PATH = "../models/hdi_model.pkl"

@app.route("/health", methods=["GET"])
def health_check():
    return jsonify({"status": "ok"})

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json
    if not data:
        return jsonify({"error": "Invalid input"}), 400

    try:
        with open(MODEL_PATH, "rb") as f:
            model = pickle.load(f)

        features = data.get("features")
        prediction = model.predict([features])
        return jsonify({"prediction": prediction[0]})
    except FileNotFoundError:
        return jsonify({"error": "Model file not found"}), 500
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
