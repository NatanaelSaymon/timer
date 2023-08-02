//APENAS CODIGO DE "DEFINIÇÃO" DE TIPOS OU SEJA SÓ TEM TIPAGEM

import 'styled-components';
import { defaultTheme } from '../styles/themes/default';

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}
}
