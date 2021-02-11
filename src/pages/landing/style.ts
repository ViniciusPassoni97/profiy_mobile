import { StyleSheet } from 'react-native';

const LandingStyle = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#8257E5',
        justifyContent:'center',
        padding:40
    },
    banner: {
        width:'100%',
        resizeMode:'contain'
    },
    title: {
        color:'#fff',
        lineHeight:30,
        marginTop:80,
        fontSize:20
    },
    titleBold: {
        fontWeight:'bold'
    }
});

export default LandingStyle;