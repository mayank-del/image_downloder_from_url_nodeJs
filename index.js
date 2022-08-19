const {DownloaderHelper}=require('node-downloader-helper');
const dl=new DownloaderHelper("https://i.postimg.cc/GtTMZcrs/worldbusines.png",__dirname);

dl.on('end',()=>console.log("Downlad Complete"));
dl.start();
