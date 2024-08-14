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
            ],
        },
    ],
});
