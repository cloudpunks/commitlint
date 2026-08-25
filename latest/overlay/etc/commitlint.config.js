module.exports = {
    extends: [
        "/usr/local/lib/node_modules/@commitlint/config-conventional"
    ],
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'feat',
                'fix',
                'docs',
                'style',
                'refactor',
                'perf',
                'test',
                'build',
                'ci',
                'chore',
                'revert',
                'major',
                'minor',
                'patch',
                'deps',
            ]
        ]
    }
};
