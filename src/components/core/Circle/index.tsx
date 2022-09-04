import React from 'react'
import { Circle as VisCircle } from '@visx/shape'
import { ScaleSVG } from '@visx/responsive'

type CircleProps = JSX.IntrinsicElements['div']

function Circle(props: CircleProps) {
    return (
        <div {...props}>
            <ScaleSVG width={34} height={34} xOrigin={0} yOrigin={0}>
                <VisCircle className="stroke-primary-500 stroke-2 fill-transparent" cx={17} cy={17} r={15} />
            </ScaleSVG>
        </div>
    )
}

export default Circle
