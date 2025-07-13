import CryptoES from "crypto-es";

export const decryptQr  = (data:string) : string => {
    try{
        const secretKey : string = "1234";
        const Decrypted = CryptoES.AES.decrypt(data, secretKey);
        const result =Decrypted.toString(CryptoES.enc.Utf8);
        return result;
    }
    catch (err){
        //alert(err);
        return data;
    }
}