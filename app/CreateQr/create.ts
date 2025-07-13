//import AES from 'crypto-js/aes';
//import Utf8 from 'crypto-js/enc-utf8';
import CryptoES from "crypto-es";

export const generateQrCode  = ( data : string ) : string => {
    try{

        const secretKey = '1234';
        return CryptoES.AES.encrypt(data ,secretKey).toString();
        //return AES.encrypt(data, secretKey).toString();
    }
    catch (err)
    {
        console.log(err)
        alert(err)
        return "123";
    }
}

