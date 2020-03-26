/**
 * NUMERIC ENUMS
 */
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up);
console.log(Direction[Direction.Up.toString()]);
console.log(Direction[Direction.Up]);
/**
 * STRING ENUMS
 */
var Dimension;
(function (Dimension) {
    Dimension["Width"] = "WIDTH";
    Dimension["Height"] = "HEIGHT";
})(Dimension || (Dimension = {}));
console.log(Dimension.Width);
console.log(Dimension[Dimension.Width]); // Indexing on string will not work as opposed to numbers.
/**
 * COMPUTED ENUMS
 * FourWheeler should be initialzed as it came after the computed member.
 */
var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["TwoWheeler"] = getValueForTwoWheeler("PULSAR")] = "TwoWheeler";
    VehicleType[VehicleType["FourWheeler"] = 1] = "FourWheeler";
})(VehicleType || (VehicleType = {}));
function getValueForTwoWheeler(name) {
    if (name == "PULSAR") {
        return 10;
    }
    return 100;
}
/**
 * HETEROGENEOUS ENUMS
 */
var QuestionResponse;
(function (QuestionResponse) {
    QuestionResponse[QuestionResponse["No"] = 0] = "No";
    QuestionResponse["Yes"] = "YES";
})(QuestionResponse || (QuestionResponse = {}));
console.log(QuestionResponse[QuestionResponse.No]);
var FileAcces;
(function (FileAcces) {
    FileAcces[FileAcces["Read"] = 0] = "Read";
    FileAcces[FileAcces["Write"] = 1] = "Write";
    FileAcces[FileAcces["ReadWrite"] = 1] = "ReadWrite";
})(FileAcces || (FileAcces = {}));
console.log(FileAcces.Write);
console.log(FileAcces.ReadWrite);
console.log(FileAcces[FileAcces.ReadWrite]);
var FileOperation;
(function (FileOperation) {
    FileOperation[FileOperation["CanRead"] = 1] = "CanRead";
    FileOperation[FileOperation["CanWrite"] = 4] = "CanWrite";
})(FileOperation || (FileOperation = {}));
