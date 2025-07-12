import {Button, StyleSheet, Text, TextInput, TextInputComponent, View} from 'react-native'
import {useState} from "react";
//import {generateQrCode} from './createQrCode';
import {generateQrCode} from './create';
import QRCode from 'react-native-qrcode-svg';

const CreateQr = () => {
    const [data,setData] = useState("");
    const [flag,setFlag] = useState(false);
    const [passingData,setPassingData] = useState("");
    return(
        <>
            <View  className="text-3xl flex-1 justify-center items-center gap-2">
                <View>
                    {
                        flag &&
                        <QRCode value={passingData} size={200} />
                    }
                </View>
                <TextInput
                    value = {data}
                    onChangeText={setData}
                    className="border border-black h-12 w-36 px-3 rounded-md"
                />
                <Button title="Convert" onPress={()=>{

                    setPassingData(generateQrCode(data));
                    setFlag(true);
                }}/>

            </View>

        </>
    )
}

export default  CreateQr;

const styles = StyleSheet.create({

});