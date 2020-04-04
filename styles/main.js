import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        color: '#fff',
        backgroundColor: "#4C5454"
    },
    title:{
        textAlign: 'center',
        fontFamily: "OpenSans-Regular",
        fontSize: 25,
        color: '#fff',
    },
    list: {
        flex: 1,
        paddingLeft: 30,
        paddingRight: 30,
        flexDirection: 'row',
        justifyContent: 'center',
      },
      listItem: {
        textAlign: 'left',
        fontFamily: "OpenSans-Regular",
        fontSize: 20,
        color: '#fff',
      },
      qrContainer: {
        marginTop: 10,
        flex: 1,
        alignItems: 'center',
        marginBottom: 20
      },
})