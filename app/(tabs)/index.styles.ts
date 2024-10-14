import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    safeAreaContainer: {
      flex: 1,
      width: '100%',
      height: '100%',
      backgroundColor: '#fafaf3',
    },
    container: {
        marginTop: '100%',
      width: '100%',
      padding: 12,
    },
    heading: {
      fontSize: 24,
      color: '#979995',
      textAlign: 'center',
    },
    input: {
      width: '100%',
      // fontSize: 20,
      minHeight: 50,
      borderWidth: 1,
      borderColor: '#c6c6c6',
      borderRadius: 8,
      padding: 12,
    },
    bodyContainer: {
      flex: 1,
      margin: 18,
    },
    instructionContainer: {
      margin: 25,
      paddingHorizontal: 20,
      paddingTop: 30,
      borderWidth: 1,
      borderRadius: 12,
      backgroundColor: '#ecedeb',
      borderColor: '#bebfbd',
      marginBottom: 35,
    },
    avatarImg: {
      height: 180,
      width: 180,
      resizeMode: 'contain',
      alignSelf: 'flex-end',
    },
    thoughtContainer: {
      minHeight: 50,
      borderRadius: 12,
      borderWidth: 1,
      padding: 12,
      backgroundColor: '#ffffff',
      borderColor: '#c6c6c6',
    },
    thoughtPointer: {
      width: 0,
      height: 0,
      borderStyle: 'solid',
      overflow: 'hidden',
      borderTopWidth: 12,
      borderRightWidth: 10,
      borderBottomWidth: 0,
      borderLeftWidth: 10,
      borderTopColor: 'blue',
      borderRightColor: 'transparent',
      borderBottomColor: 'transparent',
      borderLeftColor: 'transparent',
      marginTop: -1,
      marginLeft: '50%',
    },
    thoughtTitle: {
      fontSize: 14,
    },
    actionButton: {
      marginTop: 40,
    },
  });