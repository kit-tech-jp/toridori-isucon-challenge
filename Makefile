.PHONY: init

init: data/dump.sql.bz2 benchmarker/userdata/img

up:
	docker compose up -d

load-initial-data:
	bunzip2 -c data/dump.sql.bz2 | mysql -uroot -ppassword -h127.0.0.1 -P33306 isuconp

data/dump.sql.bz2:
	cd data && \
	curl -L -O https://github.com/catatsuy/private-isu/releases/download/img/dump.sql.bz2

benchmarker/userdata/img.zip:
	cd benchmarker/userdata && \
	curl -L -O https://github.com/catatsuy/private-isu/releases/download/img/img.zip

benchmarker/userdata/img: benchmarker/userdata/img.zip
	cd benchmarker/userdata && \
	unzip -qq -o img.zip
