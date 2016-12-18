var url  = require('url');
var str = 'https://username:password@www.baidu.com:9090/s?wd=Content-Type&rsv_spt=1&rsv_iqid=0xf318b7e80001e728&issp=1&f=8&rsv_bp=0&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_n=2&rsv_sug3=1#1';
console.log(url.parse(str,true));
/*
* Url {
 protocol: 'https:', 协议
 slashes: true, 是否有/
 auth: 'username:password', 权限
 host: 'www.baidu.com:9090', 主机
 port: '9090',
 hostname: 'www.baidu.com',主机名
 hash: '#1', hash值
 search: '?wd=Content-Type&rsv_spt=1&rsv_iqid=0xf318b7e80001e728&issp=1&f=8&rsv_bp=0&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_n=2&rsv_sug3=1', 带？查询串
 query: 查询对象
 { wd: 'Content-Type',
 rsv_spt: '1',
 rsv_iqid: '0xf318b7e80001e728',
 issp: '1',
 f: '8',
 rsv_bp: '0',
 rsv_idx: '2',
 ie: 'utf-8',
 tn: 'baiduhome_pg',
 rsv_enter: '1',
 rsv_n: '2',
 rsv_sug3: '1' },
 pathname: '/s', //路径
 path: '/s?wd=Content-Type&rsv_spt=1&rsv_iqid=0xf318b7e80001e728&issp=1&f=8&rsv_bp=0&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_n=2&rsv_sug3=1',
 href: 'https://username:password@www.baidu.com:9090/s?wd=Content-Type&rsv_spt=1&rsv_iqid=0xf318b7e80001e728&issp=1&f=8&rsv_bp=0&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_n=2&rsv_sug3=1#1' }

 *
*
*
*
* */