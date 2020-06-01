
import HtmlWebpackPlugin from 'html-webpack-plugin';


export const htmlPlugin = new HtmlWebpackPlugin({
    title: 'Item Manager',
    template: 'src/index.ejs'
});
