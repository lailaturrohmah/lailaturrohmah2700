//>>built
require({cache:{"libs/qrcode":function(){define(["dojo","dijit","dojox"],function(x,B,H){var D;(function(){function x(a){this.mode=u.MODE_8BIT_BYTE;this.data=a;this.parsedData=[];a=0;for(var b=this.data.length;a<b;a++){var c=[],d=this.data.charCodeAt(a);65536<d?(c[0]=240|(d&1835008)>>>18,c[1]=128|(d&258048)>>>12,c[2]=128|(d&4032)>>>6,c[3]=128|d&63):2048<d?(c[0]=224|(d&61440)>>>12,c[1]=128|(d&4032)>>>6,c[2]=128|d&63):128<d?(c[0]=192|(d&1984)>>>6,c[1]=128|d&63):c[0]=d;this.parsedData.push(c)}this.parsedData=
Array.prototype.concat.apply([],this.parsedData);this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function v(a,b){this.typeNumber=a;this.errorCorrectLevel=b;this.modules=null;this.moduleCount=0;this.dataCache=null;this.dataList=[]}function E(a,b){if(void 0==a.length)throw Error(a.length+"/"+b);for(var c=0;c<a.length&&0==a[c];)c++;this.num=Array(a.length-c+b);for(b=0;b<a.length-c;b++)this.num[b]=a[b+c]}function w(a,b){this.totalCount=
a;this.dataCount=b}function B(){this.buffer=[];this.length=0}function J(){var a=!1,b=navigator.userAgent;/android/i.test(b)&&(a=!0,(aMat=b.toString().match(/android ([0-9]\.[0-9])/i))&&aMat[1]&&(a=parseFloat(aMat[1])));return a}x.prototype={getLength:function(a){return this.parsedData.length},write:function(a){for(var b=0,c=this.parsedData.length;b<c;b++)a.put(this.parsedData[b],8)}};v.prototype={addData:function(a){a=new x(a);this.dataList.push(a);this.dataCache=null},isDark:function(a,b){if(0>a||
this.moduleCount<=a||0>b||this.moduleCount<=b)throw Error(a+","+b);return this.modules[a][b]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(a,b){this.moduleCount=4*this.typeNumber+17;this.modules=Array(this.moduleCount);for(var c=0;c<this.moduleCount;c++){this.modules[c]=Array(this.moduleCount);for(var d=0;d<this.moduleCount;d++)this.modules[c][d]=null}this.setupPositionProbePattern(0,0);this.setupPositionProbePattern(this.moduleCount-
7,0);this.setupPositionProbePattern(0,this.moduleCount-7);this.setupPositionAdjustPattern();this.setupTimingPattern();this.setupTypeInfo(a,b);7<=this.typeNumber&&this.setupTypeNumber(a);null==this.dataCache&&(this.dataCache=v.createData(this.typeNumber,this.errorCorrectLevel,this.dataList));this.mapData(this.dataCache,b)},setupPositionProbePattern:function(a,b){for(var c=-1;7>=c;c++)if(!(-1>=a+c||this.moduleCount<=a+c))for(var d=-1;7>=d;d++)-1>=b+d||this.moduleCount<=b+d||(this.modules[a+c][b+d]=
0<=c&&6>=c&&(0==d||6==d)||0<=d&&6>=d&&(0==c||6==c)||2<=c&&4>=c&&2<=d&&4>=d?!0:!1)},getBestMaskPattern:function(){for(var a=0,b=0,c=0;8>c;c++){this.makeImpl(!0,c);var d=m.getLostPoint(this);if(0==c||a>d)a=d,b=c}return b},createMovieClip:function(a,b,c){a=a.createEmptyMovieClip(b,c);this.make();for(b=0;b<this.modules.length;b++){c=1*b;for(var d=0;d<this.modules[b].length;d++){var e=1*d;this.modules[b][d]&&(a.beginFill(0,100),a.moveTo(e,c),a.lineTo(e+1,c),a.lineTo(e+1,c+1),a.lineTo(e,c+1),a.endFill())}}return a},
setupTimingPattern:function(){for(var a=8;a<this.moduleCount-8;a++)null==this.modules[a][6]&&(this.modules[a][6]=0==a%2);for(a=8;a<this.moduleCount-8;a++)null==this.modules[6][a]&&(this.modules[6][a]=0==a%2)},setupPositionAdjustPattern:function(){for(var a=m.getPatternPosition(this.typeNumber),b=0;b<a.length;b++)for(var c=0;c<a.length;c++){var d=a[b],e=a[c];if(null==this.modules[d][e])for(var f=-2;2>=f;f++)for(var h=-2;2>=h;h++)this.modules[d+f][e+h]=-2==f||2==f||-2==h||2==h||0==f&&0==h?!0:!1}},setupTypeNumber:function(a){for(var b=
m.getBCHTypeNumber(this.typeNumber),c=0;18>c;c++){var d=!a&&1==(b>>c&1);this.modules[Math.floor(c/3)][c%3+this.moduleCount-8-3]=d}for(c=0;18>c;c++)d=!a&&1==(b>>c&1),this.modules[c%3+this.moduleCount-8-3][Math.floor(c/3)]=d},setupTypeInfo:function(a,b){b=m.getBCHTypeInfo(this.errorCorrectLevel<<3|b);for(var c=0;15>c;c++){var d=!a&&1==(b>>c&1);6>c?this.modules[c][8]=d:8>c?this.modules[c+1][8]=d:this.modules[this.moduleCount-15+c][8]=d}for(c=0;15>c;c++)d=!a&&1==(b>>c&1),8>c?this.modules[8][this.moduleCount-
c-1]=d:9>c?this.modules[8][15-c-1+1]=d:this.modules[8][15-c-1]=d;this.modules[this.moduleCount-8][8]=!a},mapData:function(a,b){for(var c=-1,d=this.moduleCount-1,e=7,f=0,h=this.moduleCount-1;0<h;h-=2)for(6==h&&h--;;){for(var g=0;2>g;g++)if(null==this.modules[d][h-g]){var l=!1;f<a.length&&(l=1==(a[f]>>>e&1));m.getMask(b,d,h-g)&&(l=!l);this.modules[d][h-g]=l;e--; -1==e&&(f++,e=7)}d+=c;if(0>d||this.moduleCount<=d){d-=c;c=-c;break}}}};v.PAD0=236;v.PAD1=17;v.createData=function(a,b,c){b=w.getRSBlocks(a,
b);for(var d=new B,e=0;e<c.length;e++){var f=c[e];d.put(f.mode,4);d.put(f.getLength(),m.getLengthInBits(f.mode,a));f.write(d)}for(e=a=0;e<b.length;e++)a+=b[e].dataCount;if(d.getLengthInBits()>8*a)throw Error("code length overflow. ("+d.getLengthInBits()+"\x3e"+8*a+")");for(d.getLengthInBits()+4<=8*a&&d.put(0,4);0!=d.getLengthInBits()%8;)d.putBit(!1);for(;!(d.getLengthInBits()>=8*a);){d.put(v.PAD0,8);if(d.getLengthInBits()>=8*a)break;d.put(v.PAD1,8)}return v.createBytes(d,b)};v.createBytes=function(a,
b){for(var c=0,d=0,e=0,f=Array(b.length),h=Array(b.length),g=0;g<b.length;g++){var l=b[g].dataCount,C=b[g].totalCount-l,d=Math.max(d,l),e=Math.max(e,C);f[g]=Array(l);for(var n=0;n<f[g].length;n++)f[g][n]=255&a.buffer[n+c];c+=l;n=m.getErrorCorrectPolynomial(C);l=(new E(f[g],n.getLength()-1)).mod(n);h[g]=Array(n.getLength()-1);for(n=0;n<h[g].length;n++)C=n+l.getLength()-h[g].length,h[g][n]=0<=C?l.get(C):0}for(n=g=0;n<b.length;n++)g+=b[n].totalCount;a=Array(g);for(n=c=0;n<d;n++)for(g=0;g<b.length;g++)n<
f[g].length&&(a[c++]=f[g][n]);for(n=0;n<e;n++)for(g=0;g<b.length;g++)n<h[g].length&&(a[c++]=h[g][n]);return a};for(var u={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},z={L:1,M:0,Q:3,H:2},m={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,
58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(a){for(var b=a<<10;0<=m.getBCHDigit(b)-m.getBCHDigit(m.G15);)b^=m.G15<<m.getBCHDigit(b)-m.getBCHDigit(m.G15);
return(a<<10|b)^m.G15_MASK},getBCHTypeNumber:function(a){for(var b=a<<12;0<=m.getBCHDigit(b)-m.getBCHDigit(m.G18);)b^=m.G18<<m.getBCHDigit(b)-m.getBCHDigit(m.G18);return a<<12|b},getBCHDigit:function(a){for(var b=0;0!=a;)b++,a>>>=1;return b},getPatternPosition:function(a){return m.PATTERN_POSITION_TABLE[a-1]},getMask:function(a,b,c){switch(a){case 0:return 0==(b+c)%2;case 1:return 0==b%2;case 2:return 0==c%3;case 3:return 0==(b+c)%3;case 4:return 0==(Math.floor(b/2)+Math.floor(c/3))%2;case 5:return 0==
b*c%2+b*c%3;case 6:return 0==(b*c%2+b*c%3)%2;case 7:return 0==(b*c%3+(b+c)%2)%2;default:throw Error("bad maskPattern:"+a);}},getErrorCorrectPolynomial:function(a){for(var b=new E([1],0),c=0;c<a;c++)b=b.multiply(new E([1,q.gexp(c)],0));return b},getLengthInBits:function(a,b){if(1<=b&&10>b)switch(a){case u.MODE_NUMBER:return 10;case u.MODE_ALPHA_NUM:return 9;case u.MODE_8BIT_BYTE:return 8;case u.MODE_KANJI:return 8;default:throw Error("mode:"+a);}else if(27>b)switch(a){case u.MODE_NUMBER:return 12;
case u.MODE_ALPHA_NUM:return 11;case u.MODE_8BIT_BYTE:return 16;case u.MODE_KANJI:return 10;default:throw Error("mode:"+a);}else if(41>b)switch(a){case u.MODE_NUMBER:return 14;case u.MODE_ALPHA_NUM:return 13;case u.MODE_8BIT_BYTE:return 16;case u.MODE_KANJI:return 12;default:throw Error("mode:"+a);}else throw Error("type:"+b);},getLostPoint:function(a){for(var b=a.getModuleCount(),c=0,d=0;d<b;d++)for(var e=0;e<b;e++){for(var f=0,h=a.isDark(d,e),g=-1;1>=g;g++)if(!(0>d+g||b<=d+g))for(var l=-1;1>=l;l++)0>
e+l||b<=e+l||0==g&&0==l||h!=a.isDark(d+g,e+l)||f++;5<f&&(c+=3+f-5)}for(d=0;d<b-1;d++)for(e=0;e<b-1;e++)if(f=0,a.isDark(d,e)&&f++,a.isDark(d+1,e)&&f++,a.isDark(d,e+1)&&f++,a.isDark(d+1,e+1)&&f++,0==f||4==f)c+=3;for(d=0;d<b;d++)for(e=0;e<b-6;e++)a.isDark(d,e)&&!a.isDark(d,e+1)&&a.isDark(d,e+2)&&a.isDark(d,e+3)&&a.isDark(d,e+4)&&!a.isDark(d,e+5)&&a.isDark(d,e+6)&&(c+=40);for(e=0;e<b;e++)for(d=0;d<b-6;d++)a.isDark(d,e)&&!a.isDark(d+1,e)&&a.isDark(d+2,e)&&a.isDark(d+3,e)&&a.isDark(d+4,e)&&!a.isDark(d+
5,e)&&a.isDark(d+6,e)&&(c+=40);for(e=f=0;e<b;e++)for(d=0;d<b;d++)a.isDark(d,e)&&f++;return c+Math.abs(100*f/b/b-50)/5*10}},q={glog:function(a){if(1>a)throw Error("glog("+a+")");return q.LOG_TABLE[a]},gexp:function(a){for(;0>a;)a+=255;for(;256<=a;)a-=255;return q.EXP_TABLE[a]},EXP_TABLE:Array(256),LOG_TABLE:Array(256)},p=0;8>p;p++)q.EXP_TABLE[p]=1<<p;for(p=8;256>p;p++)q.EXP_TABLE[p]=q.EXP_TABLE[p-4]^q.EXP_TABLE[p-5]^q.EXP_TABLE[p-6]^q.EXP_TABLE[p-8];for(p=0;255>p;p++)q.LOG_TABLE[q.EXP_TABLE[p]]=p;
E.prototype={get:function(a){return this.num[a]},getLength:function(){return this.num.length},multiply:function(a){for(var b=Array(this.getLength()+a.getLength()-1),c=0;c<this.getLength();c++)for(var d=0;d<a.getLength();d++)b[c+d]^=q.gexp(q.glog(this.get(c))+q.glog(a.get(d)));return new E(b,0)},mod:function(a){if(0>this.getLength()-a.getLength())return this;for(var b=q.glog(this.get(0))-q.glog(a.get(0)),c=Array(this.getLength()),d=0;d<this.getLength();d++)c[d]=this.get(d);for(d=0;d<a.getLength();d++)c[d]^=
q.gexp(q.glog(a.get(d))+b);return(new E(c,0)).mod(a)}};w.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,
36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,
15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],
[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],
[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],
[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];w.getRSBlocks=function(a,b){var c=w.getRsBlockTable(a,b);if(void 0==c)throw Error("bad rs block @ typeNumber:"+
a+"/errorCorrectLevel:"+b);a=c.length/3;b=[];for(var d=0;d<a;d++)for(var e=c[3*d+0],f=c[3*d+1],h=c[3*d+2],g=0;g<e;g++)b.push(new w(f,h));return b};w.getRsBlockTable=function(a,b){switch(b){case z.L:return w.RS_BLOCK_TABLE[4*(a-1)+0];case z.M:return w.RS_BLOCK_TABLE[4*(a-1)+1];case z.Q:return w.RS_BLOCK_TABLE[4*(a-1)+2];case z.H:return w.RS_BLOCK_TABLE[4*(a-1)+3]}};B.prototype={get:function(a){return 1==(this.buffer[Math.floor(a/8)]>>>7-a%8&1)},put:function(a,b){for(var c=0;c<b;c++)this.putBit(1==
(a>>>b-c-1&1))},getLengthInBits:function(){return this.length},putBit:function(a){var b=Math.floor(this.length/8);this.buffer.length<=b&&this.buffer.push(0);a&&(this.buffer[b]|=128>>>this.length%8);this.length++}};var F=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],
[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]],p=function(){var a=function(a,c){this._el=
a;this._htOption=c};a.prototype.draw=function(a){function c(a,b){a=document.createElementNS("http://www.w3.org/2000/svg",a);for(var c in b)b.hasOwnProperty(c)&&a.setAttribute(c,b[c]);return a}var b=this._htOption,e=this._el,f=a.getModuleCount();this.clear();var h=c("svg",{viewBox:"0 0 "+String(f)+" "+String(f),width:"100%",height:"100%",fill:b.colorLight});h.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink");e.appendChild(h);h.appendChild(c("rect",{fill:b.colorDark,
width:"1",height:"1",id:"template"}));for(b=0;b<f;b++)for(e=0;e<f;e++)if(a.isDark(b,e)){var g=c("use",{x:String(b),y:String(e)});g.setAttributeNS("http://www.w3.org/1999/xlink","href","#template");h.appendChild(g)}};a.prototype.clear=function(){for(;this._el.hasChildNodes();)this._el.removeChild(this._el.lastChild)};return a}(),H="svg"===document.documentElement.tagName.toLowerCase()?p:"undefined"==typeof CanvasRenderingContext2D?function(){var a=function(a,c){this._el=a;this._htOption=c};a.prototype.draw=
function(a){for(var c=this._htOption,b=this._el,e=a.getModuleCount(),f=Math.floor(c.width/e),h=Math.floor(c.height/e),g=['\x3ctable style\x3d"border:0;border-collapse:collapse;"\x3e'],l=0;l<e;l++){g.push("\x3ctr\x3e");for(var m=0;m<e;m++)g.push('\x3ctd style\x3d"border:0;border-collapse:collapse;padding:0;margin:0;width:'+f+"px;height:"+h+"px;background-color:"+(a.isDark(l,m)?c.colorDark:c.colorLight)+';"\x3e\x3c/td\x3e');g.push("\x3c/tr\x3e")}g.push("\x3c/table\x3e");b.innerHTML=g.join("");a=b.childNodes[0];
b=(c.width-a.offsetWidth)/2;c=(c.height-a.offsetHeight)/2;0<b&&0<c&&(a.style.margin=c+"px "+b+"px")};a.prototype.clear=function(){this._el.innerHTML=""};return a}():function(){function a(){this._elImage.src=this._elCanvas.toDataURL("image/png");this._elImage.style.display="block";this._elCanvas.style.display="none"}function b(a,c){var b=this;b._fFail=c;b._fSuccess=a;null===b._bSupportDataURI?(a=document.createElement("img"),c=function(){b._bSupportDataURI=!1;b._fFail&&_fFail.call(b)},a.onabort=c,
a.onerror=c,a.onload=function(){b._bSupportDataURI=!0;b._fSuccess&&b._fSuccess.call(b)},a.src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg\x3d\x3d"):!0===b._bSupportDataURI&&b._fSuccess?b._fSuccess.call(b):!1===b._bSupportDataURI&&b._fFail&&b._fFail.call(b)}if(this._android&&2.1>=this._android){var c=1/window.devicePixelRatio,d=CanvasRenderingContext2D.prototype.drawImage;CanvasRenderingContext2D.prototype.drawImage=
function(a,b,e,l,m,n,p,q,u){if("nodeName"in a&&/img/i.test(a.nodeName))for(var f=arguments.length-1;1<=f;f--)arguments[f]*=c;else"undefined"==typeof q&&(arguments[1]*=c,arguments[2]*=c,arguments[3]*=c,arguments[4]*=c);d.apply(this,arguments)}}var e=function(a,b){this._bIsPainted=!1;this._android=J();this._htOption=b;this._elCanvas=document.createElement("canvas");this._elCanvas.width=b.width;this._elCanvas.height=b.height;a.appendChild(this._elCanvas);this._el=a;this._oContext=this._elCanvas.getContext("2d");
this._bIsPainted=!1;this._elImage=document.createElement("img");this._elImage.alt="Scan me!";this._elImage.style.display="none";this._el.appendChild(this._elImage);this._bSupportDataURI=null};e.prototype.draw=function(a){var b=this._elImage,c=this._oContext,d=this._htOption,e=a.getModuleCount(),f=d.width/e,m=d.height/e,p=Math.round(f),q=Math.round(m);b.style.display="none";this.clear();for(b=0;b<e;b++)for(var u=0;u<e;u++){var x=a.isDark(b,u),v=u*f,w=b*m;c.strokeStyle=x?d.colorDark:d.colorLight;c.lineWidth=
1;c.fillStyle=x?d.colorDark:d.colorLight;c.fillRect(v,w,f,m);c.strokeRect(Math.floor(v)+.5,Math.floor(w)+.5,p,q);c.strokeRect(Math.ceil(v)-.5,Math.ceil(w)-.5,p,q)}this._bIsPainted=!0};e.prototype.makeImage=function(){this._bIsPainted&&b.call(this,a)};e.prototype.isPainted=function(){return this._bIsPainted};e.prototype.clear=function(){this._oContext.clearRect(0,0,this._elCanvas.width,this._elCanvas.height);this._bIsPainted=!1};e.prototype.round=function(a){return a?Math.floor(1E3*a)/1E3:a};return e}();
D=function(a,b){this._htOption={width:256,height:256,typeNumber:4,colorDark:"#000000",colorLight:"#ffffff",correctLevel:z.H};"string"===typeof b&&(b={text:b});if(b)for(var c in b)this._htOption[c]=b[c];"string"==typeof a&&(a=document.getElementById(a));this._android=J();this._el=a;this._oQRCode=null;this._oDrawing=new H(this._el,this._htOption);this._htOption.text&&this.makeCode(this._htOption.text)};D.prototype.makeCode=function(a){var b=this._htOption.correctLevel,c=1,d;d=encodeURI(a).toString().replace(/\%[0-9a-fA-F]{2}/g,
"a");d=d.length+(d.length!=a?3:0);for(var e=0,f=F.length;e<=f;e++){var h=0;switch(b){case z.L:h=F[e][0];break;case z.M:h=F[e][1];break;case z.Q:h=F[e][2];break;case z.H:h=F[e][3]}if(d<=h)break;else c++}if(c>F.length)throw Error("Too long data");this._oQRCode=new v(c,this._htOption.correctLevel);this._oQRCode.addData(a);this._oQRCode.make();this._el.title=a;this._oDrawing.draw(this._oQRCode);this.makeImage()};D.prototype.makeImage=function(){"function"==typeof this._oDrawing.makeImage&&(!this._android||
3<=this._android)&&this._oDrawing.makeImage()};D.prototype.clear=function(){this._oDrawing.clear()};D.CorrectLevel=z;window.QRCode=D})()})},"dijit/main":function(){define(["dojo/_base/kernel"],function(x){return x.dijit})},"dojox/main":function(){define(["dojo/_base/kernel"],function(x){return x.dojox})},"libs/arcgis-html-sanitizer/arcgis-html-sanitizer":function(){!function(x,B){"object"==typeof exports&&"undefined"!=typeof module?module.exports=B():"function"==typeof define&&define.amd?define(B):
(x=x||self).Sanitizer=B()}(this,function(){function x(a,b){return a(b={exports:{}},b.exports),b.exports}function B(){return{"align-content":!1,"align-items":!1,"align-self":!1,"alignment-adjust":!1,"alignment-baseline":!1,all:!1,"anchor-point":!1,animation:!1,"animation-delay":!1,"animation-direction":!1,"animation-duration":!1,"animation-fill-mode":!1,"animation-iteration-count":!1,"animation-name":!1,"animation-play-state":!1,"animation-timing-function":!1,azimuth:!1,"backface-visibility":!1,background:!0,
"background-attachment":!0,"background-clip":!0,"background-color":!0,"background-image":!0,"background-origin":!0,"background-position":!0,"background-repeat":!0,"background-size":!0,"baseline-shift":!1,binding:!1,bleed:!1,"bookmark-label":!1,"bookmark-level":!1,"bookmark-state":!1,border:!0,"border-bottom":!0,"border-bottom-color":!0,"border-bottom-left-radius":!0,"border-bottom-right-radius":!0,"border-bottom-style":!0,"border-bottom-width":!0,"border-collapse":!0,"border-color":!0,"border-image":!0,
"border-image-outset":!0,"border-image-repeat":!0,"border-image-slice":!0,"border-image-source":!0,"border-image-width":!0,"border-left":!0,"border-left-color":!0,"border-left-style":!0,"border-left-width":!0,"border-radius":!0,"border-right":!0,"border-right-color":!0,"border-right-style":!0,"border-right-width":!0,"border-spacing":!0,"border-style":!0,"border-top":!0,"border-top-color":!0,"border-top-left-radius":!0,"border-top-right-radius":!0,"border-top-style":!0,"border-top-width":!0,"border-width":!0,
bottom:!1,"box-decoration-break":!0,"box-shadow":!0,"box-sizing":!0,"box-snap":!0,"box-suppress":!0,"break-after":!0,"break-before":!0,"break-inside":!0,"caption-side":!1,chains:!1,clear:!0,clip:!1,"clip-path":!1,"clip-rule":!1,color:!0,"color-interpolation-filters":!0,"column-count":!1,"column-fill":!1,"column-gap":!1,"column-rule":!1,"column-rule-color":!1,"column-rule-style":!1,"column-rule-width":!1,"column-span":!1,"column-width":!1,columns:!1,contain:!1,content:!1,"counter-increment":!1,"counter-reset":!1,
"counter-set":!1,crop:!1,cue:!1,"cue-after":!1,"cue-before":!1,cursor:!1,direction:!1,display:!0,"display-inside":!0,"display-list":!0,"display-outside":!0,"dominant-baseline":!1,elevation:!1,"empty-cells":!1,filter:!1,flex:!1,"flex-basis":!1,"flex-direction":!1,"flex-flow":!1,"flex-grow":!1,"flex-shrink":!1,"flex-wrap":!1,float:!1,"float-offset":!1,"flood-color":!1,"flood-opacity":!1,"flow-from":!1,"flow-into":!1,font:!0,"font-family":!0,"font-feature-settings":!0,"font-kerning":!0,"font-language-override":!0,
"font-size":!0,"font-size-adjust":!0,"font-stretch":!0,"font-style":!0,"font-synthesis":!0,"font-variant":!0,"font-variant-alternates":!0,"font-variant-caps":!0,"font-variant-east-asian":!0,"font-variant-ligatures":!0,"font-variant-numeric":!0,"font-variant-position":!0,"font-weight":!0,grid:!1,"grid-area":!1,"grid-auto-columns":!1,"grid-auto-flow":!1,"grid-auto-rows":!1,"grid-column":!1,"grid-column-end":!1,"grid-column-start":!1,"grid-row":!1,"grid-row-end":!1,"grid-row-start":!1,"grid-template":!1,
"grid-template-areas":!1,"grid-template-columns":!1,"grid-template-rows":!1,"hanging-punctuation":!1,height:!0,hyphens:!1,icon:!1,"image-orientation":!1,"image-resolution":!1,"ime-mode":!1,"initial-letters":!1,"inline-box-align":!1,"justify-content":!1,"justify-items":!1,"justify-self":!1,left:!1,"letter-spacing":!0,"lighting-color":!0,"line-box-contain":!1,"line-break":!1,"line-grid":!1,"line-height":!1,"line-snap":!1,"line-stacking":!1,"line-stacking-ruby":!1,"line-stacking-shift":!1,"line-stacking-strategy":!1,
"list-style":!0,"list-style-image":!0,"list-style-position":!0,"list-style-type":!0,margin:!0,"margin-bottom":!0,"margin-left":!0,"margin-right":!0,"margin-top":!0,"marker-offset":!1,"marker-side":!1,marks:!1,mask:!1,"mask-box":!1,"mask-box-outset":!1,"mask-box-repeat":!1,"mask-box-slice":!1,"mask-box-source":!1,"mask-box-width":!1,"mask-clip":!1,"mask-image":!1,"mask-origin":!1,"mask-position":!1,"mask-repeat":!1,"mask-size":!1,"mask-source-type":!1,"mask-type":!1,"max-height":!0,"max-lines":!1,
"max-width":!0,"min-height":!0,"min-width":!0,"move-to":!1,"nav-down":!1,"nav-index":!1,"nav-left":!1,"nav-right":!1,"nav-up":!1,"object-fit":!1,"object-position":!1,opacity:!1,order:!1,orphans:!1,outline:!1,"outline-color":!1,"outline-offset":!1,"outline-style":!1,"outline-width":!1,overflow:!1,"overflow-wrap":!1,"overflow-x":!1,"overflow-y":!1,padding:!0,"padding-bottom":!0,"padding-left":!0,"padding-right":!0,"padding-top":!0,page:!1,"page-break-after":!1,"page-break-before":!1,"page-break-inside":!1,
"page-policy":!1,pause:!1,"pause-after":!1,"pause-before":!1,perspective:!1,"perspective-origin":!1,pitch:!1,"pitch-range":!1,"play-during":!1,position:!1,"presentation-level":!1,quotes:!1,"region-fragment":!1,resize:!1,rest:!1,"rest-after":!1,"rest-before":!1,richness:!1,right:!1,rotation:!1,"rotation-point":!1,"ruby-align":!1,"ruby-merge":!1,"ruby-position":!1,"shape-image-threshold":!1,"shape-outside":!1,"shape-margin":!1,size:!1,speak:!1,"speak-as":!1,"speak-header":!1,"speak-numeral":!1,"speak-punctuation":!1,
"speech-rate":!1,stress:!1,"string-set":!1,"tab-size":!1,"table-layout":!1,"text-align":!0,"text-align-last":!0,"text-combine-upright":!0,"text-decoration":!0,"text-decoration-color":!0,"text-decoration-line":!0,"text-decoration-skip":!0,"text-decoration-style":!0,"text-emphasis":!0,"text-emphasis-color":!0,"text-emphasis-position":!0,"text-emphasis-style":!0,"text-height":!0,"text-indent":!0,"text-justify":!0,"text-orientation":!0,"text-overflow":!0,"text-shadow":!0,"text-space-collapse":!0,"text-transform":!0,
"text-underline-position":!0,"text-wrap":!0,top:!1,transform:!1,"transform-origin":!1,"transform-style":!1,transition:!1,"transition-delay":!1,"transition-duration":!1,"transition-property":!1,"transition-timing-function":!1,"unicode-bidi":!1,"vertical-align":!1,visibility:!1,"voice-balance":!1,"voice-duration":!1,"voice-family":!1,"voice-pitch":!1,"voice-range":!1,"voice-rate":!1,"voice-stress":!1,"voice-volume":!1,volume:!1,"white-space":!1,widows:!1,width:!0,"will-change":!1,"word-break":!0,"word-spacing":!0,
"word-wrap":!0,"wrap-flow":!1,"wrap-through":!1,"writing-mode":!1,"z-index":!1}}function H(a){var b=a||{},c={},t;for(t in b)c[t]=b[t];(a=c).whiteList=a.whiteList||l.whiteList;a.onAttr=a.onAttr||l.onAttr;a.onIgnoreAttr=a.onIgnoreAttr||l.onIgnoreAttr;a.safeAttrValue=a.safeAttrValue||l.safeAttrValue;this.options=a}function D(a){return a.replace(Y,"\x26lt;").replace(Z,"\x26gt;")}function N(a){return a.replace(aa,"\x26quot;")}function v(a){return a.replace(ba,'"')}function E(a){return a.replace(ca,function(a,
b){return"x"===b[0]||"X"===b[0]?String.fromCharCode(parseInt(b.substr(1),16)):String.fromCharCode(parseInt(b,10))})}function w(a){return a.replace(da,":").replace(ea," ")}function O(a){for(var b="",c=0,t=a.length;c<t;c++)b+=32>a.charCodeAt(c)?" ":a.charAt(c);return A(b)}function J(a){return a=O(a=w(a=E(a=v(a))))}function u(a){return a=D(a=N(a))}function z(a,b){for(;b<a.length;b++){var c=a[b];if(" "!==c)return"\x3d"===c?b:-1}}function m(a,b){for(;0<b;b--){var c=a[b];if(" "!==c)return"\x3d"===c?b:-1}}
function q(a){return'"'===a[0]&&'"'===a[a.length-1]||"'"===a[0]&&"'"===a[a.length-1]?a.substr(1,a.length-2):a}function p(a){var b=a||{},c={},d;for(d in b)c[d]=b[d];(a=c).stripIgnoreTag&&(a.onIgnoreTag&&console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'),a.onIgnoreTag=y.onIgnoreTagStripAll);a.whiteList=a.whiteList||y.whiteList;a.onTag=a.onTag||y.onTag;a.onTagAttr=a.onTagAttr||y.onTagAttr;a.onIgnoreTag=a.onIgnoreTag||y.onIgnoreTag;a.onIgnoreTagAttr=
a.onIgnoreTagAttr||y.onIgnoreTagAttr;a.safeAttrValue=a.safeAttrValue||y.safeAttrValue;a.escapeHtml=a.escapeHtml||y.escapeHtml;this.options=a;!1===a.css?this.cssFilter=!1:(a.css=a.css||{},this.cssFilter=new fa(a.css))}var F,S,a=Object.prototype,b=Function.prototype.toString,c=a.hasOwnProperty,d=b.call(Object),e=a.toString,f=(F=Object.getPrototypeOf,S=Object,function(a){return F(S(a))}),h=function(a){var t;if(!(t=!a||"object"!=typeof a||"[object Object]"!=e.call(a))&&(t=!1,null!=a&&"function"!=typeof a.toString))try{t=
!!(a+"")}catch(r){}if(t)return!1;a=f(a);if(null===a)return!0;a=c.call(a,"constructor")&&a.constructor;return"function"==typeof a&&a instanceof a&&b.call(a)==d},g=/javascript\s*\:/gim,l={whiteList:B(),getDefaultWhiteList:B,onAttr:function(a,b,c){},onIgnoreAttr:function(a,b,c){},safeAttrValue:function(a,b){return g.test(b)?"":b}},C=function(a){return String.prototype.trim?a.trim():a.replace(/(^\s*)|(\s*$)/g,"")},n=function(a){return String.prototype.trimRight?a.trimRight():a.replace(/(\s*$)/g,"")},
V=function(a,b){function c(){if(!e){var c=C(a.slice(t,k)),d=c.indexOf(":");if(-1!==d){var r=C(c.slice(0,d)),d=C(c.slice(d+1));r&&(c=b(t,f.length,r,d,c))&&(f+=c+"; ")}}t=k+1}";"!==(a=n(a))[a.length-1]&&(a+=";");for(var d=a.length,e=!1,t=0,k=0,f="";k<d;k++){var g=a[k];if("/"===g&&"*"===a[k+1]){g=a.indexOf("*/",k+2);if(-1===g)break;t=(k=g+1)+1;e=!1}else"("===g?e=!0:")"===g?e=!1:";"===g?e||c():"\n"===g&&c()}return C(f)};H.prototype.process=function(a){if(!(a=(a=a||"").toString()))return"";var b=this.options,
c=b.whiteList,d=b.onAttr,e=b.onIgnoreAttr,t=b.safeAttrValue;return V(a,function(a,b,k,r,f){var g=c[k],G=!1;if(!0===g?G=g:"function"==typeof g?G=g(r):g instanceof RegExp&&(G=g.test(r)),!0!==G&&(G=!1),r=t(k,r)){var K;a={position:b,sourcePosition:a,source:f,isWhite:G};return G?null==(K=d(k,r,a))?k+":"+r:K:null==(K=e(k,r,a))?void 0:K}})};var a=x(function(a,b){for(var c in(b=a.exports=function(a,b){return(new H(b)).process(a)}).FilterCSS=H,l)b[c]=l[c]}),P=(a.FilterCSS,function(a,b){var c,d;if(Array.prototype.indexOf)return a.indexOf(b);
c=0;for(d=a.length;c<d;c++)if(a[c]===b)return c;return-1}),W=function(a,b,c){var d,e;if(Array.prototype.forEach)return a.forEach(b,c);d=0;for(e=a.length;d<e;d++)b.call(c,a[d],d,a)},A=function(a){return String.prototype.trim?a.trim():a.replace(/(^\s*)|(\s*$)/g,"")},Q=function(a){return(a=/\s|\n|\t/.exec(a))?a.index:-1},X=a.getDefaultWhiteList,R=new a.FilterCSS,Y=/</g,Z=/>/g,aa=/"/g,ba=/&quot;/g,ca=/&#([a-zA-Z0-9]*);?/gim,da=/&colon;?/gim,ea=/&newline;?/gim,L=/((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi,
T=/e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,U=/u\s*r\s*l\s*\(.*/gi,ga=/\x3c!--[\s\S]*?--\x3e/g,y={whiteList:{a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","loop","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],
dl:[],dt:[],em:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],sup:[],strong:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan",
"align","valign"],tt:[],u:[],ul:[],video:"autoplay controls loop preload src height width".split(" ")},getDefaultWhiteList:function(){return{a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","loop","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],
details:["open"],div:[],dl:[],dt:[],em:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],sup:[],strong:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align",
"valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:"autoplay controls loop preload src height width".split(" ")}},onTag:function(a,b,c){},onIgnoreTag:function(a,b,c){},onTagAttr:function(a,b,c){},onIgnoreTagAttr:function(a,b,c){},safeAttrValue:function(a,b,c,d){if(c=J(c),"href"===b||"src"===b){if("#"===(c=A(c)))return"#";if("http://"!==c.substr(0,7)&&"https://"!==c.substr(0,8)&&"mailto:"!==c.substr(0,7)&&"tel:"!==c.substr(0,4)&&"#"!==c[0]&&"/"!==c[0])return""}else if("background"===
b){if(L.lastIndex=0,L.test(c))return""}else if("style"===b){if((T.lastIndex=0,T.test(c))||(U.lastIndex=0,U.test(c)&&(L.lastIndex=0,L.test(c))))return"";!1!==d&&(c=(d=d||R).process(c))}return c=u(c)},escapeHtml:D,escapeQuote:N,unescapeQuote:v,escapeHtmlEntities:E,escapeDangerHtml5Entities:w,clearNonPrintableCharacter:O,friendlyAttrValue:J,escapeAttrValue:u,onIgnoreTagStripAll:function(){return""},StripTagBody:function(a,b){"function"!=typeof b&&(b=function(){});var c=!Array.isArray(a),d=[],e=!1;return{onIgnoreTag:function(k,
t,g){return c||-1!==P(a,k)?g.isClosing?(d.push([!1!==e?e:g.position,g.position+10]),e=!1,"[/removed]"):(e||(e=g.position),"[removed]"):b(k,t,g)},remove:function(a){var b="",c=0;return W(d,function(d){b+=a.slice(c,d[0]);c=d[1]}),b+=a.slice(c)}}},stripCommentTag:function(a){return a.replace(ga,"")},stripBlankChar:function(a){a=a.split("");return(a=a.filter(function(a){a=a.charCodeAt(0);return 127!==a&&(!(31>=a)||10===a||13===a)})).join("")},cssFilter:R,getDefaultCSSWhiteList:X},ha=/[^a-zA-Z0-9_:\.\-]/gim,
M={parseTag:function(a,b,c){for(var d="",e=0,k=!1,g=!1,f=0,t=a.length,r="",h="",f=0;f<t;f++)h=a.charAt(f),!1===k?"\x3c"===h&&(k=f):!1===g?"\x3c"===h?(d+=c(a.slice(e,f)),e=k=f):"\x3e"===h?(d+=c(a.slice(e,k)),e=h=a.slice(k,f+1),r=Q(e),e=-1===r?e.slice(1,-1):e.slice(1,r+1),r=("/"===(e=A(e).toLowerCase()).slice(0,1)&&(e=e.slice(1)),"/"===e.slice(-1)&&(e=e.slice(0,-1)),e),d+=b(k,d.length,r,h,"\x3c/"===h.slice(0,2)),e=f+1,k=!1):'"'!==h&&"'"!==h||"\x3d"!==a.charAt(f-1)||(g=h):h===g&&(g=!1);return e<a.length&&
(d+=c(a.substr(e))),d},parseAttr:function(a,b){function c(a,c){1>(a=(a=A(a)).replace(ha,"").toLowerCase()).length||(a=b(a,c||""))&&e.push(a)}for(var d=0,e=[],k=!1,g=a.length,f=0;f<g;f++){var h;h=a.charAt(f);if(!1!==k||"\x3d"!==h)if(!1===k||f!==d||'"'!==h&&"'"!==h||"\x3d"!==a.charAt(f-1))/\s|\n|\t/.test(h)&&((a=a.replace(/\s|\n|\t/g," "),!1===k)?-1===(h=z(a,f))?(c(A(a.slice(d,f))),k=!1,d=f+1):f=h-1:-1===(h=m(a,f-1))&&(c(k,q(A(a.slice(d,f)))),k=!1,d=f+1));else{if(-1===(h=a.indexOf(h,f+1)))break;c(k,
A(a.slice(d+1,h)));k=!1;d=(f=h)+1}else k=a.slice(d,f),d=f+1}return d<a.length&&(!1===k?c(a.slice(d)):c(k,q(A(a.slice(d))))),A(e.join(" "))}},fa=a.FilterCSS,ia=M.parseTag,ja=M.parseAttr;p.prototype.process=function(a){if(!(a=(a=a||"").toString()))return"";var b=this.options,c=b.whiteList,d=b.onTag,e=b.onIgnoreTag,f=b.onTagAttr,g=b.onIgnoreTagAttr,h=b.safeAttrValue,m=b.escapeHtml,t=this.cssFilter;b.stripBlankChar&&(a=y.stripBlankChar(a));b.allowCommentTag||(a=y.stripCommentTag(a));var l=!1;b.stripIgnoreTagBody&&
(l=y.StripTagBody(b.stripIgnoreTagBody,e),e=l.onIgnoreTag);a=ia(a,function(a,b,k,r,l){b={sourcePosition:a,position:b,isClosing:l,isWhite:c.hasOwnProperty(k)};if(null!=(a=d(k,r,b)))return a;if(b.isWhite){if(b.isClosing)return"\x3c/"+k+"\x3e";a=function(a){var b=Q(a);if(-1===b)return{html:"",closing:"/"===a[a.length-2]};b="/"===(a=A(a.slice(b+1,-1)))[a.length-1];return b&&(a=A(a.slice(0,-1))),{html:a,closing:b}}(r);var n=c[k];b=ja(a.html,function(a,b){var c,d=-1!==P(n,a);return null==(c=f(k,a,b,d))?
d?(b=h(k,a,b,t))?a+'\x3d"'+b+'"':a:null==(c=g(k,a,b,d))?void 0:c:c});r="\x3c"+k;return b&&(r+=" "+b),a.closing&&(r+=" /"),r+="\x3e"}return null==(a=e(k,r,b))?m(r):a},m);return l&&(a=l.remove(a)),a};var I=x(function(a,b){function c(a,b){return(new p(b)).process(a)}for(var d in(b=a.exports=c).filterXSS=c,b.FilterXSS=p,y)b[d]=y[d];for(d in M)b[d]=M[d];"undefined"!=typeof self&&"undefined"!=typeof DedicatedWorkerGlobalScope&&self instanceof DedicatedWorkerGlobalScope&&(self.filterXSS=a.exports)});I.filterXSS;
I.FilterXSS;return function(){function a(a,b){var c,d=this;this.arcgisWhiteList={a:["href","target","style"],img:"src width height border alt style".split(" "),video:"autoplay controls height loop muted poster preload width".split(" "),audio:["autoplay","controls","loop","muted","preload"],source:["media","src","type"],span:["style"],table:"width height cellpadding cellspacing border style".split(" "),div:["style","align"],font:["size","color","style"],tr:["height","valign","align","style"],td:"height width valign align colspan rowspan nowrap style".split(" "),
th:"height width valign align colspan rowspan nowrap style".split(" "),p:["style"],b:[],strong:[],i:[],em:[],u:[],br:[],li:[],ul:[],ol:[],hr:[],tbody:[]};this.allowedProtocols="http https mailto iform tel flow lfmobile arcgis-navigator arcgis-appstudio-player arcgis-survey123 arcgis-collector arcgis-workforce arcgis-explorer arcgis-trek2there mspbi comgooglemaps pdfefile pdfehttp pdfehttps boxapp boxemm awb awbs gropen radarscope".split(" ");this.arcgisFilterOptions={allowCommentTag:!0,safeAttrValue:function(a,
b,c,e){return"a"===a&&"href"===b||("img"===a||"source"===a)&&"src"===b?d.sanitizeUrl(c):I.safeAttrValue(a,b,c,e)}};a&&!b?c=a:a&&b?(c=Object.create(this.arcgisFilterOptions),Object.keys(a).forEach(function(b){"whiteList"===b?c.whiteList=d._extendObjectOfArrays([d.arcgisWhiteList,a.whiteList||{}]):c[b]=a[b]})):(c=Object.create(this.arcgisFilterOptions)).whiteList=this.arcgisWhiteList;this.xssFilterOptions=c;this._xssFilter=new I.FilterXSS(c);this.xss=I}return a.prototype.sanitize=function(a,b){switch(void 0===
b&&(b={}),typeof a){case "number":return isNaN(a)||!isFinite(a)?null:a;case "boolean":return a;case "string":return this._xssFilter.process(a);case "object":return this._iterateOverObject(a,b);default:if(!b.allowUndefined||void 0!==a)return null}},a.prototype.sanitizeUrl=function(a){var b=this._trim(a.substring(0,a.indexOf(":")));return"/"===a||"#"===a||"#"===a[0]||-1<this.allowedProtocols.indexOf(b.toLowerCase())?I.escapeAttrValue(a):""},a.prototype.validate=function(a,b){void 0===b&&(b={});b=this.sanitize(a,
b);return{isValid:a===b,sanitized:b}},a.prototype._extendObjectOfArrays=function(a){var b={};return a.forEach(function(a){Object.keys(a).forEach(function(c){Array.isArray(a[c])&&Array.isArray(b[c])?b[c]=b[c].concat(a[c]):b[c]=a[c]})}),b},a.prototype._iterateOverObject=function(a,b){var c=this;void 0===b&&(b={});try{var d=!1,e=void 0;if(Array.isArray(a))e=a.reduce(function(a,e){var f=c.validate(e,b);return f.isValid?a.concat([e]):(d=!0,a.concat([f.sanitized]))},[]);else{if(!h(a))return b.allowUndefined&&
void 0===a?void 0:null;e=Object.keys(a).reduce(function(e,f){var g=a[f],h=c.validate(g,b);return h.isValid?e[f]=g:(d=!0,e[f]=h.sanitized),e},{})}return d?e:a}catch(ka){return null}},a.prototype._trim=function(a){return String.prototype.trim?a.trim():a.replace(/(^\s*)|(\s*$)/g,"")},a}()})},"*noref":1}});define(["./qrcode","./arcgis-html-sanitizer/arcgis-html-sanitizer"],function(){});