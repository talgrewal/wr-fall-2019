const THEME = {
  typography: {
    mainFont: 'NeueHaasDisplay-Roman',
    headerFont: 'FiraSans-Bold',
    hugeText: 24,
    largeText: 20,
    subheaderText: 18,
    baseSize: 16,
    contentText: 14,
    smallText: 12,
    tinyText: 10,
  },
  colors: {
    black: '#000000',
    white: '#FFFFFF',
    red: '#CC0000',
    darkGreen: '#231F20',
    grey: '#B1B1B1',
    charcoal: '#242424',
    darkGrey: '#2B2B2B',
  },
  formatting: {
    centeredChildren: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    containerWidth: '82%',
    icon: {
      height: 30,
      width: 30,
      resizeMode: 'contain',
      marginTop: 5,
    },
    baseSpacing: 16,
  },
};

export default THEME;
