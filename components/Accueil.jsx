

import { LINKS } from "./sub/Nav"
import { Text, View, Button, Pressable } from 'react-native';


export default function Accueil({ navigation }){

    return (
        <View className="flex flex-row flex-wrap p-5 gap-[5%]">
            { LINKS.map((link, i)=>
                <Pressable key={i} title={link.text} onPress={()=> navigation.navigate(link.text)} className="basis-[45%] rounded-lg p-2  bg-black">
                    <Text className="text-white">
                        { link.text }
                    </Text>
                </Pressable>
            ) }
        </View>
    );

}