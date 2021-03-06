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
    },
    buttonContainer:{
        flexDirection:'row',
        marginTop:40,
        justifyContent:'space-between',
    },
    button: {
        height:150,
        width:'48%',
        backgroundColor:'#333',
        borderRadius:8,
        padding:24,
        justifyContent:'space-between'
    },
    buttonPrimary: {
        backgroundColor:"#9871f5"
    },
    buttonText:{
        fontFamily:'Archivo_700Bold',
        color:'#fff',
        fontSize:17
    },
    buttonSecondary:{
        backgroundColor:"#04d361"
    },
    totalConnections:{
        marginTop:30,
        fontFamily:'Poppins_400Regular',
        color:'#d4c2ff',
        fontSize:12,
        lineHeight:20,
        maxWidth:140
    },
    connections:{
        marginRight:20,
    }
});

export default LandingStyle;