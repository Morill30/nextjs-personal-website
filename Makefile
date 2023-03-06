all: host-create ssl-create

host-create:
	@echo "- Creating host at 127.0.0.1 local.jmprofile.com...."
	@echo "- Please enter password when requested"
	@sh ./scripts/manage-etc-hosts.sh add local.jmprofile.com
ssl-create:
	@echo "To install certificate. Please enter your computer ->"
	@sudo sh ./scripts/make-cert.sh
	@echo ""
	@echo "Done!"

deploy-images: build-images deploy-next deploy-nginx

build-images:
	@docker compose -f ./docker-compose-build.yaml build

deploy-nginx:
	@docker push 028352660330.dkr.ecr.us-east-1.amazonaws.com/nginx-psite:latest

deploy-next:
	@docker push 028352660330.dkr.ecr.us-east-1.amazonaws.com/nextjs-psite:latest

ecs-deploy:
	@aws ecs update-service --cluster Personal-Website-Cluster --service personal-site-service --force-new-deployment