import {
    RuleConfigSeverity,
} from '@commitlint/types';

module.exports = {
    extends: [
        "/usr/local/lib/node_modules/@commitlint/config-conventional"
    ],
    rules: {
        'type-enum': [
            RuleConfigSeverity.Error,
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
