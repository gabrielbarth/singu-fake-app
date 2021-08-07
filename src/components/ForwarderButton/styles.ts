import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    width: '100%',
    height: '3.5rem',
    paddingHorizontal: '5%',
    marginVertical: '0.5rem',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    marginLeft: '1rem',
    fontSize: '1rem'
  }
});

export { styles };