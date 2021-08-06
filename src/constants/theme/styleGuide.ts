const tintColorLight = '#FF573E';
const tintColorDark = '#EFBA6A';

// App general colors
const colors = {
    primary: '#FF573E',
    primaryGradientBottonLeft: '#FF573E',
    primaryGradientTopRight: '#EFBA6A',

    light: {
        textDark: '#151515',
        textMedim: '#2E2C2C',
        textLight: '#8C8282',
        background: '#DAD3D3',
        tint: tintColorLight,
        tabIconDefault: '#8C8282',
        tabIconSelected: tintColorLight,
    },

    dark: {
        textDark: '#DAD3D3',
        textMedim: '#B7B1B1',
        textLight: '#928F8F',
        background: '#151515',
        tint: tintColorDark,
        tabIconDefault: '#B7B1B1',
        tabIconSelected: tintColorDark,
    },
};

//extended StyleSheet - LIGHT MODE
const lightTheme = {
    $fontColorDark: colors.light.textDark,
    $fontColorMedium: colors.light.textMedim,
    $fontColorLight: colors.light.textLight,
    $bgColor: colors.light.background,
    $rem: 16,
};

//extended StyleSheet - DARK MODE
const darkTheme = {
    $fontColorDark: colors.dark.textDark,
    $fontColorMedium: colors.dark.textMedim,
    $fontColorLight: colors.dark.textLight,
    $bgColor: colors.dark.background,
    $rem: 16,
};

export { lightTheme, darkTheme, colors };