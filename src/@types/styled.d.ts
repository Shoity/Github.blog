import 'styled-components';
import { defaultTheme } from '../Styles/Themes/default';

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType { }
}