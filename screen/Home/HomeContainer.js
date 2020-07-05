import React, {useEffect, useState} from 'react';
import {View, Text, Button} from "react-native";
import {lectureApi, noticeApi} from '../../api';
import HomePresenter from './HomePresenter';

export default () => {

    const [lectures, setLectures] = useState({
        nce: [],
        psat: [],
        ncsError: null,
        psatError: null, 
        loading: null
    });

    const [notices, setNotices] = useState({
        notice: [],
        noticeError: null,
        loading: null
    });


    const getData = async () => {
        const [ncs, ncsError] = await lectureApi.ncs();
        const [psat, psatError] = await lectureApi.psat();
        const [notice, noticeError] = await noticeApi.notice();

        setLectures({
            ncs,
            ncsError,
            psat,
            psatError,
            loading: false
        });

        setNotices({
            notice, 
            noticeError,
            loading: false
        });
    };


    useEffect(() => {
        getData();
    }, []);

    return (<HomePresenter />);

};