import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    width: '100%',
    height: '7rem',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.3rem'
  },
  button: {
    width: '100%',
    height: '3rem',
    borderRadius: '0.1rem',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconContent: {
    width: '3rem',
    height: '3rem',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '0.6rem'
  },
  textButton: {
    color: '#FFFFFF',
    textAlign: 'center'
  }
});

export { styles };