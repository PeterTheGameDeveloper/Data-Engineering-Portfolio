# Peter Kline — Data Engineering Portfolio

Personal portfolio website showcasing production-style Data Engineering pipelines, modern lakehouse architectures, and automated cloud telemetry systems.

---

## Featured Engineering Projects

1. **[Strava Telemetry ELT Lakehouse](https://github.com/peterkline-de/Strava-API-Data-Project)**
   - **Stack:** `Python`, `Apache Airflow`, `dbt`, `DuckDB`, `MinIO (S3)`, `Docker`, `Streamlit`
   - **Overview:** Containerized ELT pipeline that ingests athlete telemetry from the Strava API into an S3-compatible data lake (MinIO), transforms raw JSON into staging and analytics mart tables via `dbt` and `DuckDB`, and visualizes performance metrics in a Streamlit dashboard.

2. **[Event-Driven Change Data Capture (CDC) Pipeline](https://github.com/peterkline-de/RuneScape-Web-Scraping-Change-Detection)**
   - **Stack:** `Python`, `Dagster`, `dbt`, `DuckDB`, `MinIO (S3)`, `Pydantic`, `Pytest`
   - **Overview:** Idempotent change-detection pipeline monitoring real-time wiki revision streams. Implements watermark-based incremental loading, 1-hour late-arriving data lookback windows, dimensional star-schema modeling (`fct_page_changes`, `dim_pages`), singular `dbt` freshness tests, and Dagster failure sensors.

3. **[Autonomous Cloud Market Telemetry & Quantitative Engine](https://github.com/peterkline-de/Trading-Bot)**
   - **Stack:** `Python`, `AWS EC2`, `Docker`, `Alpaca API`, `Time-Series Analysis`, `Pytest`
   - **Overview:** Production financial time-series ingestion and quantitative execution engine deployed on AWS EC2. Features cointegration and Kalman filter dynamic hedge modeling, regime filtering, stateful recovery, Discord webhook alerting, and a 34-test automated verification suite.

---

## Running Locally

```bash
npm install
npm run dev
```

Build for production:
```bash
npm run build
```
