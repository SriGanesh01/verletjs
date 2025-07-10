

export type Scalar2D = number;

export type Direction2D = "north" | "south" | "east" | "west" | "north-east" | "north-west" | "south-east" | "south-west";

export type Vector2D = {
    speed: number;
    direction: Direction2D;
}

export type Distance2D = number


export type Displacement2D = {
    distance: number;
    direction: Direction2D;
}

export const inverse: Record<Direction2D, Direction2D> = {
    "north": "south",
    "south": "north",
    "east": "west",
    "west": "east",
    "north-east": "south-west",
    "south-west": "north-east",
    "north-west": "south-east",
    "south-east": "north-west"
}

// Speed = distance/time (d/t)
export function speed2D(distance:Distance2D, timeTaken:number): Scalar2D {
    if (timeTaken === 0) throw new Error("Time taken must be non-zero.");
    return (distance/timeTaken); //* in m/s
}

// Velocity = displacement/time (s/t)
export function velocity2D(displacement:Displacement2D, timeTaken:number): Vector2D {
    if (timeTaken === 0) throw new Error("Time taken must be non-zero.");
    return {
        speed:(displacement.distance/timeTaken),
        direction: displacement.direction
    } //* in m/s
}

// Acceleration - Rate of change in velocity

export function reverseDirection(direction: Direction2D): Direction2D {
    return inverse[direction]
}

export function changeInVelocity(initialVelocity: Vector2D, finalVelocity: Vector2D): Vector2D {
    let direction: Direction2D = initialVelocity.direction;
    if (initialVelocity.direction === reverseDirection(finalVelocity.direction))
    {
        if (initialVelocity.speed >= finalVelocity.speed)
        {
            direction = initialVelocity.direction;
        }
        else {
            direction = finalVelocity.direction;
        }
    }
    // Add logic if they are not opposite directions. like north and west.
    // Potentially change how vectors work, like a matrix/list instead of strings
    return {
        speed: (finalVelocity.speed-initialVelocity.speed),
        direction: direction
    }
}

