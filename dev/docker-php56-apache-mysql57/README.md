# Docker - ローカル開発環境

## 起動
```shell
> docker-compose up -d
```

## コンテナログイン
```shell
> docker-compose exec php-apache bash
```

## hosts
```
127.0.0.1  local.test.site
```

## Apache
- https://local.test.site

## MySQL
jdbc:mysql://localhost:3306/docker

## Maildev
- http://localhost:1080

## 停止
```shell
> docker-compose down
```
