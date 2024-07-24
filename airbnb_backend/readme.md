## Python commands in docker container

### Create project

```bash
docker-compose exec <service-name> python manage.py startapp <project-name>
```

### Delete everything from db

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

### Make superuser

```bash
docker exec -it container_id python manage.py createsuperuser
```
