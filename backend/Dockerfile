FROM golang:1.22.2-alpine

ENV APP_PATH /app/backend
WORKDIR $APP_PATH

RUN go install github.com/cosmtrek/air@latest

COPY go.mod go.sum ./

RUN go mod download

EXPOSE 8080

CMD [ "air", "-c", ".air.toml"]