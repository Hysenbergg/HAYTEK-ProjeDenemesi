import React from 'react';
import { Stack, Button } from '@react-native-material/core';


const Buton = ({ text, variant, onPress, color}) => {
    return (
        <Stack fill center >
            <Button title={text} variant={variant} onPress={onPress} color={color} transitionDuration= {500} />
        </Stack>
    )
}

export default Buton;