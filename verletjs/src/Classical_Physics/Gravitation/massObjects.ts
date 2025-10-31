
export type MassObject2D = {
    mass: number;
}

export type Acceleration = {
    acceleration: number;
}

export type Force = {
    force: number;
}

export function Gforce(mass: MassObject2D, acc: Acceleration): Force {
    return { force: mass.mass * acc.acceleration };
}


