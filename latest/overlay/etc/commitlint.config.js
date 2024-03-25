module.exports = {
    extends: [
        "/usr/local/lib/node_modules/@commitlint/config-conventional"
    ],
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'build',
                'chore',
                'ci',
                'docs',
                'feat',
                'fix',
                'perf',
                'refactor',
                'revert',
                'style',
                'test',
                'deps',
            ]
        ]
    }
};
