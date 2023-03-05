import { View, Image, Text, StyleSheet } from 'react-native'
import { COLORS } from '../constants';

const ModalCard = ({ data }) => {
    return (
        <View style={styles.container}>
            <View style={styles.eachOption}>
                <Image source={data.logo} style={styles.logoStyle} />
                <Text style={styles.textStyle}>
                    {data.name}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.pastel_darker_blue,
        opacity: 0.8
    },
    eachOption: {
        margin: 3,
        flexDirection: 'row'
    },
    textStyle: {
        fontWeight: 'bold',
        padding: 3,
        color: COLORS.black,
    },
    logoStyle: {
        width: 20,
        height: 20,
    }
});

export default ModalCard;