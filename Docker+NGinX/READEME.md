0.  참고 사이트
    http://labs.brandi.co.kr/2018/05/25/kangww.html
1.  Windows Docker
    https://hub.docker.com/editions/community/docker-ce-desktop-windows
    1.1. Docker File 생성
    1.2. 빌드
    docker build --tag node_server:0.0.1 F:\Study\Source\Publish\Docker+NGinX
    1.3. 이미지 확인
    docker images
    1.4. 생성 이미지로 컨테이너 만들기
    docker create --name NODE_SERVER_0 -p 3000:3000 node_server:0.0.1
    1.5. 생성 컨테이너 확인
    docker ps
    docker ps -a
    1.6. 컨테이너 실행
    docker start NODE_SERVER_0
    1.7. 컨테이너 삭제
    docker rm -f NODE_SERVER_0
    1.8. 컨테이너 이미지 삭제
    docker rmi -f 3ec16cc70c2d(Image ID)
    1.9. CPU 수에 맞추어 컨테이서 생성 후 서버 실행. 포트 변경 할 것
2.  NGinx
    https://nginx.org/en/download.html?_ga=2.194236845.1215431266.1526845809-398074114.1526845809
    2.1. 서버 시작 : nginx
    2.2. 서버 중지 : nginx -s stop
    2.3. nginx.conf
    http 블럭 내부 수정
    upstream nodejs_server {
    #least_conn;
    #ip_hash;
    server localhost:3000 weight=10 max_fails=3 fail_timeout=10s;
    server localhost:3001 weight=10 max_fails=3 fail_timeout=10s;
    }
    #3333번 포트 NodeJS 서버로 연결
    server{
    listen 3333;
    server_name localhost;
    location / {
    proxy_pass http://nodejs_server;
    }
    }
