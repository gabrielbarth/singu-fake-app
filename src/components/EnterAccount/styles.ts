import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    height: '15rem',
    padding: '1.5rem',
    backgroundColor: 'white',
  },
  content: {
    height: '50%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  icon: {
    backgroundColor: '$primaryLight',
    width: '3rem',
    height: '3rem',
    flexDirection: 'row',
    borderRadius: '1.5rem',
    paddingBottom: '0.7rem',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    marginTop: '1rem',
    fontWeight: 'bold',
    fontSize: '1rem',
    textAlign: 'center',
    color: '$fontColorMedium',
  },
  textNode: {
    fontSize: '1rem',
    textAlign: 'center',
    marginTop: '0.5rem',
    color: '$fontColorLight',
  },
  buttonContainer: {
    marginTop: '1.5rem',
    flex: 1,
    height: '15rem',
  }
});

export { styles };