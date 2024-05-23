import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './components/**/*.{html,js,ts,vue}',
        './pages/**/*.{html,js,ts,vue}',
        './layouts/**/*.{html,js,ts,vue}'
    ],
    theme: {
        extend: {
            colors: {
                red: {
                    500: '#ED5151',
                    200: '#FFE7E7'
                },
                black: {
                    DEFAULT: '#171718',
                    500: '#171718'
                },
                white: '#FFF'
            },

            screens: {
                xl: { max: '1400px' },
                lg: { max: '1280px' },
                md: { max: '1000px' },
                sm: { max: '750px' },
                xs: { max: '500px' },
                'a-xs': { min: '501px' },
                'a-sm': { min: '751px' },
                'a-md': { min: '1001px' },
                'a-lg': { min: '1281px' },
                'a-xl': { min: '1401px' },
                'a-2xl': { min: '1430px' }
            }
        },
        fontFamily: {
            roboto: ['Roboto Slab', ...defaultTheme.fontFamily.sans],
            mono: ['GolosMono', ...defaultTheme.fontFamily.mono]
        }
    },
    plugins: []
}

