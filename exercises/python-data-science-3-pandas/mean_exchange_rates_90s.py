import pandas as pd

er = pd.read_csv(
    "https://datahub.io/core/us-euro-foreign-exchange-rate/r/monthly.csv",
    parse_dates=["Date"])

er_90s_all = er[(er["Date"] >= "1990-01-01") & (er["Date"] <= "1990-12-31")]
er_90s = er_90s_all[["Country", "Exchange rate"]]

er_90s_grouped = er_90s.groupby("Country")
er_90s_mean = er_90s_grouped.mean()

print(er_90s_mean)
