import {forEach,includes} from 'lodash-es';
import {log} from './utils/log';

// 多页应用
log('hello,another page');

forEach([1,2],(item) => {
    console.log(item);
})

console.log(includes([1,2,3],1));
import('jquery')
    .then($ => {
        console.log($);
    })