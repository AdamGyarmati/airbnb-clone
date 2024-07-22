## Python commands in docker container

### Create project

```bash
docker-compose exec <service-name> python manage.py startapp <project-name>
```

### Delete everythin from db

```bash
docker-compose exec <service-name> python manage.py flush
```

### Make migrations for db

```bash
docker-compose exec <service-name> python manage.py makemkigrations
```

### Run migrations for db

```bash
docker-compose exec <service-name> python manage.py migrate
```
