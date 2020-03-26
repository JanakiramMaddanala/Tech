
/**
 * NUMERIC ENUMS
 */
enum Direction {
    Up,
    Down,
    Left,
    Right
}

console.log(Direction.Up);

console.log(Direction[Direction.Up.toString()]);

console.log(Direction[Direction.Up]);

/**
 * STRING ENUMS
 */
enum Dimension {
    Width = "WIDTH",
    Height = "HEIGHT"
}

console.log(Dimension.Width);
console.log(Dimension[Dimension.Width]); // Indexing on string will not work as opposed to numbers.

/**
 * COMPUTED ENUMS
 * FourWheeler should be initialzed as it came after the computed member.
 */
enum VehicleType {
    TwoWheeler = getValueForTwoWheeler("PULSAR"),
    FourWheeler = 1
}

function getValueForTwoWheeler(name: string) {
    if (name == "PULSAR") {
        return 10;
    }

    return 100;
}

/**
 * HETEROGENEOUS ENUMS
 */
enum QuestionResponse{
    No = 0,
    Yes = "YES"
}

console.log(QuestionResponse[QuestionResponse.No]);

enum FileAcces {
    Read,
    Write,
    ReadWrite = Read | Write
}

console.log(FileAcces.Write)
console.log(FileAcces.ReadWrite)
console.log(FileAcces[FileAcces.ReadWrite])

const enum ShapeKind {
    Circle,
    Square
}
interface Circle{
    radius: number;
    shape: ShapeKind;
}

interface Square{
    sideLength: number;
}

enum FileOperation {
    CanRead = 1 << 0,
    CanWrite = 1 << 2
}

