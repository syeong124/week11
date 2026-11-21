//http 모듈 불러오기
const http=require("http");
//fs 모듈 불러오기
const fs=require("fs");
const { env } = require("process");

const PORT = Number(process.env.PORT) || 3000;
//서버 생성
const server = http.createServer((req,res)=>{
    console.log("요청 발생");
    //console.log(req);
    console.log(req.method);
    //응답 헤더
    //res.setHeader("Content-Type","text/plain");
    //바디 전송
    //res.write("Hello, Node");
    //res.end();//응답 종료
    res.setHeader("Content-Type","text/html");
    const readStream = fs.createReadStream(__dirname+"/index.html","utf8");
    readStream.pipe(res);

});
//서버 실행
server.listen(PORT,()=>{
    console.log(`${PORT}번 포트로 서버 실행`);
});