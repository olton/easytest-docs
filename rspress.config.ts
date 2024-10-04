import * as path from 'path';
import {defineConfig} from 'rspress/config';
import { pluginGoogleAnalytics } from 'rsbuild-plugin-google-analytics';
import { pluginOpenGraph } from 'rsbuild-plugin-open-graph';
import { pluginFontOpenSans } from 'rspress-plugin-font-open-sans';

export default defineConfig({
    root: path.join(__dirname, 'docs'),
    title: 'EasyTest - Simple framework for testing JavaScript/TypeScript',
    description: 'EasyTest - Simple framework for testing JavaScript/TypeScript',
    lang: 'en',
    icon: '/easytest-icon.png',
    logo: {
        light: '/light-logo.png',
        dark: '/dark-logo.png',
    },
    markdown: {
        checkDeadLinks: true,
    },
    plugins: [pluginFontOpenSans()],
    builderConfig: {
        dev: {
            lazyCompilation: true,
        },
        plugins: [
            pluginGoogleAnalytics({ id: 'G-66B2Z6KG0J' }),
            pluginOpenGraph({
                title: 'EasyTest',
                type: 'website',
                url: 'https://easy.org.ua/',
                image: 'https://easy.org.ua/og-image.png',
                description: 'Simple framework for testing JavaScript/TypeScript',
                twitter: {
                    site: '@serhii_pimenov',
                    card: 'summary_large_image',
                },
            }),
        ],
    },
    themeConfig: {
        enableContentAnimation: true,
        enableAppearanceAnimation: false,
        footer: {
            message: '© 2024 Serhii Pimenov. All Rights Reserved.',
        },
        socialLinks: [
            {icon: 'github', mode: 'link', content: 'https://github.com/olton/easytest'},
        ],
        sidebar: {
            '/guide/': [
                {
                    text: 'Introduction',
                    link: '/guide/index',
                },
                {
                    text: 'Getting Started',
                    items: [
                        {
                            text: 'Quick Start',
                            link: '/guide/getting-started/quick-start',
                        },
                        {
                            text: 'DOM (Document Object Model)',
                            link: '/guide/getting-started/dom',
                        },
                        {
                            text: 'TypeScript Support',
                            link: '/guide/getting-started/typescript',
                        },
                        {
                            text: 'Configuration',
                            link: '/guide/getting-started/configuration',
                        },
                        {
                            text: 'Built-in Matchers',
                            link: '/guide/getting-started/matchers',
                        },
                    ],
                },
                {
                    text: 'Features',
                    items: [
                        {
                            text: 'Core Methods',
                            link: '/guide/features/core',
                        },
                        {
                            text: 'Expect and Matchers',
                            link: '/guide/features/matchers',
                        },
                        {
                            text: 'Setup and Teardown',
                            link: '/guide/features/setup-teardown',
                        },
                        {
                            text: 'Testing Async Code',
                            link: '/guide/features/async',
                        },
                        {
                            text: 'Testing HTML Elements',
                            link: '/guide/features/html',
                        },
                        {
                            text: 'Mock Functions',
                            link: '/guide/features/mocking',
                        },
                        {
                            text: 'Verbose mode',
                            link: '/guide/features/verbose',
                        },
                    ],
                },
                {
                    text: 'Guides',
                    items: [
                        {
                            text: 'Upload Report to Codecov',
                            link: '/guide/guides/codecov',
                        },
                        {
                            text: 'Debugging',
                            link: '/guide/guides/debugging',
                        },
                    ]
                },
                {
                    text: 'Advanced',
                    items: [
                        {
                            text: 'Using Custom Matchers',
                            link: '/guide/advanced/custom-matchers',
                        },
                    ]
                },
                {
                    text: 'Framework Guides',
                    items: [
                        {
                            text: 'Metro UI',
                            link: '/guide/frameworks/metroui',
                        },
                        {
                            text: 'React Apps',
                            link: '/guide/frameworks/react',
                        },
                        {
                            text: 'Angular Apps',
                            link: '/guide/frameworks/angular',
                        },
                        {
                            text: 'Vue Apps',
                            link: '/guide/frameworks/vue',
                        },
                    ]
                },
            ],
        },
    },
    globalStyles: path.join(__dirname, 'styles/index.css'),
});
