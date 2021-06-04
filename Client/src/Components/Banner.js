import React from 'react'
import {useState, useEffect} from 'react'
import {Image, StyleSheet, Dimensions, View, ScrollView} from 'react-native'
import Swiper from 'react-native-swiper'


var {width} = Dimensions.get("window");

export const Banner = ()=>{
    const [bannerData, setBannerData] = useState([])

    useEffect(()=>{
        setBannerData(['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8XW3JvqDL0TNFB4asgMFWSNbx0FqsvykLaQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnTQUDBp1IDVgY1TS09RbjZ0m3ahfnf50_Bw&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTSQGDb73dp3HjejndXgoIQkUcXas72St3qQ&usqp=CAU'
        ])

        return ()=>{
            setBannerData([])
        }
    }, [])

    return (
        <ScrollView>
            <View style={styles.container}>
            <View style={styles.swiper}>
                <Swiper
                style={{height:width/2}}
                index={0}
                showButtons={true}
                autoPlay={true}
                autoplayTimeout={1}               
                >
                    {bannerData.map(item =>{
                        return (
                            <Image
                            key={item}
                            style={styles.imageBanner}
                            resizeMode='cover'//contain
                            source={{uri: item}}
                            />
                        )
                    })}
                </Swiper>
            </View>
        </View>
        </ScrollView>
        
    )

}

const styles = StyleSheet.create({
    swiper:{
        width:width,
        alignItems:'center',
        marginTop:10,
    },
    imageBanner:{
        width: width-40,
        height:width/2,
        borderRadius: 5,
        marginHorizontal: 20
    }
}) 