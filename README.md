# start

```
# 1回目
$ docker-compose up --build app

# 2回目移行
$ docker-compose up -d
```

でコンテナを起動させた後、

```
$ docker-compose exec app sh
/usr/src/app # yarn serve
```

http://localhost:9050/
