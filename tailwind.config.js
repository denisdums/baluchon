module.exports = {
    theme: {
        mode: 'jit',
        extend: {
            colors: {
                'blue': 'blue',
            },
            zIndex: {
                'before': '-1',
            },
        },
    },
    variants: {},
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/line-clamp'),
    ],
    purge: {
        enabled: false,
        content: [
            './public/index.html',
        ],
    },
}
