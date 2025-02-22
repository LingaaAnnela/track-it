TrackIt Backend!

source venv/bin/activate

deactivate

RUN:
python app/main.py
OR:
uvicorn app.main:app --reload

python -m venv ven
source venv/bin/activate
pip install -r requirements.txt

pip freeze > requirements.txt

python -c "import fastapi, uvicorn, boto3, watchtower; print('Libraries installed successfully!')"
