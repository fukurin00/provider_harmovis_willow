
export interface Arc  {
    src: number[],
    tgt: number[],
    srcCol: number[],
    tgtCol: number[],
    tilt?: number
}

interface Point{
    point: number[]
}
export interface Trips{
    path: Point[],
    ts: number[],
    color: number[],
}
export interface Scatter  {
    pos: number[],
    radius: number,
    fillCol: number[],
    lineCol: number[],
    lineWid?: number
}


export interface LabelInfo {
    label: string,
    style: string
}
