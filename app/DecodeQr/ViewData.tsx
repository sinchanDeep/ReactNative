import {Text, View} from "react-native";
import { useLocalSearchParams } from 'expo-router';

const ViewData = ()=>{
    const { value } = useLocalSearchParams();
    return(
        <>
            <View className="flex-1 text-center h-full w-full justify-center items-center">
                <Text >
                    {value}
                </Text>
            </View>

        </>
    )
}

export default  ViewData;