/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                brand: {
                    'base': {
                        DEFAULT: '#FEFEFE',
                        100: '#333333',
                        200: '#666666',
                        300: '#999999',
                        400: '#cccccc',
                        500: '#fefefe',
                        600: '#ffffff',
                        700: '#ffffff',
                        800: '#ffffff',
                        900: '#ffffff'
                    },
                    'dark': {
                        DEFAULT: '#605B66',
                        100: '#131215',
                        200: '#272429',
                        300: '#3a373e',
                        400: '#4d4952',
                        500: '#605b66',
                        600: '#807988',
                        700: '#a09aa6',
                        800: '#bfbcc4',
                        900: '#dfdde1'
                    },
                    'accent': {
                        DEFAULT: '#FB0232',
                        100: '#32010b',
                        200: '#650115',
                        300: '#970220',
                        400: '#ca022a',
                        500: '#fb0232',
                        600: '#fd355d',
                        700: '#fd6886',
                        800: '#fe9aae',
                        900: '#fecdd7'
                    },
                }
            },

            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        a: {
                            'text-decoration': 'none',
                            'background-repeat': 'no-repeat',
                            'background-size': '100% 1.5px',
                            'background-position': '0 100%',
                            'background-image':
                                'linear-gradient(to right, rgb(var(--color-text-link)/1), rgb(var(--color-text-link)/1))',
                            '&:hover': {
                                color: 'rgb(var(--color-text-link))',
                            },
                        },
                        'h1, h2, h3, h4, h5': {
                            color: 'rgb(var(--color-text-heading))',
                        },
                        iframe: {
                            'border-radius': '0.5rem',
                        },
                        code: {
                            'background-color': 'rgb(var(--color-code-bg))',
                            color: 'rgb(var(--color-code-text))',
                            padding: '0.25rem 0.5rem',
                            'border-radius': '0.25rem',
                            'font-size': '0.875rem',
                            'line-height': '1.5',
                            'font-family': "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
                        },
                        'ol > li::before': {
                            color: 'rgb(var(--color-text-bold))',
                        },
                        li: {
                            'margin-bottom': '0.5rem',
                            color: 'rgb(var(--color-code-text))',
                            'font-size': '1rem',
                            'line-height': '1.5',
                            'font-family': "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
                        },
                        'code::before': {
                            content: 'none',
                        },
                        'code::after': {
                            content: 'none',
                        },
                        blockquote: {
                            border: 'none',
                            position: 'relative',
                            width: '96%',
                            margin: '0 auto',
                            'font-size': '1.0625em',
                            'padding-top': '1.5rem',
                            'padding-bottom': '0.5rem',
                            'padding-left': '1.5rem',
                            'padding-right': '1.5rem',
                        },
                        'blockquote::before': {
                            'font-family': 'Arial',
                            content: "'“'",
                            'font-size': '4em',
                            color: 'rgb(var(--color-text-bold))',
                            position: 'absolute',
                            left: '-10px',
                            top: '-10px',
                        },
                        'blockquote::after': {
                            content: '',
                        },
                        'blockquote p:first-of-type::before': {
                            content: '',
                        },
                        'blockquote p:last-of-type::after': {
                            content: '',
                        },
                    },
                },
            }),
        },
    },
    plugins: [require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio')],
};
