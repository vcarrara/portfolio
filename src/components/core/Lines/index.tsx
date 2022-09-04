import React from 'react'
import { ScaleSVG } from '@visx/responsive'
import { Line } from '@visx/shape'

type LinesProps = {
    edges?: number
} & JSX.IntrinsicElements['div']

function Lines({ edges = 4, ...props }: LinesProps) {
    return (
        <div {...props}>
            <ScaleSVG width={(edges + 1) * 10} height={10} xOrigin={0} yOrigin={0}>
                {[...Array(edges)].map((_, idx) => (
                    <Line
                        key={idx}
                        className="stroke-primary-500 stroke-2 fill-transparent"
                        x1={idx * 10}
                        y1={(idx % 2) * 10}
                        x2={(idx + 1) * 10}
                        y2={((idx + 1) % 2) * 10}
                    />
                ))}
            </ScaleSVG>
        </div>
    )
}

export default Lines
