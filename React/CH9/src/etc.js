$front-stack: Helvetica, sans-serif;
$primary-color: #333;
import classNames from ‘classnames’;

body {
    front:100% $front-stack;
    color: $primary-color;
} 

classNames(‘one’, ‘two’); // = ‘one two‘
classNames(‘one’, { two: true }); // = ‘one two‘
classNames(‘one’, { two: false }); // = ‘one‘
classNames(‘one’, [‘two’, ‘three’]); // = ‘one two three‘



const myClass = ‘hello’;
classNames(‘one’, myClass, { myCondition: true }); // = ‘one hello myCondition‘ 