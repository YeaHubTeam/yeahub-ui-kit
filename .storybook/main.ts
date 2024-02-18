import type { StorybookConfig } from "@storybook/react-webpack5";
import TsconfigPathsPlugin  from 'tsconfig-paths-webpack-plugin'
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    {
      name: "storybook-css-modules",
      options: {
        cssModulesLoaderOptions: {
          importLoaders: 1,
          modules: {
            localIdentName: 'css/[name].[contenthash:8].css',
          },
        },
      }
    },
    {
      name: 'storybook-addon-sass-postcss',
      options: {
        rule: {
          test: /\.(scss|sass)$/i,
        }
      }
    }
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic'
        }
      }
    }
  }),
  webpackFinal: async (config, { configType }) => {
    if (configType === 'DEVELOPMENT') {
      config.resolve?.plugins?.push(new TsconfigPathsPlugin());
    }

    return config;
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
