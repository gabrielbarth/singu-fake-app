import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    padding: '1.5rem',
    backgroundColor: 'rgba(255,255,255,0.8)',
    alignItems: 'center',
  },
  content: {
    width: '100%',
    justifyContent: 'center',
  },
  image: {
    width: '60%',
    height: '8rem'
  },
  textBeLady: {
    fontSize: '1rem',
    textAlign: 'center',
    color: '$primary',
    textDecorationLine: 'underline'
  },
  buttonsContainer: {
    height: '12rem',
    justifyContent: 'space-around'
  },
  buttonBeLady: {
    width: '100%',
    height: '4rem',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.3rem',
    marginTop: '1rem',
  }
});

export { styles };