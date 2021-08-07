import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    height: '8rem',
    marginVertical: '0.5rem',
    marginHorizontal: '0.2rem',
    justifyContent: 'center',
    padding: '0.3rem',
    alignItems: 'center',
    borderRadius: '0.5rem',
    flexDirection: 'row',
  },
  cardRight: {
    width: '10rem',
    height: '8rem',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    padding: '0.6rem'
  },
  cardLeft: {
    width: '7rem',
    height: '8rem',
    alignItems: 'center',
  },
  textService: { 
    color: '$fontColorDark',
    fontSize: '1rem',
    fontWeight: 'bold'
  },
  textPrice: {
    color: '$fontColorLight',
    fontSize: '0.9rem',
    marginTop: '0.3rem',
  }
});

export { styles };