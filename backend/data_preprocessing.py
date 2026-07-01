import os
import pandas as pd

# Load dataset
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
DATASET_PATH = os.path.join(SCRIPT_DIR, "..", "dataset", "hdi_dataset.csv")
OUTPUT_PATH = os.path.join(SCRIPT_DIR, "..", "dataset", "cleaned_hdi_dataset.csv")

df = pd.read_csv(DATASET_PATH, encoding="latin1", engine="python")
print("Original Shape:", df.shape)

# ----------------------------
# Remove empty columns
# ----------------------------
df = df.loc[:, ~df.columns.str.contains("^Unnamed")]

# ----------------------------
# Clean column names
# ----------------------------
df.columns = df.columns.str.strip()
df.rename(columns={
    "Human Development Index (HDI)": "HDI",
    "Life expectancy at birth": "Life_Expectancy",
    "Expected years of schooling": "Expected_Schooling",
    "Mean years of schooling": "Mean_Schooling",
    "Gross national income (GNI) per capita": "GNI",
}, inplace=True)

# ----------------------------
# Convert numeric columns
# ----------------------------
numeric_cols = [
    "HDI",
    "Life_Expectancy",
    "Expected_Schooling",
    "Mean_Schooling",
    "GNI",
]
for col in numeric_cols:
    df[col] = (
        df[col]
        .astype(str)
        .str.replace(",", "", regex=False)
        .str.strip()
    )
    df[col] = pd.to_numeric(df[col], errors="coerce")

# ----------------------------
# Remove rows with missing values
# ----------------------------
df = df.dropna(subset=numeric_cols)
print("\nCleaned Shape:", df.shape)
print("\nMissing Values:")
print(df[numeric_cols].isnull().sum())
print("\nData Types:")
print(df[numeric_cols].dtypes)

# ----------------------------
# Save cleaned dataset
# ----------------------------
df.to_csv(OUTPUT_PATH, index=False)
print("\n✅ Cleaned dataset saved successfully!")
