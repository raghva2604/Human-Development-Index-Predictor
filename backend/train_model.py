import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error
import pickle

DATA_PATH = "../dataset/processed/hdi_data.csv"
MODEL_PATH = "../models/hdi_model.pkl"


def load_data(path):
    return pd.read_csv(path)


def train():
    df = load_data(DATA_PATH)
    X = df.drop(columns=["hdi"])
    y = df["hdi"]

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    model = RandomForestRegressor(n_estimators=100, random_state=42)
    model.fit(X_train, y_train)

    predictions = model.predict(X_test)
    mse = mean_squared_error(y_test, predictions)
    print(f"Model trained. Test MSE: {mse:.4f}")

    with open(MODEL_PATH, "wb") as f:
        pickle.dump(model, f)
    print(f"Saved model to {MODEL_PATH}")


if __name__ == "__main__":
    train()
