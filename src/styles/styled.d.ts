import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        palette: {
            thunder: string;
            iron: string;
            boston: string;
            picton: string;
        }
    }
}