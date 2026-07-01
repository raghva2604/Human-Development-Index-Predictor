import os
import pandas as pd

# Load Dataset
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
DATASET_PATH = os.path.join(SCRIPT_DIR, "..", "dataset", "hdi_dataset.csv")

df = pd.read_csv(DATASET_PATH, encoding="latin1", engine="python")

print("=" * 60)
print("HDI PREDICTOR - DATASET ANALYSIS")
print("=" * 60)
print("\nDataset Shape:")
print(df.shape)
print("\nColumn Names:")
print(df.columns.tolist())
print("\nFirst 5 Rows:")
print(df.head())
print("\nData Types:")
print(df.dtypes)
print("\nMissing Values:")
print(df.isnull().sum())
print("\nDuplicate Rows:")
print(df.duplicated().sum())
print("\nSummary:")
print(df.describe(include="all"))
