# Docker - ローカル開発環境

## コンテナビルド＋起動
##### Windows/WSL
 ```shell
 $ HOST_UID=$(id -u) HOST_GID=$(id -g) docker compose build --no-cache
 $ HOST_UID=$(id -u) HOST_GID=$(id -g) docker compose up -d
 ```
##### Mac/Linux
 ```shell
 $ docker compose build --no-cache
 $ docker compose up -d
 ```

### WordPressダウンロード
```shell
$ cd html/
$ sudo chown -R user:user wordpress/
$ curl -o wordpress-X.X.X-ja.zip https://ja.wordpress.org/latest-ja.zip
$ unzip wordpress-X.X.X-ja.zip
```

## hosts
```
127.0.0.1  local.test.site
```

## WordPressインストール
- https://local.test.site/
  - DB名: docker
  - DBユーザー名: root
  - DBパスワード: (空)
  - DBホスト名: mysql

### APPコンテナ入室
```shell
$ docker compose exec app bash
```

## MySQL
jdbc:mysql://local.test.site:3306/docker

## Mailpit
- http://local.test.site:8025/

## 停止
```shell
> docker compose down
```
