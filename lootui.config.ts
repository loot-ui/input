import { defineConfig } from 'lootui';

defineConfig({
    components: [
        {
            name: 'Input',
            options: [
                {
                    name: 'Typescript+Styled-Components',
                    paths: ['src/input/input.tsx'],
                },
                {
                    name: 'Typescript+SCSS',
                    paths: [
                        'src/input/Scss/input.tsx',
                        'src/input/Scss/styles.module.scss',
                    ],
                },
            ],
        },
    ],
});
