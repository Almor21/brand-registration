FROM python:3.12-slim

COPY requirements.txt .

RUN python -m venv /opt/venv \
    && /opt/venv/bin/pip install --upgrade pip \
    && /opt/venv/bin/pip install -r requirements.txt

COPY . .

ENV PATH="/opt/venv/bin:$PATH"

EXPOSE 8000

CMD sh -c "/opt/venv/bin/alembic upgrade head && /opt/venv/bin/uvicorn main:app --reload --host 0.0.0.0 --port 5000"
