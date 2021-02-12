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
        fontFamily:'Poppins_400Regular',
        color:'#fff',
        lineHeight:30,
        marginTop:80,
        fontSize:20
    },
    titleBold: {
        fontFamily:'Poppins_600SemiBold',
    }
});

export default LandingStyle;