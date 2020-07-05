import React, {useEffect, useState} from 'react';
import {View, Text, Button} from "react-native";
import {lectureApi} from '../../api';

export default () => {

    const [lectures, setLectures] = useState({
        nce: [],
        psat: [],
        ncsError: null,
        psatError: null
    });

    const getData = async () => {
        const [ncs, ncsError] = await lectureApi.ncs();
        const [psat, psatError] = await lectureApi.psat();

        setLectures({
            ncs,
            ncsError,
            psat,
            psatError
        });
    };


    useEffect(() => {
        getData();
    }, []);

    return (
        <View style={{flex: 1, backgroundColor: "white"}}>
            <Text style={{color: "black"}}>
                ncsCount is : {lectures.ncs?.length}
            </Text>
            <Text style={{color: "black"}}>
                psatCount is : {lectures.psat?.length}
            </Text>
        </View>
    )

};