


/*
COUNT = 0
KEY = cc22da787f375711c76302bef0979d8eddf842829c2b99ef3dd04e23e54cc24b
PLAINTEXT =  ccc62c6b0a09a671d64456818db29a4d
CIPHERTEXT = df8634ca02b13a125b786e1dce90658b
 */





var crypto = require('crypto');
var algorithm = 'AES-256-ECB'; // or any other algorithm supported by OpenSSL

// AES-256-ECB 암호화 func()
function encrypt(data,key){
    var cipher = crypto.createCipheriv('AES-256-ECB',key, '');
    cipher.setAutoPadding(false);

    //console.log("[DEBUG] : " + data);
    var result = cipher.update(data).toString('hex');
    result += cipher.final().toString('hex');

    return result;
}

// AES-256-ECB 복호화 func()
function decrypt(data,key){
    var decipher = crypto.createDecipheriv('AES-256-ECB',key, '');
    decipher.setAutoPadding(false);

    //console.log("[DEBUG] : " + data);
    var result = decipher.update(data).toString('hex');
    result += decipher.final().toString('hex');

    return result;
}



console.log('###############[Test Start]###############');
console.log('[algorithm]\n' + algorithm);

var inputs = require('./key-data.json');
var json_data = JSON.parse(JSON.stringify(inputs));

for(var i = 0 ; i < json_data.length ; ++i) {
    var test_data = json_data[0];
    var KEY = key = new Buffer(test_data.KEY, 'hex');       // BASE64 Decoding
    var PLAINTEXT = new Buffer(test_data.PLAINTEXT, 'hex');
    var CIPHERTEXT = new Buffer(test_data.CIPHERTEXT, 'hex');


    console.log("===================================================================================== TEST [" + i + "]");
    console.log("-----------------------[DATA]-----------------------");
    console.log('[KEY] : ' + KEY.toString('hex'));
    console.log('[PLAINTEXT] : ' + PLAINTEXT.toString('hex'));
    console.log('[CIPHERTEXT] : ' + CIPHERTEXT.toString('hex'));


    console.log("------------------------[RUN]-----------------------");
    console.log("[PLAINTEXT] : " + PLAINTEXT.toString('hex'));

    var chipered = encrypt(PLAINTEXT, KEY);         // encrypt run
    console.log("[CIPHERTED] : " + chipered.toString('hex'));

    var dechipered = decrypt(new Buffer(chipered, 'hex'), KEY);      // decrypt run
    console.log("[DECIPHERTED] : " + dechipered.toString('hex'));
    console.log("==============================================================================================");
    console.log('');
    console.log('');


}






