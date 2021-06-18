import { Button } from 'antd';
import * as React from 'react';

export default () => {

    React.useEffect(() => {
        fetch('/api/v1/clients')
    }, [])

    return (<Button onClick={() => console.log('hola')}>hola w333</Button>)
}