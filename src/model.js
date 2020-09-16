import img from './assets/logo.png';
import {
    TitleBlock,
    ImgBlock,
    TextBlock,
    TextColumnsBlock,
    TextBlockWithImage,

} from './classes/blocks';
import {
    css
} from './utils'

export const model = [
    new TitleBlock('Pure JS page constructor ', {
        tag: 'h1',
        styles: css({
            background: 'linear-gradient(45deg, #32a1e6 , #e632da)',
            color: '#fff',
            padding: '2rem',
            'text-align': 'center'
        })
        // styles: 'background-image:linear-gradient(45deg, #32a1e6 , #e632da); color: #fff; text-align: center; padding: 1rem;',
    }),
    new ImgBlock(img, {
        alt: 'logo',
        styles: 'padding: 2rem 0; displa:flex; text-align:center;',
        imageStyles: 'width:300px; height:auto; ',
    }),
    new TextBlock(
        '  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident ab enim non ea recusandae in mollitia nobis quasi totam. Totam fugit perspiciatis animi suscipit quae. Provident ipsum architecto aspernatur necessitatibus exercitationem dolor odit repellat, assumenda quia aliquam optio, maiores hic, fugiat placeat ratione reprehenderit expedita. Excepturi sed ducimus voluptatum doloremque quia totam tenetur quod necessitatibus molestias error, nemo in, minus repudiandae perferendis cupiditate. Et sed ab sint aliquam accusamus a deserunt corporis consequuntur dolorem debitis voluptates perspiciatis dicta natus omnis, porro ratione? Facere quae voluptates repudiandae eligendi numquam quidem, suscipit repellendus distinctio, provident ullam minima perspiciatis doloribus! Veritatis, laudantium praesentium.', {
            styles: 'background-image:linear-gradient(45deg, #7432e6 , #32e695); color: #fff; text-align: center; padding: 1rem; font-size: 30px; margin:0.5rem',
        },
    ),
    new TextColumnsBlock(['Some text here ', 'And some text here', 'And here', 'And also here'], {
        styles: 'border:2px solid #7432e6; color: #32e695; text-align: center; padding: 1rem; font-size: 25px; margin:0.5rem',
    }),
    new TextBlockWithImage(img, {
        alt: 'logo',
        styles: 'padding: 2rem 0; displa:flex; text-align:center; background:linear-gradient(33deg, #424242, #fff); color:red; font-size:40px;',
        imageStyles: 'width:300px; height:auto; ',
    }),

];