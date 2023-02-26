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
