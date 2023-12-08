build:
	docker run -d -p 4000:8080 -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:23.0.1 start-dev

start:
	docker start 6bea1d64da2f

stop:
	docker stop 6bea1d64da2f