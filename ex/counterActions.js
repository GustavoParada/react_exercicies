export function inc()
{
    return {type: 'INC'}
}

export function dec()
{
    return {type: 'DEC'}
}

export function stepChange(e)
{
    console.log(' action stepChange', e.target.value)
    return {
        type: 'STEP_CHANGE',
        payload: e.target.value
    }
}