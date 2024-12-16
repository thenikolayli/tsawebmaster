FROM ubuntu:latest

ARG ENV
COPY ${ENV} .env
COPY ./frontend ./frontend
COPY ./backend ./backend


RUN apt update -y && apt upgrade -y && apt install pipenv npm nodejs -y

RUN dir

WORKDIR /frontend

RUN npm install && npm run windbuild && npx vite build


WORKDIR /backend

RUN pipenv --python /usr/bin/python3 && pipenv install

RUN pipenv run python3 manage.py migrate --no-input && pipenv run python3 manage.py collectstatic --no-input

CMD ["pipenv", "run", "uvicorn", "base.asgi:application", "--workers", "3", "--host", "0.0.0.0", "--port", "8000"]