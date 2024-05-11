import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        palette: {
            thunder: string;
            iron: string;
            boston: string;
            picton: string;
        },
        fonts: {
            text: {
                small: string;
                medium: string;
                big: string;
            },
            h2: {
                small: string;
                big: string;
            },
            h3: {
                small: string;
                big: string;
            },
            h4: {
                small: string;
                big: string;
            }
        }
    }
}