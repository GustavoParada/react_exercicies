import React from 'react'

import ReactDOM from 'react-dom';
import Family from './family';
import Member from './member';


ReactDOM.render(
    <div>
        <Family lastName="Parada">
            <Member name="Gustavo" />
            <Member name="Juliana" />
            <Member name="Bruna" />
        </Family>

    </div>
    , document.getElementById('app'))

