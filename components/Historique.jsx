
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Pressable, ScrollView, Modal, TextInput, Image } from 'react-native';
import { LIVRES , CATEGORIES } from '../models/data'


export default function Historique({ navigation }){

    const [livreP , setLivreP] = useState([])

    useEffect(()=>{
        LIVRES.map((livre)=>{
            if(livre.categorieId.includes('c1')) { setLivreP((prev) => [...prev,livre]) }
        })
    },[])

    return (
        <ScrollView className="p-2 pb-10 mb-10">
            { livreP.map((livre, i)=>
                <View key={'oo'+i} className="flex flex-col pt-5">
                    <Text key={'titre'+i} className="font-bold text-lg">
                        { livre.titre }
                    </Text>
                    <Text key={'description'+i} className="truncate">
                        { livre.description }
                    </Text>
                    <View key={'image_p'+i} className="flex-1 bg-black/50 items-center justify-center">
                        <Image className="w-[100%] h-[200px] object-cover" resizeMethod='resize' resizeMode='contain' source={{ uri:livre.imageUrl }}/>
                    </View>
                </View>
            ) }
        </ScrollView>
    )
}
