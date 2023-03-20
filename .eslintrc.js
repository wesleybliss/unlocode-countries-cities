module.exports = {
    extends: 'next/core-web-vitals',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    overrides: [],
    plugins: [
        'react',
        'indent-empty-lines',
    ],
    globals: {
        process: 'readonly', // 'writable'
        console: 'readonly',
        __dirname: 'readonly',
        Logger: 'readonly',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        // @todo disabled for now, but should add prop types later
        'react/prop-types': 'off',
        
        'indent': [
            'error',
            4,
            {
                SwitchCase: 1,
            },
        ],
        'linebreak-style': [
            'error',
            'unix',
        ],
        'quotes': [
            'error',
            'single',
        ],
        'semi': [
            'error',
            'never',
        ],
        'arrow-parens': ['error', 'as-needed',
        ],
        'lines-between-class-members': ['error', 'always',
            { 'exceptAfterSingleLine': true,
            },
        ],
        'comma-dangle': ['error', 'always-multiline',
        ],
        
        /* 'padded-blocks': ['error', {
            blocks: 'always',
            classes: 'always',
            'switches': 'never',
        }, {
            allowSingleLineBlocks: true,
        }], */
        
        'block-spacing': ['error', 'always',
        ],
        
        // 'padded-blocks': ['error', 'always'],
        
        'padded-blocks': 'off',
        'space-before-blocks': ['error', 'always',
        ],
        'indent-empty-lines/indent-empty-lines': ['error',
            4,
        ],
        'padding-line-between-statements': [
            // https://eslint.org/docs/latest/rules/padding-line-between-statements
            
            'error',
            { blankLine: 'any', 'prev': '*', 'next': 'return',
            },
            { blankLine: 'always', prev: ['const', 'let', 'var',
            ], next: '*',
            },
            { blankLine: 'any', prev: ['const', 'let', 'var',
            ], next: ['const', 'let', 'var',
            ],
            },
            
            /* { blankLine: 'always', prev: 'block-like', next: '*' },
            { blankLine: 'always', prev: '*', next: 'block-like' }, */
            { blankLine: 'always', prev: '*', next: 'block',
            },
            { blankLine: 'always', prev: 'block', next: '*',
            },
            { blankLine: 'always', prev: '*', next: 'block-like',
            },
            { blankLine: 'always', prev: 'block-like', next: '*',
            },
            { blankLine: 'always', prev: 'multiline-block-like', next: '*',
            },
            { blankLine: 'always', prev: '*', next: 'multiline-block-like',
            },
            
            // { 'blankLine': LINEBREAK_TYPE, 'prev': STATEMENT_TYPE, 'next': STATEMENT_TYPE },
        ],
        
        /* 'object-curly-newline': ['error', {
            'ObjectExpression': 'always',
            'ObjectPattern': { 'multiline': true },
            'ImportDeclaration': 'never',
            'ExportDeclaration': { 'multiline': true, 'minProperties': 3 },
            'consistent': true,
        }],
        */
        
        'lines-around-comment': ['error',
            {
                beforeBlockComment: true,
                
                // afterBlockComment: true,
                beforeLineComment: true,
                afterLineComment: false,
                allowBlockStart: true,
                allowBlockEnd: true,
                allowObjectStart: true,
                allowObjectEnd: true,
                allowArrayStart: true,
                allowArrayEnd: true,
                allowClassStart: true,
                allowClassEnd: true,
            },
        ],
        'multiline-ternary': 'off',
    },
}
