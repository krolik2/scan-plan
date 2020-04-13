import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingLeft: 22,
        paddingRight: 22,
        paddingBottom: 16,
        backgroundColor: "#f4f4f4"
    },
    title:{
        fontFamily: "BalooTamma2-Regular",
        fontSize: 30,
        color: '#323332',
    },
      listText: {
        fontFamily: "BalooTamma2-Regular",
        fontSize: 20,
        color: '#323332',
      },
      divider: {
        borderLeftWidth: 1,
        borderLeftColor: '#707070',
        height: 23,
        marginLeft: 14,
        marginRight: 8
      },
      header: {
        flexDirection: "row",
        alignItems: "center",
        height: 80,
        width: 331,
        marginTop: 20,
        paddingTop: 20,
        backgroundColor: "#f4f4f4"
      },
      headerText: {
        color: '#323332',
        fontSize: 30,
        fontFamily: "BalooTamma2-SemiBold",
      }
})