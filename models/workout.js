const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: new Date().setDate(new Date().getDate())
    },
    exercises: Array
}, {
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true
    }
});

WorkoutSchema
    .virtual('totalDuration')
    .get(function () {
        let total = 0;
        for (var i = 0; i < this.exercises.length; i++) {
                total = total + this.exercises[i].duration;
        }
        return total;
    });

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
