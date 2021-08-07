import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    width: '100%',
    height: '3.5rem',
    paddingHorizontal: '5%',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontWeight: 'bold',
    fontSize: '1rem'
  }
});

export { styles };