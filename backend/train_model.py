import os
import pandas as pd
import joblib
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.tree import DecisionTreeRegressor
from sklearn.ensemble import RandomForestRegressor, GradientBoostingRegressor
from sklearn.metrics import (
    mean_absolute_error,
    mean_squared_error,
    r2_score,
)

# ----------------------------
# Load cleaned dataset
# ----------------------------
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
DATASET_PATH = os.path.join(SCRIPT_DIR, "..", "dataset", "cleaned_hdi_dataset.csv")
df = pd.read_csv(DATASET_PATH, encoding="latin1", engine="python")

# ----------------------------
# Features & Target
# ----------------------------
X = df[[
    "Life_Expectancy",
    "Expected_Schooling",
    "Mean_Schooling",
    "GNI",
]]
y = df["HDI"]

# ----------------------------
# Train Test Split
# ----------------------------
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42,
)

# ----------------------------
# Models
# ----------------------------
models = {
    "Linear Regression": LinearRegression(),
    "Decision Tree": DecisionTreeRegressor(random_state=42),
    "Random Forest": RandomForestRegressor(
        n_estimators=200,
        random_state=42,
    ),
    "Gradient Boosting": GradientBoostingRegressor(
        random_state=42,
    ),
}

best_model = None
best_score = -999
print("=" * 60)
print("MODEL COMPARISON")
print("=" * 60)
for name, model in models.items():
    model.fit(X_train, y_train)
    pred = model.predict(X_test)
    mae = mean_absolute_error(y_test, pred)
    mse = mean_squared_error(y_test, pred)
    rmse = mse ** 0.5
    r2 = r2_score(y_test, pred)
    print(f"\n{name}")
    print("-" * 40)
    print(f"MAE  : {mae:.4f}")
    print(f"RMSE : {rmse:.4f}")
    print(f"R²   : {r2:.4f}")
    if r2 > best_score:
        best_score = r2
        best_model = model

# ----------------------------
# Save Best Model
# ----------------------------
MODEL_PATH = os.path.join(SCRIPT_DIR, "..", "models", "hdi_model.pkl")
joblib.dump(best_model, MODEL_PATH)
print("\n" + "=" * 60)
print("BEST MODEL SAVED")
print("=" * 60)
print(f"Best R² Score : {best_score:.4f}")
