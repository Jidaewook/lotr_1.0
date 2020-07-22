import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Dimensions, Image } from 'react-native';
import { apiImage } from '../../api';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('screen');

const Container = styled.View``;

const BG = styled.View``;

const Slide = styled.View``;

Slide.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    url: PropTypes.string,
    thumbnail: PropTypes.string.isRequired
};

export default Slide;