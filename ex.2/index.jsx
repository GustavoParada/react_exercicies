import React from 'react'

import ReactDOM from 'react-dom';
import { Primeiro, Segundo } from './componente'

ReactDOM.render(
    <div>
        <Primeiro valor='oioioi' />
        <Segundo />

    </div>
    , document.getElementById('app'))

