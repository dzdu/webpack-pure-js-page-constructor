import './styles/main.css';
import {
    model
} from './model';
import {
    Site
} from './classes/site'
import {
    Sidebar
} from './classes/sidebar'






const site = new Site('#site')
const updateCallback = newBlock => {
    model.push(newBlock)
    site.render(model)
}

new Sidebar('#panel', updateCallback)

site.render(model)

// model.forEach((block) => {
//     site.$el.insertAdjacentHTML('beforeend', block.toHTML());
//     // const generate = templates[block.type]
//     // // console.log(generate);
//     // if (generate) {
//     //     const html = generate(block)
//     //     site.insertAdjacentHTML('beforeend', html);
//     // }
//     // if (block.type === 'title') {
//     //     html = title(block);
//     // } else if (block.type === 'text') {
//     //     html = text(block);
//     // } else if (block.type === 'textColumns') {
//     //     html = textColumns(block);
//     // }
//     // site.insertAdjacentHTML('beforeend', html);
// });