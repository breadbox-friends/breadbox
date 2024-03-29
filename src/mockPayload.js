import breadbox from "../src/assets/breadbox.png";
import { renderWithOfflineFallback } from './utils/offlineFallbacks';

const mockFetchedItems = [
  {
    title: 'Apple Watermelon',
    desc: 'Watermelon flavoured apple!',
    img: renderWithOfflineFallback('https://img.icons8.com/dusk/64/000000/unicorn.png', breadbox)
  },
  {
    title: 'Lemon Water',
    desc: 'Water flavoured lemon!',
    img: renderWithOfflineFallback('https://img.icons8.com/color/64/000000/fenix.png', breadbox)
  },
  {
    title: 'Pear Biscuit',
    desc: 'Watermelon flavoured apple!',
    img: renderWithOfflineFallback('https://img.icons8.com/dusk/64/000000/unicorn.png', breadbox)
  },
  {
    title: 'Strawberry Pistachio',
    desc: 'Water flavoured lemon!',
    img: renderWithOfflineFallback('https://img.icons8.com/color/64/000000/fenix.png', breadbox)
  },
  {
    title: 'Cherry Salami',
    desc: 'Watermelon flavoured apple!',
    img: renderWithOfflineFallback('https://img.icons8.com/dusk/64/000000/unicorn.png', breadbox)
  },
  {
    title: 'Grape Cheddar',
    desc: 'Water flavoured lemon!',
    img: renderWithOfflineFallback('https://img.icons8.com/color/64/000000/fenix.png', breadbox)
  },
  {
    title: 'Peach Chicken',
    desc: 'Water flavoured lemon!',
    img: renderWithOfflineFallback('https://img.icons8.com/dusk/64/000000/unicorn.png', breadbox)
  },
 ]

 export default mockFetchedItems;
