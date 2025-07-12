
import { Text, View } from "react-native";
import {Link} from "expo-router";



export default function Index() {
  return (
    <View className="flex-1 justify-center gap-4 items-center bg-gray-300">
      {/*<Text className="font-bold text-3xl text-dark-200"></Text>*/}
        <Link
            className="text-3xl"
            href="./CreateQr/CreateQr"
        >
            CreateQr
        </Link>

      <Link
          className="text-3xl"
          href="./DecodeQr/DecodeQr"
      >
        DecodeQr
      </Link>

    </View>
  );
}
