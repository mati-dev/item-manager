
import MiniCssExtractPlugin from 'mini-css-extract-plugin';


export function styleRule(env: string): object {
    return {
        test: /\.s?css$/,
        use: [
            {
                loader: MiniCssExtractPlugin.loader,
                options: {
                    hmr: process.env.NODE_ENV === 'development'
                }
            },
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        localIdentName: env !== 'production' ? '[path][name]__[local]' : '[hash:base64]'
                    },
                    localsConvention: 'camelCase'
                }
            },
            'sass-loader'
        ]
    };
}
